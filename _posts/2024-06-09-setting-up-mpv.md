---
layout: post
title: "Setting up MPV - The Supreme Media Player"
description: "The media player you use sucks. Switch to MPV."
date: 2024-06-09
---

The media player you use sucks. Switch to MPV.

## Installation

If you’re on Linux, you know what to do. Install it through your package manager and skip to the configuration section. If you’re on Windows, read on. Make a folder where you want to install MPV, for example `D:\Programs\MPV`. Download the [MPV bootstrapper](https://sourceforge.net/projects/mpv-player-windows/files/bootstrapper.zip/download) and extract the contents to the folder. Run `updater.bat` as administrator. It will ask you some questions. You can choose the default options for most questions. When it asks you to choose a variant (x86_64 or x86_64-v3), choose x86_64-v3 (press 2), unless your CPU was released over 10 years ago. I also install yt-dlp and FFmpeg.

Once the script is finished, go to the newly created `installer` folder and run `mpv-install.bat` as administrator. This will register the application in Windows. Congrats, you have now installed MPV. If you ever want to uninstall MPV, run the uninstall script first and then simply delete the MPV folder. But before you start using it, there’s some essential configuration to be done.

## Configuration

Almost all configurations you will find on the internet overcomplicate everything. My config is small, simple, fast and makes MPV very user-friendly.

If you’re on Linux, your config folder will be `~/.config/mpv`. For Windows, create a folder called `portable_config` inside your MPV folder, this will be your config folder. Inside your config folder, create a new file named `mpv.conf` with the following contents:

```
# Essentials
vo=gpu-next
gpu-api=auto     
hwdec=auto-safe

# Smoothmotion
interpolation=yes
tscale=oversample
video-sync=display-resample

# QoL
keep-open=yes
save-position-on-quit=yes
autofit-larger=80%x80%

# UOSC
osd-bar=no
border=no
```

Next up, we’re gonna install [UOSC](https://github.com/tomasklaen/uosc). UOSC is a custom GUI for MPV; the default GUI is extremely bare-bones. On Windows, go to your MPV installation folder (the folder should have mpv.exe in it), right click and open a terminal. Now run the following commands:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm https://raw.githubusercontent.com/tomasklaen/uosc/HEAD/installers/windows.ps1 | iex
```

Linux users, run the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tomasklaen/uosc/HEAD/installers/unix.sh)"
```

And that’s it! You can now start using MPV like any other media player. Really, that’s all you **need**.  

## Beyond the Basics

The above configuration is enough for most people, but MPV offers way more. It is scriptable, meaning the program can be extended in many ways. I will list some of them here.

### Audio Compressor

An audio compressor turns down the loudest parts and turns up the quietest parts. To install an audio compressor, download the script from [here](https://github.com/mpv-player/mpv/blob/master/TOOLS/lua/acompressor.lua) and add it to the `scripts` folder inside your config directory. You can press “n” to toggle the compressor. If you want to enable it by default, open the script with a text editor and change `default_enable = false` to `true`.

## Troubleshooting

If MPV lags when you play media that doesn’t match your display resolution (such as 720p or 2160p on a 1080p screen), add `profile=fast` to your `mpv.conf` file. This disables MPV’s upscaling and downscaling algorithms. If that doesn’t fix it, remove the smoothmotion section.

If MPV lags when you play media that matches your display resolution, try removing the smoothmotion section from the config.

If you face crashes or weird glitches, set `vo=gpu` in your config file.