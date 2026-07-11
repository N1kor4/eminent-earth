---
layout: "../../../layouts/GuideLayout.astro"
title: "Remote Gaming"
description: "Using Tailscale to play games from your PC anywhere in the world."
sectionNumber: 3
---

## The Software Duo: Sunshine and Moonlight

To stream your games at high quality, we rely on a powerful open-source combination.
- **[Sunshine](https://docs.lizardbyte.dev/projects/sunshine/latest/) (The Host):** Install this on your gaming PC. It captures your screen, audio, and controller inputs and blasts them over the network.
- **[Moonlight](https://moonlight-stream.org/) (The Client):** Install this on your laptop, tablet, or phone. It receives the stream and sends your button presses back to the host.

### Configuration
1. Install Sunshine on your main PC. 
2. Install Moonlight on your client device. 
3. Open Moonlight. Sometimes it will auto-detect your PC, but **be careful**: make sure you manually add the PC using its **Tailscale IP address**. If you use the local IP, it won't work when you leave your house!

> [!IMPORTANT]
> **Run Sunshine as a Windows Service:** When installing Sunshine, there is an option to run it as a Windows Service. **Do this.** If you don't, Sunshine will only start *after* you log into Windows. If you restart your PC remotely, you'll be stuck at the Windows login screen forever because Sunshine hasn't launched yet!

If you need a deep dive into tweaking bitrates and encoder settings, [MikeTheTech has great tutorials](https://www.youtube.com/watch?v=QaNXP2-hXlY) on YouTube. But honestly, if you have a powerful PC and good internet, the default settings are usually perfect.

## Hardware Quirks (How to get screwed)

I have over a year of experience dealing with the exact things that will break your setup while you are miles from home. Pay attention to these.

### 1. Disable Sleep Mode
If your PC goes into Sleep Mode, the screen turns off, the network card sleeps, and it's game over. You will not be able to connect to it.
- **The Fix:** Go into Windows Power Settings and set "Put the computer to sleep" to **Never**. I highly recommend completely removing the "Sleep" button from your Start Menu so you never accidentally misclick it.

### 2. The "Black Screen" and the Dummy Dongle
Graphics cards are smart. If they don't detect a physical monitor plugged in and turned on, they sometimes refuse to render anything, resulting in Moonlight connecting to a black screen.
- **The Fix:** Buy an HDMI "Dummy Plug" (they cost around $10-15 on Amazon). It plugs into your graphics card and tricks it into thinking a 4K monitor is attached, even when your real monitors are powered off.
- **Tip:** Buy an *HDMI* dummy plug, not a DisplayPort one. DP dummy plugs are notoriously buggy.
- **Warning:** When you get back home and want to play physically, unplug the dummy dongle! Having a phantom screen active while you play can cause weird performance issues and window-management headaches.