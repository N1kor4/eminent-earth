---
layout: "../../../layouts/GuideLayout.astro"
title: "Tailscale Setup"
description: "Setting up a private mesh network with Tailscale for secure remote access."
sectionNumber: 2
---

## The Goal: Accessing Your PC from Anywhere

Before you can stream a game from your powerful desktop PC to your laptop at a coffee shop, you need them to think they are in the same room. Opening ports on your home router is a massive security risk, and setting up a traditional VPN can be tedious.

Enter **Tailscale**.

Tailscale creates a "tailnet"—a private, secure mesh network. Instead of routing all your internet traffic through your home connection (like a traditional VPN), it just allows your devices to see each other as if they were on the exact same local Wi-Fi, no matter where they actually are in the world. 

### Step 1: Installing Tailscale

1. Go to [Tailscale's website](https://tailscale.com/) and create an account. **Tip:** Use GitHub to log in. In my experience, the other SSO options can sometimes be buggy.
2. Install the Tailscale app on your gaming PC (the "Host") and the device you want to play on (the "Client").
3. Log in on both devices.

> [!WARNING]
> **CRITICAL STEP:** Go into the Tailscale Admin Panel on the web and set the **Key Expiry** for your host PC to **Never**. If you forget this, your PC's access token will expire while you are away, and you will permanently lose connection to it until you get home.

### Step 2: Assigning Static IPs
One of the best features of Tailscale is that it automatically assigns IP addresses to your devices. You can also assign fixed IP addresses directly from the Tailscale Admin Panel, entirely bypassing your internet router's settings (which is great if you're in a student dorm or don't have admin access to the router).

## The Fail-safes (How to not lose access)

Having a remote connection is great, but what happens if your PC crashes or shuts down while you are 300km away? You need fail-safes. 

### Turning the PC On (Wake-On-LAN)
Wake-On-LAN (WOL) allows you to send a "magic packet" over the network to a sleeping motherboard, telling it to power on. 
- **Requirement 1:** Your PC must be connected via Ethernet (LAN). Wi-Fi cards power down when the PC is off.
- **Requirement 2:** You must enable WOL in your motherboard's BIOS, as it's disabled by default for security.

If you have a Raspberry Pi or an always-on server at home, you can SSH into it and send the magic packet locally. If you're fancy, set up an alias:
```bash
alias wakepc='ssh pi "sudo etherwake -i eth0 00:11:22:33:44:55"'
```

### The "Smart Plug" Trick
If you are in a dorm (like the CROUS) and have absolutely no access to the router to configure WOL, there is a legendary workaround: **The Smart Plug**.
1. Plug your PC into a Wi-Fi-connected smart plug.
2. Go into your PC's BIOS and find the setting for "Restore on AC Power Loss" (or similar) and set it to **Power On**.
3. Now, if your PC is off, you can simply turn off the smart plug from your phone, wait 5 seconds, and turn it back on. The PC will detect power and turn itself on automatically! 
*(Note: Try not to use this to hard-shutdown your PC while Windows is running, as it can corrupt your files. Only use it to turn it ON).*

### Remote Shut Downs and Crash Recovery (SSH)
If Windows crashes or you need to force a restart, you need a backdoor. 
1. Install [OpenSSH Server on Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui&pivots=windows-server-2025).
2. Ensure you've activated Virtualization/SSH features in your BIOS or Windows Features.
3. Now, using your laptop, you can SSH directly into your host PC using its Tailscale IP!

```bash
alias sleeppc='ssh my-pc-name "shutdown /s /f /t 0"'
```

### Bonus Tip: LocalSend
Since your devices are now safely linked via Tailscale, you can easily transfer files between them! I highly recommend [LocalSend](https://localsend.org/). It works like Apple's AirDrop, but across Windows, Linux, Android, and macOS, and works perfectly over your new tailnet.

With your PC now securely connected to your laptop and virtually unbreakable, it's time to set up the actual game streaming.

