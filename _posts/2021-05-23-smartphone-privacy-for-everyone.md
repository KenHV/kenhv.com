---
layout: post
title: "Smartphone Privacy For Everyone"
description: "A guide to protect your privacy while using privacy-invasive platforms."
seo:
  date_modified: 2024-06-29
---

Smartphones are a crucial part of the modern-day. There's a 70% chance you're reading this from your smartphone. We use it for everything, from the simplest of tasks to computations that would be deemed impossible just a few years ago. In an ideal world, we would own the data that is on our phones. Unfortunately, we aren't living in a perfect world. Every single month, we hear about some new controversy regarding digital privacy. Yet we are stuck with using privacy-invasive platforms such as Facebook or YouTube. The reality is, there are simply no alternatives that have a userbase or content anywhere close to them.

Privacy and convenience are regarded to be inversely proportional; you generally have to sacrifice one for the other. But there exists a threshold where you can enjoy both. What we tech nerds find simple can really be rocket science for people outside the tech bubble. This article is for the common person coming from a non-tech background, looking to enhance their digital privacy in simple yet effective ways. Learn how to keep your data safer while using these spyware apps and platforms.

All apps linked to in this article are not links to their Play Store or App Store listings. I've instead linked to their websites (if not, their GitHub link) so you can install it on whichever smartphone you use, using whichever method you prefer (elaborated in the [App Store section](#app-store)). Feel free to skip to any section you want.

## "Free" and "Non-Free" Software

The word free in the context of software implies "freedom" (free as in freedom, not free of cost). Free and open-source software (FOSS) or free software gives the user freedom to access, study, modify and share. The software that does not provide these freedoms to users is called proprietary (closed source) software. Most services we take for granted, such as WhatsApp, Instagram, YouTube, are all proprietary software that is also free to use. These are also called freeware.

