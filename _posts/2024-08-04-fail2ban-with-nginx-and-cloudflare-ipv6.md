---
layout: post
title: "Fail2Ban With Nginx and Cloudflare Free (With IPv6 Support)"
description: "A guide to setting up Fail2Ban with Nginx and Cloudflare free plan with IPv6 support. Includes instructions to restore original visitor IP in Nginx."
seo:
  date_modified: 2024-08-11
---

This post will teach you how to set up Fail2Ban actions for services reverse-proxied by Nginx and proxied by Cloudflare. I'll be using Vaultwarden as an example. I have Nginx and Fail2Ban installed natively, and Vaultwarden in a Docker container. You can adjust it to work with Nginx and/or Fail2Ban running in Docker containers.

## Unmask Visitor IP in Nginx

Nginx needs to know the visitor's real IP for the ban to work. Without this step, Nginx will simply see Cloudflare IPs and let it through. Even if you're not going to use Fail2Ban, you should set this up.

Make sure `jq` and `crontab` are installed in your system. We'll be using a cronjob to fetch Cloudflare IPs and Nginx's [ngx_http_realip_module](https://nginx.org/en/docs/http/ngx_http_realip_module.html) to unmask the IPs. The script we're using is from [this GitHub repo](https://github.com/jaapmarcus/nginx-cloudflare-real-ip/tree/use-api-instead).

Place the script somewhere on your system. I have it in `/opt/scripts/cloudflare.sh`.

```bash
#!/bin/bash

cf_ips="$(curl -fsLm2 --retry 1 https://api.cloudflare.com/client/v4/ips)"
CLOUDFLARE_FILE_PATH=${1:-/etc/nginx/cloudflare}

echo "# Cloudflare IP Ranges" > $CLOUDFLARE_FILE_PATH
echo "" >> $CLOUDFLARE_FILE_PATH
echo "# - IPv4" >> $CLOUDFLARE_FILE_PATH
for ipv4 in $(echo "$cf_ips" | jq -r '.result.ipv4_cidrs[]//""' | sort); do
    echo "set_real_ip_from $ipv4;" >> $CLOUDFLARE_FILE_PATH
done
echo "" >> $CLOUDFLARE_FILE_PATH

echo "# - IPv6" >> $CLOUDFLARE_FILE_PATH
for ipv6 in $(echo "$cf_ips" | jq -r '.result.ipv6_cidrs[]//""' | sort); do
    echo "set_real_ip_from $ipv6;" >> $CLOUDFLARE_FILE_PATH
done
echo "" >> $CLOUDFLARE_FILE_PATH

echo "real_ip_header CF-Connecting-IP;" >> $CLOUDFLARE_FILE_PATH

nginx -t && systemctl reload nginx
```

Make sure the file permissions are set to `755` (`sudo chmod 755 /opt/scripts/cloudflare.sh`).

Add the following cronjob using `sudo crontab -e`:

```bash
# Sync Cloudflare IPs and reload Nginx
0 4 * * * /opt/scripts/cloudflare.sh >/dev/null 2>&1
```

Add this line to the `http` block in your Nginx config `/etc/nginx/nginx.conf`:

```nginx
include /etc/nginx/cloudflare;
```

Now for every service you're reverse-proxying, add this line inside `location` in the `server` block:

```nginx
include proxy_params;
```

Run `sudo nginx -t` to verify the config, and reload the config using `sudo systemctl reload nginx`. Nginx will now unmask the visitors' real IP coming through Cloudflare proxy.

## Setup Cloudflare

Free Cloudflare accounts are limited to 5 WAF rules per zone. But Cloudflare offers one free [custom list](https://developers.cloudflare.com/waf/tools/lists/custom-lists/) that can store 10,000 IPs. This is more than enough.

Start by creating a custom list. Follow [these instructions](https://developers.cloudflare.com/waf/tools/lists/create-dashboard/). You can name it whatever you want. Make sure "Type" is set to "IP". Select "Create" and check the URL. It will be in the following format: `https://dash.cloudflare.com/<account-id>/configurations/lists/<list-id>/add`. Note down the values in `account-id` and `list-id`, we'll be using this later.

We also need an API token to edit this list. Follow [these instructions](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/). We'll be using a custom token. Set the permissions to "Account", "Account Filter Lists", and "Edit". Note down the API token.

Next up, create a WAF rule. Follow [these instructions](https://developers.cloudflare.com/waf/custom-rules/create-dashboard/). Set "Field" to "IP Source Address" and "Operator" to "is in list". Your list should automatically be selected. Set "Action" to "Block" and "Order" to "First". That's your Cloudflare setup done!

## Setup Fail2Ban

Make sure `jp` is installed in your system.

The action we're going to be using is from [@sebres](https://gist.github.com/Xunnamius/6057a660d06bcf13cc1f478af9131423?permalink_comment_id=5049552#gistcomment-5049552). This supports both IPv4 and IPv6 addresses. Create `/etc/fail2ban/action.d/cloudflare-list.conf` with the following contents:

```toml
[Definition]
actionban = curl -s -o /dev/null -X POST <_cf_api_prms> \
                 -d '[{"ip":"'"<cfip>"'","comment":"Created by fail2ban <name>"}]' \
                 <_cf_api_url>
actionunban = id=$(curl -s -X GET <_cf_api_prms> \
                   "<_cf_api_url>?search=<cfip>&per_page=1" \
                   | { jp --unquoted 'result[0].id | not_null(@, `""`)' 2>/dev/null; })
              if [ -z "$id" ]; then echo "<name>: id for <ip> cannot be found"; exit 0; fi;
              curl -s -o /dev/null -X DELETE <_cf_api_prms> \
                   -d '{"items":[{"id":"'"$id"'"}]}' \
                   <_cf_api_url>
_cf_api_url = https://api.cloudflare.com/client/v4/accounts/<cfaccountid>/rules/lists/<cfbanlistid>/items
_cf_api_prms = -H 'Authorization: bearer <cfapitoken>' -H 'Content-Type: application/json'

[Init]
cfip = <ip>

[Init?family=inet6]
cfip = $(fail2ban-python -c 'import sys; from fail2ban.server.ipdns import IPAddr; a = IPAddr(sys.argv[1]+"/"+sys.argv[2]); print(str(a))' "<ip>" 64)
```

Now create `/etc/fail2ban/action.d/cloudflare-list.local` with the following contents:

```toml
[Init]
cfapitoken = <api-token>
cfaccountid = <account-id>
cfbanlistid = <list-id>
```

Fill in the details, and **make sure** you set the file's permissions to `640` (`sudo chmod 640 /etc/fail2ban/action.d/cloudflare-list.local`) to ensure only _root_ can read this file.

Let's configure Fail2Ban for Vaultwarden. [Enable logging](https://github.com/dani-garcia/vaultwarden/wiki/Logging) in Vaultwarden. Create `/etc/fail2ban/filter.d/vaultwarden.local` with the following contents:

```toml
[INCLUDES]
before = common.conf

[Definition]
failregex = ^.*?Username or password is incorrect\. Try again\. IP: <ADDR>\. Username:.*$
ignoreregex =
```

Now create `/etc/fail2ban/jail.d/vaultwarden.local` with the following contents:

```toml
[vaultwarden]
enabled = true
filter = vaultwarden
backend = auto
logpath = <path/to/vaultwarden.log>
action = cloudflare-list
         nginx-block-map
maxretry = 3
bantime = 1d
findtime = 15m
```

Depending on your config, you might want to set [chain = FORWARD](https://github.com/dani-garcia/vaultwarden/wiki/Fail2Ban-Setup#note-for-docker-users). Note that we're not banning the IP using firewall rules, because we'll be receiving requests from Cloudflare's IPs.

## Setup Nginx

Add the following line to the `http` block in your main Nginx config (`/etc/nginx/nginx.conf`):

```nginx
map $remote_addr $ip_blacklisted { include blacklisted-sessions.map; }
```

Add the following line to the `server` block of services you're reverse-proxying:

```nginx
if ($ip_blacklisted) { return 444; }
```

The non-standard return code 444 closes a connection without sending a response header. You can also return 403 if you like.

## Test Your Config

To verify if everything is working, go to your Vaultwarden instance and try logging in with incorrect credentials 3 times. Check `/var/log/fail2ban.log` (`sudo tail -f /var/log/fail2ban.log`), it should say that your IP has been banned. Without reloading your Vaultwarden web vault page, try logging in with the correct credentials. It won't work, as Nginx will only return 403. If you reload the page, Cloudflare will say you've been banned. To unban yourself, run `sudo fail2ban-client set vaultwarden unbanip <banned-ip>`. Congrats! You have secured your Vaultwarden instance with two layers of protection using Fail2Ban.
