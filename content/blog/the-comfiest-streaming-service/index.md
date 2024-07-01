+++
title = "The Comfiest Streaming Service"
description = "The $3 streaming service that beats everything on the market combined."
date = 2024-06-30
+++

What if I told you there's a streaming service that

- Has all movies, shows, anime, documentaries, etc. ever made
- Has all releases/cuts
- Has all quality options including HDR
- Doesn't lock content regionally
- Lets you actually download media to your device
- Lets you use external media players and subtitles
- Is available on all platforms including TVs

All for the low price of $3 a month? Oh, and you can convert any torrent to a direct link and get premium links for hosters like 4Shared and RapidGator. Sounds too good to be true? Well, it's your lucky day.

## The Catch

You can simultaneously stream from 4 devices, but the catch is that they have to be on the same network. You can only access it from one IP at a time. If you're using this at home, with all devices on the same WiFi network, this is not a problem. But you can't stream from two different devices with two different networks (different IPs) at the same time.

## The Components

This setup involves three components: [Stremio](https://www.stremio.com), Torrentio and [Real-Debrid](https://real-debrid.com/?id=8866184). Don't be alarmed, I promise it's *real* simple. Stremio is a streaming app that can be extended with add-ons. It has a polished interface that lets you browse all movies and shows listed on IMDb. Torrentio is a content aggregator add-on for Stremio, which lets you stream all those movies and shows directly in Stremio. Real-Debrid provides high-quality sources to Torrentio.

## What's Real-Debrid?

[Real-Debrid](https://real-debrid.com/?id=8866184) is a debrid service. A debrid service lets you convert torrents to direct links and gives you access to dozens of premium hosting services (like RapidGator, 4Shared, etc). What makes a debrid service great is that they cache torrent files. They have a **massive** database of torrents stored in their servers. Pretty much anything you want to watch is available in torrent sites, and pretty much everything in torrent sites are cached in Real-Debrid's servers. It's as low as $3 a month (their 6 month plan is €16).

## Setting It Up

Sign up for a [Real-Debrid](https://real-debrid.com/?id=8866184) account and buy a plan. Install [Stremio](https://www.stremio.com/) and create an account. Now go to [Torrentio](https://torrentio.strem.fun/configure). Here you can configure several things such as providers, quality exclusions, sorting, language priority and maximum results per quality setting. The only option I change here is sorting, I have it set to "by quality then size". Choose Real-Debrid as your debrid provider. Get your [Real-Debrid API key](https://real-debrid.com/apitoken) and paste it in. Now click install, it will take you to Stremio where you can install the addon. That's all there is to it! Now you can install Stremio on any device you want, you just have to sign in to your Stremio account. You don't have to mess with Real-Debrid if you don't want to. You can pretty much stop reading here.

## Stremio Web for iOS

Stremio doesn't have a native app for iOS (available on macOS though), but you can use the PWA (progressive web app) with an external media player. I recommend [Outplayer](https://apps.apple.com/in/app/outplayer/id1449923287). There is only one problem with this setup. While Outplayer will remember where you left off, it won't be synced with Stremio. To install the PWA, go to [Stremio Web](https://web.stremio.com), click on the share button, and add to home screen. Open the newly added Stremio app and login using the profile icon on the top right. It'll say streaming server is not available, just select "don't show again". Go to Settings, scroll down to Advanced, and choose Outplayer as the external player.

## Useful Addons

Stremio has quite the collection of addons. Browse through the addons section and add what you like. You can find more addons [here](https://stremio-addons.netlify.app). There are addons to connect Stremio with Letterboxd, Simkl and more. Cyberflix is a useful addon that shows trending movies on popular streaming services.

## Streaming With MPV

I use MPV to consume media. I've written a [guide to set up MPV](https://kenhv.com/blog/setting-up-mpv) if you're interested. Stremio is actually built with MPV, but you can't change the configuration. Stremio doesn't have an option to choose MPV as an external player. You can either copy the stream link and open it with MPV, or use the [web version](https://web.stremio.com).

I prefer the web version, as I don't have to install the Stremio app on my computer. It also saves quite a bit of time. In the web version, you can set m3u playlist as the external player in Settings. You can then configure MPV to automatically open m3u files.

## Thoughts on Piracy

> Piracy is almost always a service problem and not a pricing problem.
> 
> — Gabe Newell

I pay for music streaming because it's convenient. It has everything I want to listen to in one place and has recommendations, curated playlists, statistics; everything I need. There is simply no movie streaming service that's convenient. Every service has a limited and different catalogue, they don't have all the editions of a movie, and quite a lot of content is simply not available on any service. I made a fully automated media server years ago, but that isn't as convenient as this setup is either. Like Gabe said, it's not a problem of pricing. I am willing to pay for convenience. It's just that there's nothing convenient about the streaming services available today.

Oh and of course, all this information is purely for educational purposes, I am not responsible, blah blah. Have a good day.
