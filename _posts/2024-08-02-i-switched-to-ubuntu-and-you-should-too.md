---
layout: post
title: "I Switched to Ubuntu and You Should Too"
description: "An essay on why you should be using (and recommending) Ubuntu."
image:
  path: /assets/images/bell-curve-linux-distros.webp
  width: 1280
  height: 720
  alt: "Bell curve meme about Linux distros."
---

<figure>
    <img decoding="async" fetchpriority="high" style="aspect-ratio:16/9" width="650"
      src="/assets/images/bell-curve-linux-distros.webp"
      alt="Bell curve meme about Linux distros.">
    <figcaption>Don't be the midwit.</figcaption>
</figure>

After years of using Arch Linux, I’ve settled on Ubuntu. And I think you should too. “But snap bad! Canonical bad! Ubuntu is for noobs!” I don’t like snaps either, and guess what? It takes all of 60 seconds to remove it entirely. That’s a hell of a lot quicker than setting up Arch. Most people hating on Ubuntu have not used it in a long time. Everyone I’ve talked to has no solid arguments against Ubuntu other than the above. Let’s see if Ubuntu really is as horrible as it’s made out to be.

## How I Ended Up on Ubuntu

I’m tired of going to the Arch Wiki every time I need something. It was fun to tinker with my OS all day long when I was younger, but now I need something that works out of the box. I want my OS to get out of the way, and Arch got in my way one too many times. I moved to Windows 11 for 6 months and gave up after it started slowing down and heating up (as always). I decided to go back to Linux, but I needed something that *just works*.

Arch and derivatives (the only good one is EndeavourOS) were out of the question immediately. I also decided not to use niche distros like openSUSE for the same reason. My first choice was Fedora. DNF is terrible but I still considered it, right up until I learnt that hardware acceleration is not a thing anymore *OOTB*. Instant pass. Pop!_OS has been focused on COSMIC for a while, so that’s a no-go for now. Linux Mint is great, but I wanted newer packages and a modern DE that supports Wayland (GNOME). I have a multi-monitor setup with different refresh rates, and Wayland handles it well.

Then I remembered Ubuntu existed. The last time I used Ubuntu was when Canonical sent free CDs. I read about snaps being bad all the time, but apart from that, I didn’t remember any other criticism. Might as well give it a try, right? Surely it can’t be that bad. And boy oh boy, it was much better than I was expecting.

## The Ubuntu Experience

Right off the bat, the installation process was a breeze. I only had to tick a box for NVIDIA drivers to be set up. The same goes for codecs and hardware acceleration. I restarted after the setup and everything just worked! I was genuinely surprised. Literally everything just worked, I didn’t have to do anything.

I removed snapd because I prefer native packages. I found out that a lot of popular software like Firefox, Chrome, VSCode, Spotify, Discord, etc. provide official native packages/repos for Ubuntu. This is a huge win in my book. Proprietary software like this is usually only available through containerised package formats like Snaps/Flatpak or some random source (like the AUR).

If you don’t like Ubuntu’s customised GNOME, you can simply install gnome-session and switch to vanilla GNOME from the display manager. If you don’t like GNOME itself, you have several Ubuntu spins such as Kubuntu for KDE, Xubuntu for XFCE, etc. If you want to optimise Ubuntu further, check out [my blog post](/blog/linux-tweaks#ubuntu-specific-optimisations).

What can I say? It’s fast, it just works, and it’s widely supported. It’s a boring distro. Boring is good.

## Why the Hate?

First off, I strongly believe Ubuntu gets hated on so much because of how popular it is. The other arguments are just excuses. I’ll get to the other issues but I’ll address this first. This is a trend I’ve seen with GnOo/LinUx users, they feel the need to use increasingly niche tools just to feel better about themselves. Using Gentoo with an obscure window manager and Neovim won’t improve the quality of your work whatsoever. The tools you use don’t make you stand out, the work you do with them does.

The next big reason is *muh bloat*. Ubuntu offers several spins, and all of them have a minimal install option that comes with only the necessary programs. A minimal install of Ubuntu 24.04 takes up less than 800MB of RAM; Xubuntu 24.04, less than 500MB. Ubuntu is on par with, if not lighter than Linux Mint. It’s 2024, 8GB RAM has become the norm. Stop obsessing over saving a couple hundred megabytes of RAM. Unused RAM is wasted RAM. And honestly, CPU usage at idle is a much more important metric if you want to measure “bloat”.

“But snaps are slow and horrible!” If you don’t want snaps on your system, you can just remove it in a minute. It’s that easy. I removed it as well, not because I hate snaps in particular, but because I don’t like containerised package formats in general. Installing Flatpak is also trivial if you need it, but if your main complaint about snaps is its speed, stick to native packages.

If you genuinely have a reason to not use Ubuntu other than these, such as something not working or you or you needing a slower/faster release cycle, then this post wasn’t meant for you. This is for GnOo/LiNuX users who hate popular things because they think it’s cool.

## Why You Should Use Ubuntu

Because it just works!

No other distro configures drivers and hardware acceleration properly out of the box. Doing this manually can be a pain even for long-time Linux users. Ubuntu (and by extension, Linux Mint) does this very well. The only thing holding me back from using Linux Mint is GNOME. I love GNOME. I think its the most polished desktop experience you can get on Linux (I can feel KrashDE users getting angry :P). Ubuntu offers spins for pretty much all DEs.

Support is amazing. I can simply Google a problem and find step-by-step instructions specifically for Ubuntu.

A lot of big software offer official native packages for Ubuntu. Since I dislike containerised package formats, previously my only choice was to use the AUR and trust the `-bin` package maintainers. Now I can just use official packages! Fun fact, a lot of the `-bin` packages in AUR just convert Ubuntu debs to Arch Linux pkgs.

Ubuntu offers full secure boot support, even when using NVIDIA. You can dual-boot with Windows and play your favourite game with kernel-level ~~rootkit~~ anti-cheat!

I'd much rather go with Ubuntu and *remove* one or two components I don't like, than go with some other distro and spend hours *fixing* missing/misconfigured basic functionality. 

## The End

There is value in the default experience. And I believe that Ubuntu does it the best among all Linux distros. If you’re suggesting Linux for casual users, suggest Linux Mint or Ubuntu. Don’t overwhelm people with the paradox of choice.
