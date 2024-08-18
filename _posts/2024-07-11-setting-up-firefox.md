---
layout: post
title: "Setting Up Firefox"
description: "A list of extensions and tweaks to improve Firefox without breakage."
seo:
  date_modified: 2024-08-18
---

Google is [killing Manifest v2](https://blog.chromium.org/2024/05/manifest-v2-phase-out-begins.html) in an attempt to kill ad blockers. This change will affect not only Chrome, but browsers based on Chromium such as Edge. It's a good time to switch to Firefox. Everything just works; I've faced zero breakage on any site, even with some additional privacy protection settings turned on.

Most Firefox guides out there recommend using [hardened configs](https://github.com/arkenfox/user.js) or [forks](https://librewolf.net). The only thing they harden is your life. I want to get shit done, not fumble around with my settings trying to unbreak a site every 30 seconds. My configuration is the middle ground, where your browser protects your privacy *and* your sanity.

## Settings

### General

- Use autoscrolling: On
- Recommend extensions as you browse: Off
- Recommend features as you browse: Off
- Ask whether to open or save files: On[^1]
  
### Home

- Sponsored shortcuts: Off
- Recommended Stories: Off

### Privacy and Security

- Enhanced Tracking Protection: Strict
- Allow Firefox to make personalized extension recommendations: Off
- Enable HTTPS-Only Mode in all windows: On
- DNS over HTTPS: Max Protection[^2]

## Extensions

[uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin) is the best ad blocker. I enable additional filter lists: everything under "Cookie notices" and everything under "Annoyances". I also add the [I don't care about cookies](https://www.i-dont-care-about-cookies.eu/abp) filter list (no need to install the extension).

[Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader) adds a dark mode to every website. After installing it, open the extension menu, go to "Dev Tools", "Advanced", and click "Preview new design".

[Bypass Paywalls Clean](https://gitflic.ru/project/magnolia1234/bpc_uploads/blob/raw?file=bypass_paywalls_clean-latest.xpi&inline=false) lets you bypass most of the popular paywalled sites and sites that need you to login after viewing a page or two (like Quora). After installing it, go to the extension options and enable "Check for update rules at startup". Then go to "Opt-in" and enable everything.

[Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey) is a userscript manager, which I use to install the following userscripts. [Bypass All Shortlinks Debloated](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js) automatically skips a lot of link shorteners that make you wait or require CAPTCHAs.

[No Google Search Translation](https://addons.mozilla.org/en-US/firefox/addon/no-google-search-translation) disables the annoying Google feature that translates all search results.

[Most Recent Tab](https://addons.mozilla.org/en-US/firefox/addon/most-recent-tab/) adds a shortcut to switch to the, well, most recent tab. After installing, you can go to Manage Extensions, click the settings icon, go to Manage Extension Shortcuts, and set the shortcut to what you want. I have mine set to `Ctrl + Q`.

[Enforce Browser Fonts](https://addons.mozilla.org/en-US/firefox/addon/enforce-browser-fonts/) lets you disable web fonts and use the browser configured fonts ([related blog post](/blog/treat-yourself-to-good-typography#improving-browser-fonts)). You can change the default mode to whitelist or blacklist in the Manage Extension page.

## about:config

Setting `accessibility.force_disabled` to `1` in helps with [memory usage and performance](https://bugzilla.mozilla.org/show_bug.cgi?id=1726887).

To disable fullscreen fade animations, set `full-screen-api.transition-duration.enter` and `full-screen-api.transition-duration.leave` to `0 0`.

If you don't use Pocket, you can disable it by setting `extensions.pocket.enabled` to `false`.

If you want to switch tabs by scrolling on the tab bar, set `toolkit.tabbox.switchByScrolling` to `true`.

If you want to reduce spacing in the UI, [enable compact mode](https://support.mozilla.org/en-US/kb/compact-mode-workaround-firefox).

### Sync about:config Tweaks

Firefox lets you sync custom preferences. Let's take `accessibility.force_disabled` as an example. Prepend the preference with `services.sync.prefs.sync.` so that it becomes `services.sync.prefs.sync.accessibility.force_disabled`. Paste it in the search box, add it as a `boolean`, and set it to `true`.

## Thoughts on Telemetry

I've left telemetry on, and you should consider the same for FOSS applications. This helps the developers improve their applications. Remember: telemetry is not inherently evil, privacy-invasive telemetry is. You can visit `about:telemetry` in Firefox to view all the telemetry being sent.

## Footnotes

[^1]: I use this to open M3U files in MPV directly, for [my streaming setup](/blog/the-comfiest-streaming-service#streaming-with-mpv).

[^2]: I use [Quad9](https://quad9.net) (`https://dns.quad9.net/dns-query`) as my DNS provider.
