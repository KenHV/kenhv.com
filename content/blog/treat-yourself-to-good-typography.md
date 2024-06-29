+++
title = "Treat Yourself to Good Typography"
description = "A guide to improving font rendering on all devices and browsers."
date = 2024-06-02
updated = 2024-06-29
+++

Ah, typography, the cornerstone of great design. Optimising your fonts and typography settings will go a long way in improving readability, especially if you're someone who reads a lot. Here's how I setup my devices.

## Windows vs Mac

Font rendering on Windows is handled by DirectWrite and ClearType. You might be familiar with the latter. Microsoft’s approach to rendering fonts is having “pixel-perfect” typography, literally. It aligns all glyphs to the pixel grid. The original font shapes are thrown out the window. Pun intended.

Mac takes a different approach. Steve Jobs was obsessed with good design and typography. Hence, Mac’s font rendering engine has a “WYSIWYG” (what you see is what you get) philosophy. It preserves the font’s original shape. Fonts look how the designers intended them to.

“So what are you saying, Windows bad Mac good?” Not at all. Apple has full control over their hardware, and all their displays are high DPI (dots/pixels per inch). In classic Apple fashion, they have a buzzword for it — Retina display. Most of us peasants are stuck with 96 DPI, which is pretty bad for legibility. Windows’s approach tends to do better here. Besides, all of this comes down to personal preference. Some prefer Windows’s approach, some prefer Mac’s. I won’t be going into Linux here, as it varies among distros.

## Improving Typography on Windows

Have you ever noticed that fonts look sharp in some applications but blurry in others? This is because of Windows’s horrible default display scaling. By default, scaling is set higher than 100% (mine was 125% for 1080p). If you revert back to 100%, the blurriness goes away but everything is too small.

The fix is pretty simple. Go to Settings, Display. Look at the scale percentage. Now click on Scale (not the drop-down menu, the actual Scale menu option), and it will take you to the custom scaling settings. Enter the same value here; it will ask you to sign out and sign back in. You will no longer see blurry fonts on your system.

Next up, let’s adjust ClearType settings. The inbuilt ClearType tuner is pretty bad. We’re going to use [Better ClearType Tuner](https://github.com/bp2008/BetterClearTypeTuner/), making the whole process much easier. Grab the zip from the [releases](https://github.com/bp2008/BetterClearTypeTuner/releases/tag/1.4.0.2) section, extract it and run the program as administrator. I use RGB with maximum contrast (2200), you can play around with the values.

There is a program called [MacType](https://github.com/snowie2000/mactype), which replaces Windows’s font rendering system with a custom rendering system. It works great where it does, but is very problematic where it doesn’t. I have dabbled with it but uninstalled it at the end.

## Improving Browser Fonts

I don’t like the default fonts used on most sites. How did I fix it? I wrote a userscript that overrides web fonts with the fonts that are set as default in the browser. To set this up, first configure your browser’s default fonts to your liking. I use Charter for default/proportional and serif, SF Pro Display for sans-serif, and SF Mono for monospace.

Download a userscript manager extension. I recommend [ViolentMonkey](https://violentmonkey.github.io/). Go to my script's [GreaseFork](https://greasyfork.org/en/scripts/496839-default-fonts) page and install the script. You can exclude the script from running on certain sites if you want to, using your userscript manager.

## Android

Some Android manufacturers include settings to change fonts. If your OEM does not provide such options, your only choice left is to root your device. When I was using Android, I used a Magisk mod called [Oh My Font](https://gitlab.com/nongthaihoang/oh_my_font) along with [Kill GMS Font](https://github.com/MrCarb0n/killgmsfont). In my opinion, this is the best typography experience you can get on Android. It uses Apple’s San Francisco fonts by default.

## The End

If you made it all the way here, you might want to look into getting a shiny new high DPI monitor. If you have any suggestions, feel free to mail me.
