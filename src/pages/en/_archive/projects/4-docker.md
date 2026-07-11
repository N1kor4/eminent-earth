---
layout: "../../../layouts/ProjectLayout.astro"
title: Docker & Self-Hosting
date: 2025-06-07
author: Nicolas Rabreau
image: 
  src: "/images/post-1.jpg"
  alt: "A picture of a coder"
description: Docker is a nice tool to have thoose apps hosted in local on your computer for better control of your data and less money !
draft: false
category: Tech
---

## Docker & Self-Hosting on Raspberry Pi

Combining a Raspberry Pi with Docker is like unlocking infinite potential in a pocket-sized machine. These days, it’s easier than ever to find applications that are **FOSS** (Free and Open Source Software). If you’re not familiar with FOSS, feel free to check out my article about it — it’s a great first step toward digital independence.

This post is more of a reflection than a guide — where I started, what I was trying to build, and how the journey is still evolving (spoiler: it never really ends).

---

## Where It All Began

My original idea was to set up a VPN — or more specifically, a **Tailnet** (we’ll get to that) — so I could stream games from my desktop gaming PC to my laptop. I tried Steam Remote Play over a Tailnet, but then I discovered **Sunshine + Moonlight**. Game-changing. Much smoother and more efficient.

Around the same time, I was working with my association on a website, and thought, “Why not get a Raspberry Pi for this project?” I eventually bought one, and that opened the door to the **world of FOSS and self-hosting**.

---

## Step 1: Getting Your Pi

First things first — buy a Raspberry Pi. You’ll also need some accessories like a power supply, SD card, maybe an SSD if you want to go big.

> ⚠️ My first install? A total mess.  
I followed tutorials carefully, but not fully understanding what I was doing made things more complicated. That’s where **persistence** comes in. You’ll mess up. That’s okay. Messing up is how you learn.

Mounting, unmounting, flashing OS images — it all felt a bit technical at first. But with some time (okay, *a lot* of time), I got **Pi OS** up and running. That was my first real dive into Linux.

Once connected via HDMI, I started experimenting — and eventually realized that everything I wanted could be done via **command line**.

---

## Going Headless: SSH and Command Line Life

I ditched the HDMI setup and switched to headless mode, accessing my Pi via SSH.

> 🛡️ Reminder: Know your SSH basics — it’s fundamental for remote access.  
At first, it was a pain (admin privileges, connection issues, etc.), but now it’s as easy as typing my username. Here's a helpful resource to get you started:  
👉 [Link to SSH tutorial]

---

## Enter Docker

Now the fun part begins. Docker is a tool that lets you run apps in isolated environments called **containers**. You manage them using a file called `docker-compose.yml` — a simple YAML configuration that defines what runs, how, and where.

I recommend starting with **Portainer**, a web interface to manage Docker containers. Trust me, setting everything up manually without a UI was a nightmare. Portainer makes it way more beginner-friendly.

### 🧱 Setup Checklist:
- A valid `docker-compose.yml` file
- Well-managed network configuration
- Clear folder paths for your app data
- A system for updates (like crontab or Watchtower)
- Strong admin credentials

---

## My Current Setup

💻 **Device:** Raspberry Pi 5  
💽 **Storage:** 500GB SSD  
🧠 **RAM:** 8GB  
🧾 **OS:** PiLiteOS

### 📦 Apps I've Installed (via Portainer):
- **Nextcloud** – personal cloud storage
- **Bitwarden** – password manager
- **Firefly III** – personal finance
- **Tandoor Recipes** – recipe management

### 🔐 Apps I Run Outside Portainer (for extra security):
- **Pi-hole** – blocks ads and tracking across your network
- **Traefik** – reverse proxy to manage routes
- **Tailscale** – to create a private Tailnet

> ⚠️ Important:  
Pi-hole is super powerful, but it needs careful setup — especially your router’s admin settings and port forwarding rules if you want your services to be public.

---

## 🌐 What's a Tailnet?

A Tailnet is a private mesh network between your devices — **like a VPN but easier to manage**. It doesn’t tunnel traffic through a central server, but connects devices securely as peers.  
For example, you can SSH into your Pi from anywhere, or access your Nextcloud while you're on vacation.

---

## Final Tips: Security & Stability

- 🔁 **Backups**: Always back up your data. Keep at least one copy off-site.
- ☁️ **Cloud fallback**: Use a trusted cloud provider as a secondary backup if you're not 100% self-hosted.
- 🔒 **Close unused ports**: Only expose what's necessary (like your public website). Keep sensitive apps within your Tailnet.
- 🧠 **Stay informed**: Keep learning. The self-hosting community is huge and super helpful.

---

### 🤖 What's Next?

At this point, you're in control of your digital life. You’re running your own cloud, your own password vault, and your own personal web — and it's all hosted by you. That’s powerful.

🧱 I’ll share a diagram or screenshots of my setup soon — stay tuned!

---

*This post is part personal reflection, part call to action. If you’ve made it this far, thank you — and maybe take one small step today to take back control of your data and privacy.*
