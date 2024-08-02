---
layout: post
title: "Configuring BSNL FTTH"
description: "A guide to set up BSNL FTTH with third-party routers and modems."
seo:
  date_modified: 2024-08-02
---

BSNL-provided routers are bad. They are horribly slow, have poor range, and are not very secure. Their routers cost ₹3,000. For the same price, you can get much better hardware. Here's how to set up BSNL FTTH with your own hardware.

## Requirements

- ONU 
- Router
- VLAN ID
- PPPoE username (password is always `password`)

The ONU must be TEC-certified. A list of TEC-certified products can be found at the [MTCTE Portal](https://www.mtcte.tec.gov.in/certified_equipments). If you really don't want to go that route, you can spoof your MAC address to match a TEC-certified ONU. I had a BSNL-provided combo device, so I spoofed my MAC to that. You can also use a TEC-certified combo device with another router by using bridge mode. You can find instructions in [this Reddit post](https://www.reddit.com/r/bsnl/comments/ht37q4/guide_for_bsnl_ftth/).

I have a [TP-Link XZ000-G7 XPON ONU](https://www.amazon.in/dp/B0CYQDZ8NC) and a [TP-Link Archer C6 AC1200 Router](https://www.amazon.in/dp/B07GVR9TG7). I've provided step-by-step instructions for these devices, but the configuration is the same for any ONU and router. You just have to find where each setting is located.

## ONU Configuration

Connect to your ONU using an ethernet cable. The TP-Link ONU doesn't have a DHCP server by default, so you'll have to configure IP assignment manually. Follow these [instructions for Windows](https://support.microsoft.com/en-us/windows/change-tcp-ip-settings-bd0a07af-15f5-cd6a-363f-ca2b6f391ace). On Linux, you can do this from NetworkManager settings.

| IP Address  | `192.168.1.100` |
| Subnet Mask | `255.255.255.0` |
| Gateway     | `192.168.1.1`   |

Now go to [192.168.1.1](http://192.168.1.1), set a password for your ONU, and log in. Go to Advanced, Network, and select VLAN Settings. Set "VLAN mode" to "VLAN TAG mode", enter your VLAN ID, and set "Priority" to `1`. You can also turn on the DHCP server if you want easier access to your ONU in the future. You can now disconnect the ethernet and connect your ONU to the router.

## Router Configuration

Connect to the router using ethernet or Wi-Fi. TP-Link also has an app to configure routers, you can use it if you like. Go to [192.168.0.1](http://192.168.0.1) and go through the setup process. Set your connection type to PPPoE and enter your PPPoE username and password (password is `password`). If you're migrating from another router, you'll need to change your new router's MAC address to the old one. Go to Advanced, Network, Internet, set "Router MAC Address" to "Use Custom MAC Address", then enter your old MAC address. Finally, you need to configure MTU. Go to Advanced, Network, Internet, Advanced Settings, and change your MTU value to `1492`. BSNL caps MTU to 1492 across India.

Depending on your area, you might get IPv6 support. You can use the same PPPoE credentials for IPv6 as well.

## Support

If you have any problems or questions, check out the [India Broadband Forum](https://broadband.forum/forums/bsnl-broadband/) or the [BSNL Telegram group](https://t.me/BSNLTelegram).