Open-source software is almost always free software, but there are some [exceptions](https://www.gnu.org/philosophy/open-source-misses-the-point.en.html). Software that's both free and open-source are called FOSS - Free and Open-Source Software. The apps that I'll be talking about are all FOSS.

## Platforms and Clients

To understand how you can better safeguard yourself when using data-collecting platforms, you must first understand what a platform and a client is.

Say you have two phones, one running Android and one running iOS. These two phones are running entirely different operating systems. Yet, if you switch your SIM cards between them, you can still take calls and messages sent to that SIM. In this case, the phone acts as a client, and your SIM provider is the platform.

More often than not, a significant chunk of the tracking happens within the client/app. By switching to FOSS clients for such platforms, we can enhance our privacy a lot and still access the same media. You can view all the content that your friends post on the forum, post content, send and receive messages, etc., from a different client. Like using two apps to manage SMS, for example. More often than not, you get the added benefit of additional features that aren't available in the official clients.

Using privacy-invasive platforms is the issue in the first place. While switching to FOSS clients may minimize data collection, this isn't the proper solution. All the content that we post on the invasive platform will still be tracked. Switching to alternative platforms is the only way to be really free. I will provide both solutions in this article.

## Blocking Ads

This is the easiest step you can take to enhancing your online privacy. Blocking ads is not just beneficial to your privacy, but it also improves your experience with tech as a whole. Ads are annoying, and they bring trackers with them. Trackers, as the name implies, track all your moves online to serve you more relevant ads. While it's not possible to block ads from apps such as Spotify or YouTube with this method, it will block in-app ads and ads on the internet.

To block ads on Android, go to your Settings app and search for DNS. An option called Private DNS will show up. Tap it, select "Private DNS provider hostname" and enter the following address: `dns.adguard-dns.com`. It's that simple. To disable it, you can set the Private DNS setting back to Automatic.

For iOS, click [here](https://github.com/paulmillr/encrypted-dns/raw/master/signed/adguard-default-https.mobileconfig) to add the AdGuard DNS profile to your mobile. Select Allow when the installation pop-up shows up. Then, go to Settings, click on the new "Profile Downloaded" option, select Install at the top, enter your PIN, and select Install again. Your iPhone will now start blocking ads. To disable it, go to Settings, General, VPN & Device Management, DNS, and set it to automatic. System-wide ad blocking is offered as a paid functionality by the AdGuard app, but this is the same thing for free and is also officially provided by AdGuard.

## App Store

Let's start with the App Store itself. On Android, we use Play Store to install, update and manage all our apps. There's an alternative called [Aurora Store](https://auroraoss.com/download/), which is a FOSS (Free and Open-Source) client for the Play Store service. You can do everything you do on Play Store with Aurora Store. It allows you to download older version of apps as well. There are also other app stores than Google's Play Store, such as F-Droid. F-Droid is a repository of FOSS applications only. You can access this store by using their [official client](https://f-droid.org/) or by [Aurora Droid](https://auroraoss.com/download/), a better looking client. All the apps listed in this article will be available via F-Droid.

On iOS, you are stuck with Apple's App Store. Contrary to popular belief, Apple does allow sideloading, even outside the EU. But there is a lot of catches and is much more complicated than sideloading on Android, so I will just point you in the right direction. Check out [SideStore](https://sidestore.io/). Even for tech-savvy people, this is usually not worth it, but it is there if you need it.

## Basic Functionality

Fossify ([Play Store](https://play.google.com/store/apps/dev?id=7297838378654322558)) ([F-Droid](https://search.f-droid.org/?q=fossify)) is a set of open-source Android apps that can replace most of the pre-installed apps. These apps include Calendar, Clock, Contacts, File Manager, Gallery, Music Player, Notes, Phone, SMS Messaging, Voice Recorder and more.

These apps don't require any additional permissions, they have customizable widgets, and theme options are linked across their apps. Switching to Fossify apps will be a significant step in moving away from non-free software.

On iOS, you are stuck with the default apps for almost all basic functionality.

**Update:** Simple Mobile Tools was [sold to a scummy company](https://www.androidauthority.com/simple-mobile-tools-acquisition-3391041/), please switch to Fossify.

## Web Browser

Browsers are a crucial part of our digital life. Chrome is the browser that comes pre-installed on all Android devices, and it's notorious for being a privacy nightmare. Chrome tracks your every tap and scroll on the internet. Chrome itself is proprietary, but it's based on an open-source project called Chromium. Safari is the default browser on iOS. It's much better than Chrome for privacy, but is still a non-free and closed-source browser.

[Firefox](https://www.mozilla.org/en-US/firefox/mobile) is a browser that's developed by a non-profit organization called Mozilla Foundation. Aside from being open-source, it has a plethora of features and additional extensions that you can install.

[Cromite](https://github.com/uazo/cromite) is a browser that's based on Chromium with inbuilt ad blockers and privacy hardening. It looks and functions exactly like Chrome with the added benefits of an ad-free web experience and no browser-level tracking.

It must be noted that while iOS does have a lot of third-party browsers, Apple restricts them to use only the WebKit engine. So every browser is pretty much just Safari with some additional features.

## Social Media and Entertainment

One of the most significant selling points of smartphones is getting our daily dose of entertainment anywhere. We consume a lot of content in apps such as Instagram, Facebook, YouTube, etc. While the services themselves are non-free, you can still maintain privacy by using open-source clients for these services.

[SlimSocial for Facebook](https://github.com/rignaneseleo/SlimSocial-for-Facebook) is a third-party client for **Facebook**. It's much lighter than the notoriously bloated official client and has several features.

**Twitter** has paywalled all its APIs. Despite this, [Squawker](https://github.com/j-fbriere/squawker) manages to provide a feature-rich Twitter experience.

[NewPipe](https://newpipe.net/) and [LibreTube](https://libretube.dev/) are lightweight clients for **YouTube**. Despite being lightweight, they are feature-packed. They can do everything that the official YouTube app can do and much more. You can download videos to your storage, set the default video quality, play videos in picture-in-picture or the background, play only audio, which essentially makes YouTube a music streaming service, and much more. To top it all off, they block all ads on YouTube so you can enjoy your favorite content without interruption. [Invidious](https://invidious.io/) is another great option; it's a web-based client and as such, a viable solution for iOS.

**Reddit** [paywalled their APIs](https://arstechnica.com/gadgets/2024/02/exploring-reddits-third-party-app-environment-7-months-after-the-apicalypse/) like Twitter, killing a lot of third-party clients. There are some good third-party clients such as [Infinity](https://github.com/Docile-Alligator/Infinity-For-Reddit) that still exist, but they require a paid subscription. Fortunately, there is a way to get around this by using the official Reddit client's API keys on third-party apps. Follow [ReVanced's guide](https://github.com/KobeW50/ReVanced-Documentation/blob/main/Reddit-Client-ID-Guide.md). Alternatively, you can use Reddit as a PWA. On iOS, you can use the website with [Yesterday For Old Reddit](https://apps.apple.com/us/app/yesterday-for-old-reddit/id1603279883) or [Sink It for Reddit](https://apps.apple.com/us/app/sink-it-for-reddit/id6449873635).

I would also like to mention a few alternative platforms for social media. [Mastodon](https://joinmastodon.org/) is a decentralized platform similar to Facebook and Twitter. [Lemmy](https://join-lemmy.org/) is an alternative for Reddit. [Pixelfed](https://pixelfed.org/) is an image sharing platform similar to Instagram.

### Progressive Web Apps

All the platforms mentioned above (and more, like Instagram) have a Progressive Web App (PWA), which you can install by accessing the social media's website through your browser. This is usually your only option on iOS. When you visit a website that offers a PWA, your browser should show a pop-up asking whether you want to add it to your home screen. You can also add to the home screen from your browser's menu (share menu in Safari). This will install the PWA on your device, which has several benefits such as taking up no space on your device.

## Email

[FairEmail](https://email.faircode.eu/) is a FOSS email client that can manage your Gmail, Yahoo Mail, Outlook, and just about every email provider. All your email accounts can be managed from a single app, as you can add unlimited accounts in one unified inbox, making your email experience not only private but also productive.

[Proton Mail](https://proton.me/mail), another offering from Proton, provides free privacy-respecting email accounts to everyone. Proton also offers several private services such as cloud storage (alternative to Google Drive and iCloud), do [check them out](https://proton.me).

## Closing Thoughts

The original version of this article focussed only on Android and was not as user-friendly as it is now. If you have any suggestions, feel free to [mail me](mailto:ken@kenhv.com).

> Arguing that you don't care about the right to privacy because you have nothing to hide is no different than saying you don't care about free speech because you have nothing to say.
>
> — Edward Snowden
