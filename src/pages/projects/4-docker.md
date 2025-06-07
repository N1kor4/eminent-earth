---
layout: "../../layouts/ProjectLayout.astro"
title: Docker & Self-Hosting
date: 2025-06-07
author: Nicolas Rabreau
image: 
  src: "/public/images/post-1.jpg"
  alt: "A picture of a coder"
description: desc
draft: false
category: none
---

Raspberry Pi combined with Docker is basically an infinitely powerful gaming tool. Nowadays, it is very easy to find some apps that you like that are FOSS. If you don't know what FOSS is, you can read my article about it. Learning how it works and how to do it yourself is a great step toward full independence.

This article is more a talk about where I started, where I wanted to go, and how the journey is going (it's never-ending).

To keep it short, my first idea was to make a VPN (or a Tailnet, as we will see later) in order to play on my gaming computer from my laptop (streaming). But I finally discovered Sunshine and Moonlight, which are a lot more efficient than Steamstream inside a Tailnet, aha.  
Then, with my association, we were making a website so I thought of buying a Raspberry Pi for this occasion, but I finally bought it later on, discovering the infinite possibilities of FOSS.

Well, the first thing to do is actually to buy one Raspberry Pi! Then you can dive into this experience (you will also have to buy a few accessories).

My first installation wasn't really a success — it was somehow more of a mess. I was really cautious about following the tutorial, but when you don't understand what you are doing, it's complicated. This is where commitment plays a role. Failure is part of the job. If you don't fail, you don't learn.  
Having to mount and unmount the device was really interesting. Moreover, as we were discovering PCBs in school, that looked familiar (even if it's very different, you have pins and screws, ahah).

After a few hours (days) of building, I achieved installing my first PiOS and first Linux-based OS. So that's it, I was onto it. I took an HDMI cable and started to work on it.

In order to save you some time if you want to follow my path, here are some videos explaining how it works and how to build your own. If you don’t mind, I currently have a Raspberry Pi 5 with a 500GB SSD and 8GB of RAM running PiLiteOS.

I then figured out that everything I wanted to do was purely command line, and it was a mess to change the input of my screen, so I decided to go full command line with SSH access (don't forget what we said in the security section). But this was also a mess due to admin privileges, and I had a hard time connecting. Now, it's as easy as typing my name.

So you better be prepared by understanding how SSH requests are made, and I leave a link for you:

[Link to SSH tutorial or resource]

Well, our first steps are completed. We now have access to our Pi via command line and we're ready to start our adventure for good.

The first thing to understand with Docker is that it works with a file that contains all the information about the running services. The `docker-compose.yml` is a YAML file that contains your "application". It's easy to understand, but to follow my path, I leave you the resources I've read!

The first thing I advise you to compose is Portainer. It will be much easier to manage all your data and your apps because trust me, it was a bit of a hell going through all the issues without a user interface!

Watch this:

Once Portainer is installed, it's very easy to move on. You just have to be careful with:  
- The Docker Compose file you are using  
- How your networks are managed  
- Where your data is stored  
- Updates (it's easy to do a crontab for your device)  
- Updates for Docker (easy with WatchTower)  
- Security of your tools (admin password)

Some apps I have installed:  
- Nextcloud  
- Bitwarden  
- Firefly III  
- Tandoor Recipes  

I also advise you to install these not on Portainer but directly on your Pi, as it's more secure since they are only accessible via your SSH key on your Pi:  
- Pi-hole (to manage your Wi-Fi)  
- Traefik (to manage routes)  
- Tailscale (if you want to create a Tailnet)

Pi-hole can be great, but be careful of your admin network (and you should have a look at your admin Wi-Fi router because you'll need to create port forwarding if you want to publish on the web).  
Traefik is useful...  
What's a Tailnet and why is it so enjoyable? Well, it basically creates a network (but not tunneling like a VPN). It's kind of another layer of network between authorized devices. That lets you SSH into your device from work to home, for example. And if you're on vacation and want to access your Nextcloud account, it's possible even if your Pi is at your home!

Once you have done all that, it's really enjoyable to create your own database / import from an existing one!  
You have now your own data.

### Tips for more security:
- If you only store your data in one place and you get robbed, or your house burns down, or something else happens, you lose everything!  
- I still advise you to keep your precious data in a cloud from a provider (less secure, but if you choose the right one, it's all okay).  
- Make backups often in case a crash happens.  
- Try not to expose too many ports that you don't want other people to see (you can expose only your website, for example, and keep Nextcloud within your Tailnet).

Screenshots or a diagram of my architecture?

---

*This post is part personal reflection, part call to action. If you’ve made it this far, thank you — and maybe take one small step today to protect your privacy.*
