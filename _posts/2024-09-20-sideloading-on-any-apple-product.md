---
layout: post
title: "Sideloading on Any Apple Product"
description: "A guide to sideloading apps on any and all Apple products."
---

Did you know that it's possible to sideload apps onto your iPhone, iPad, Apple TV, Apple Watch, and even Vision Pro? It's not the EU method, and it doesn't involve jailbreaking. This is an official method supported by Apple. The setup is kinda complicated (it's Apple after all) and has a few caveats, but it is doable.

You can get back Apollo for Reddit, a ReVanced equivalent for YouTube, Minecraft Java Edition, and much more. Even Fortnite.

Apple allows developers to sideload apps for development and testing purposes. If you pay for a developer account, you get to sideload as much as you want. If not, you're limited to 3 sideloaded apps per Apple ID (it doesn't stack up with multiple accounts on the same device). Developer accounts cost $100/year, but there is a much cheaper way around this.

The official Apple way of doing this is with Xcode. For Apple Watch and Vision Pro, this is also the only way. But for iPhones, iPads, and Apple TVs, there are tools and apps that make this process a whole lot easier.

I won't be providing step-by-step instructions; that will make this post several times bigger. I'll list out all your options and link to all the relevant documentation and instructions.

## The Free Route

If you're not going to sideload more than three apps, you can use this method. You have two options here: you can either trade one app slot for convenience, or you can sideload three different apps but deal with the additional complexity.

When sideloading with this method, you have to deal with a concept called "refreshing" your apps. Apps sideloaded with free developer accounts need to be resigned every 7 days. If you're willing to sacrifice one app slot, you can refresh your sideloaded apps on-device.

The first option is [SideStore](https://sidestore.io/), a fork of [AltStore](https://altstore.io/). It can be used on iOS and iPadOS. The difference between SideStore and AltStore is that SideStore only requires computer access for the initial setup. It handles installing, updating, and refreshing, all on-device. They have excellent, detailed documentation explaining every step.

The second option is [Sideloadly](https://sideloadly.io/). Sideloadly is more powerful, but you need a computer to install, update and refresh apps. It supports sideloading to iOS, iPadOS, tvOS and Apple Silicon Macs. You get to keep all three free slots with this option.

## The Paid Route

If you don’t want to spend $100/year for a developer account, you can purchase signing certificates from third party services. These services buy developer accounts from Apple and set everything up. Each developer account has 100 slots. Each slot gets a developer certificate that can be used to sign apps. When you purchase from them, you're basically purchasing one individual slot. I use [AppTesters](https://apptesters.org/) and I can vouch for them. If you go with them, I'll be grateful if you use the referral code "80085" :P. You can also check out [KravaSign](https://kravasign.com/) (previously MapleSign) and [Signulous](https://www.signulous.com/).

While it’s pretty rare, Apple _has_ revoked some of these services’ developer accounts in the past. All the above mentioned services have a track record of issuing new certificates for free in these rare instances. Just check if the service offers “revoke protection” before buying.

Once you have your certificate (either directly from Apple or from a third party service), you can then use [Feather](https://github.com/khcrysalis/Feather) or [ESign](https://esign.yyyue.xyz/) to sideload apps. Feather is a new and open source app. ESign is a closed source Chinese app, but it's stable and feature-complete. I know the choice is obvious, but Feather is extremely new, so you might have to use ESign if Feather doesn't play well with something.

To install Feather/ESign, you can use Sideloadly with your developer certificate. There are online IPA signers as well, like [AppTesters' Signer](https://sign.apptesters.org/) and [KravaSigner](https://sign.kravasign.com/). These let you sign and install IPAs from your device's browser. Of course, you can install ESign using Feather and vice versa.

AppTesters has video instructions on installing and setting up ESign, which you can find [here](https://apptesters.org/instructions/). You can follow the same process for installing Feather. Note that if you want notifications support on Feather, you have to disable "PPQCheck Protections" in Feather's settings. It's not as bad as the app says; no other signing app has this protection. Notifications work out of the box on ESign.

To install apps on iOS 18, you need to use the online install option on Feather and the WiFi option on ESign.

## Apps and Tweaks

The equivalent of Android's APKs on iOS are IPAs. To get a usable decrypted IPA, you'll need a jailbroken device. Fortunately for us, there are places where we can get decrypted IPAs. AppTesters host a Telegram bot that you can access [here](https://t.me/AppleTesters/58881). You can also use [decrypt.day](https://decrypt.day/) and [armconverter](https://armconverter.com/decryptedappstore/us). Once you have a decrypted IPA, you can sideload it as it is or inject tweaks into it. Tweaks are like ReVanced patches.

Here are some apps/tweaks to get you started:

- [Apollo for Reddit](https://balackburn.github.io/Apollo/)
- [YouTube Plus](https://github.com/dayanch96/YTLite)
- [BHTwitter](https://github.com/BandarHL/BHTwitter) and [FuckElon](https://github.com/ghl3m0n/FuckElon/)
- [EeveeSpotify](https://github.com/whoeevee/EeveeSpotify)
- [SCInsta](https://github.com/SoCuul/SCInsta) (free) and [Regram](https://regram.fouadraheb.com/) (paid)
- [Bunny](https://github.com/pyoncord/BunnyTweak) (Discord)
- [PojavLauncher](https://pojavlauncherteam.github.io/INSTALL.html#ios) (check the "Sideloading (Jailed)" section)
- [Aidoku](https://aidoku.app/)
- [Ferrite](https://www.kingbri.dev/ferrite)

Everything listed above is open source (except Regram).

## Related Communities

I strongly recommend joining these communities to get updates and news. You can discover a lot of cool apps to sideload too.

- [AppTesters Telegram group](https://t.me/AppleTesters)
- [KravaSign Discord server](https://discord.gg/kravasign)
- [r/sideloaded](https://reddit.com/r/sideloaded)
