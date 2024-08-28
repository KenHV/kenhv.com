---
layout: post
title: "Securing A Linux Server"
description: "A guide to secure and harden a Linux server install."
---

## SSH

Follow the [SSH Hardening Guide](https://ssh-audit.com/hardening_guides.html) for both the client and the server. This is something you should be doing on all your machines. You can skip the "connection rate throttling" section.

Generate an Ed25519 key:

```bash
ssh-keygen -t ed25519
```

Copy the key to your server:

```bash
ssh-copy-id -i <path-to-key> <user>@<ip>
```

Paste the following at the end of `/etc/ssh/sshd_config` on your server:

```conf
MaxAuthTries 3
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AuthenticationMethods publickey
KbdInteractiveAuthentication no
X11Forwarding no
```

You can change the SSH port to a random number in the same file. Finally, run the following command to restart the SSH daemon:

```bash
sudo systemctl restart ssh
```

## Firewall

Make sure the required packages are installed:

```bash
sudo apt install iptables ipset ufw cron curl wget -y
```

Allow the SSH port and enable UFW:

```bash
sudo ufw allow <port>/tcp comment "OpenSSH"
sudo ufw enable
```

I also like to disable UFW logging. **Do not** do this unless you know what you're doing: `sudo ufw logging off`.

Next up, we'll be blocking known bad IPs using a script and a cronjob. We'll be using [IPsum](https://github.com/stamparm/ipsum), a regularly updated list. The script we'll be using is from [arter97](https://gist.github.com/arter97/2b71e193700ab002c75d1e5a0e7da6dc).

Download the script and run it once:

```bash
sudo wget https://gist.githubusercontent.com/arter97/2b71e193700ab002c75d1e5a0e7da6dc/raw/firewall.sh -O /opt/firewall.sh
sudo chmod 755 /opt/firewall.sh
sudo /opt/firewall.sh
```

Check the output of `sudo dmesg` to verify that everything is working. Add a cronjob by running `sudo crontab -e` and paste the following:

```bash
@reboot /opt/firewall.sh
0 5 * * * /opt/firewall.sh
```

## Nginx

Nginx is my preferred reverse-proxy. There are a few things you can configure to improve security.

Add the following lines to your `server` blocks:

```conf
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header X-Frame-Options "SAMEORIGIN";
```

To implement Nginx Proxy Manager's (not to be confused with Nginx) "block common exploits" functionality, do the following. Download the config file:

```bash
sudo wget https://raw.githubusercontent.com/NginxProxyManager/nginx-proxy-manager/develop/docker/rootfs/etc/nginx/conf.d/include/block-exploits.conf -O /etc/nginx/block-exploits.conf
```

Then add the following line to your `server` blocks:

```conf
include block-exploits.conf
```

To avoid getting indexed by search engines, add the following lines to your `server` blocks:

```conf
add_header X-Robots-Tag "noindex, nofollow, nosnippet, noarchive";
location /robots.txt { return 200 "User-agent: *\nDisallow: /\n"; }
```

Keep in mind that inheritance works differently in Nginx for array directives such as `add_header` and `proxy_set_header`. If you have any array directives in the block above, you need to **re-add** them in the current block.

Incorrect config:

```conf
# Incorrect
http {
  add_header X-Header-1 "";

  server {
    add_header X-Header-2 "";

    location / {
      proxy_pass http://localhost:8080/;
      add_header X-Header-3 "";
    }
  }
}
```

Correct config:

```conf
# Correct
http {
  add_header X-Header-1 "";

  server {
    add_header X-Header-1 "";
    add_header X-Header-2 "";

    location / {
      proxy_pass http://localhost:8080/;
      add_header X-Header-1 "";
      add_header X-Header-2 "";
      add_header X-Header-3 "";
    }
  }
}
```

## Fail2Ban

Install Fail2Ban:

```bash
sudo apt install fail2ban -y
```

**Do not** copy `/etc/fail2ban/jail.conf` to `/etc/fail2ban/jail.local`. Most guides I've seen suggest doing this, but this [isn't the right way](https://github.com/fail2ban/fail2ban/wiki/Proper-fail2ban-configuration). Create `/etc/fail2ban/jail.local` with the following contents:

```
[DEFAULT]
bantime = 1d
findtime = 15m
maxretry = 3
backend = auto

[sshd]
port = <port>
```

SSH is the only jail enabled by default, so we just need to give it the correct port.

Fail2Ban ships with some pre-configured jails for Nginx, which you can enable by adding the following to `/etc/fail2ban/jail.local`:

```conf
[nginx-http-auth]
enabled = true

[nginx-bad-request]
enabled = true

[nginx-botsearch]
enabled  = true
```

Just make sure all your Nginx `location` blocks have the following lines to ban the correct IPs:

```conf
include proxy_params;
```

If you're using Cloudflare proxy, we need to do a bit more so that Fail2Ban bans the end user's IP and not Cloudflare IPs. Follow my blog post on [setting up Fail2Ban With Nginx and Cloudflare Free](https://kenhv.com/blog/fail2ban-with-nginx-and-cloudflare-ipv6).

That pretty much covers it. Just make sure you're using strong and random passwords/passphrases for everything.

If you have any comments or suggestions, feel free to [mail me](mailto:ken@kenhv.com)!
