+++
title = "Supercharge Your Linux System"
description = "A repository of tweaks for Arch Linux."
date = 2023-07-17
updated = 2024-06-30
+++

This post is intended to be a repository of tweaks for Arch Linux, although you can apply most of it to any distro. You must know how to set up an Arch Linux install beforehand.

Go through the [Arch installation guide](https://wiki.archlinux.org/title/Installation_guide). If you have an SSD and plan on wiping your drive, do a [memory cell clearing](https://wiki.archlinux.org/title/Solid_state_drive/Memory_cell_clearing#NVMe_drive) to [restore factory write speeds](https://www.anandtech.com/show/2738/8). I go with Ext4 for my partitions. Refer to the [bytes-per-inode ratio](https://wiki.archlinux.org/title/Ext4#Bytes-per-inode_ratio) and [reserved block](https://wiki.archlinux.org/title/Ext4#Reserved_blocks) sections before creating your Ext4 partition. As for the kernel, just use `linux-zen`. Don't bother with all those fancy-sounding custom kernels you find out there. Once you finish the base install, boot into your new system.

XFCE and GNOME are both solid options for a desktop environment. Go through the [general recommendations](https://wiki.archlinux.org/title/General_recommendations). Except for security, because protection is no fun.

I use XFCE with its compositor disabled. Intel's modesetting driver now supports TearFree, thanks to our lord kerneltoast. It will eliminate tearing when you're not using a compositor. As of writing this post, the xorg-server package doesn't include it yet. I'm using `xorg-server-git`. [Enable TearFree for the modesetting driver](https://wiki.archlinux.org/title/intel_graphics#With_the_modesetting_driver).

If you go with GNOME, installing `gnome-shell-performance` and `mutter-performance` from the AUR will greatly improve your experience.

Set up your GPU drivers. I use [EnvyControl](https://github.com/bayasdev/envycontrol) to manage [NVIDIA Optimus](https://wiki.archlinux.org/title/NVIDIA_Optimus). I keep my dGPU disabled unless I need it for gaming. Go through [Intel graphics](https://wiki.archlinux.org/title/intel_graphics) for Intel. Take a look at [GuC/HuC firmware loading](https://wiki.archlinux.org/title/intel_graphics#Enable_GuC_/_HuC_firmware_loading), [framebuffer compression](https://wiki.archlinux.org/title/intel_graphics#Framebuffer_compression_(enable_fbc)), and [fastboot](https://wiki.archlinux.org/title/intel_graphics#Fastboot) in particular.

Install appropriate drivers and verify [hardware video acceleration](https://wiki.archlinux.org/title/Hardware_video_acceleration). Set appropriate values for `LIBVA_DRIVER_NAME` and `VDPAU_DRIVER`. I set my environment variables using a bash script placed in `/etc/profile.d/startup.sh`. Using `bashrc` for this won't work, because the environment variables must be set in the login shell.

For Firefox, refer to the [hardware acceleration](https://wiki.archlinux.org/title/Firefox#Hardware_video_acceleration) section. Check out [touchscreen gestures and pixel-perfect trackpad scrolling](https://wiki.archlinux.org/title/Firefox#Touchscreen_gestures_and_pixel-perfect_trackpad_scrolling). Export them using `startup.sh`.

For Chromium and Chromium-based browsers, refer to its [hardware acceleration](https://wiki.archlinux.org/title/Chromium#Hardware_video_acceleration) and [force GPU acceleration](https://wiki.archlinux.org/title/Chromium#Force_GPU_acceleration) sections. You can verify it at chrome://gpu. Video decoding information is at the bottom of the page. You can [enable touchpad gestures](https://wiki.archlinux.org/title/Chromium#Touchpad_Gestures_for_Navigation) on Chromium too. To enable middle mouse button scrolling, add the following flags:

```
# Disable unsupported flag warning
--test-type

# Enable middle mouse scroll
--enable-blink-features=MiddleClickAutoscroll
```

[Profile-sync-daemon](https://wiki.archlinux.org/title/Profile-sync-daemon) can help speed up your browser performance by storing your browser profiles in tmpfs. You can also store your browser cache in tmpfs, Arch has instructions for both [Firefox](https://wiki.archlinux.org/title/Firefox/Tweaks#Move_disk_cache_to_RAM) and [Chromium](https://wiki.archlinux.org/title/Chromium#Cache_in_tmpfs), although I only use PSD.

Now onto power management. I use a script written by our lord kerneltoast. Create `/etc/systemd/system/powersave.service` with the following contents:

```
[Unit]
Description=Powersave auto tune
After=suspend.target
After=hibernate.target
After=hybrid-sleep.target

[Service]
Type=oneshot
ExecStart=/usr/bin/bash -c "find /sys -regex '.*?power/control$' ! -path '*usb*' -exec bash -c 'echo on > {}; echo auto > {}' \\;"

[Install]
WantedBy=suspend.target
WantedBy=hibernate.target
WantedBy=hybrid-sleep.target
WantedBy=multi-user.target
```

Run `sudo systemctl enable powersave.service`. This enables runtime power management for all devices except USB. You can modify it to include certain USB devices if you really wish to.

For CPU frequency scaling, you have two options. You can let the kernel do the heavy lifting by installing [power-profiles-daemon](https://gitlab.freedesktop.org/upower/power-profiles-daemon). Or, you can install [auto-cpufreq](https://github.com/AdnanHodzic/auto-cpufreq), which is a userspace daemon that does the work. Try both and see what works best for you. [Disable pstate drivers](https://github.com/AdnanHodzic/auto-cpufreq#troubleshooting) if you're using auto-cpufreq. Install [thermald](https://wiki.archlinux.org/title/CPU_frequency_scaling#thermald) along with either of the programs. Do not touch TLP, its a dumpster fire.

If possible, [undervolt](https://wiki.archlinux.org/title/Undervolting_CPU) your CPU and GPU. On Intel machines, you can disable SGX in your BIOS to disable the Plundervolt fixes, which should enable undervolting on newer machines. Don't be put off by the warning on the Arch Wiki page. I have my CPU undervolted to -150mV and GPU to -100mV. Your mileage **will** vary. Start at -80mV for the CPU and -50mV for the GPU.

Don't use swapfiles or swap partitions, use [zram](https://wiki.archlinux.org/title/Zram) instead. As we're not swapping to disk, make sure to disable [zswap](https://wiki.archlinux.org/title/Zswap) by adding the `zswap.enabled=0` kernel parameter. My machine has plenty of RAM, so I don't use zram and also disable zswap.

Linux has had official NTFS drivers for a while now, but there are no official userspace utilities for NTFS3. Install `ntfsprogs-ntfs3` from the AUR. This lets you use all the NTFS-3G utilities but with NTFS3 instead.

Other tweaks that I perform:

- [Turning off CPU mitigations](https://wiki.archlinux.org/title/Improving_performance#Turn_off_CPU_exploit_mitigations)
- [Disabling watchdog](https://wiki.archlinux.org/title/Improving_performance#Watchdogs)
- [Disabling NMI watchdog](https://wiki.archlinux.org/title/Power_management#Disabling_NMI_watchdog)
- [Enabling periodic TRIM](https://wiki.archlinux.org/title/Solid_state_drive#Periodic_TRIM)
- [Journal size limit](https://wiki.archlinux.org/title/Systemd/Journal#Journal_size_limit)
- [Uniform look for Qt and GTK applications](https://wiki.archlinux.org/title/Uniform_look_for_Qt_and_GTK_applications)
- [Prefer IPv4 over IPv6](https://wiki.archlinux.org/title/IPv6#Prefer_IPv4_over_IPv6)

I will be updating this post as I go around changing/adding stuff. If you have any suggestions, feel free to mail me!