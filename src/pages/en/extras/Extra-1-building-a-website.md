---
layout: "../../../layouts/GuideLayout.astro"
title: "Building a Website"
description: "A personal journey into web development and creating your own space on the internet."
sectionNumber: 1
---

## Claiming Your Corner of the Internet

Creating your own website is one of the most rewarding things you can do online. It gives you a space to express yourself, share your projects, and build a portfolio that reflects exactly who you are, without being constrained by the rules or algorithms of social media platforms.

But getting there? It's not always as smooth as you might hope. When I set out to build this site, I ran into my fair share of headaches with build systems, routing, and deployment. This is a quick look at that journey.

### Why I Chose Astro

I wanted something more flexible and creative than cookie-cutter website builders like WordPress or Wix, but I also wanted it to be fast and relatively simple to maintain. 

That’s when I discovered **[Astro](https://astro.build/)**. Astro is a modern web framework that is perfect for content-driven sites like blogs or portfolios. It lets you write your pages in simple Markdown (just like this guide!), but it also allows you to mix in interactive components if you need them. Most importantly, Astro outputs incredibly fast, static HTML by default, which is great for performance and SEO.

### The Build Journey

I started by following tutorial series online. A crucial piece of advice for anyone starting out: **follow the tutorials, but make sure you read the official documentation too.** It will save you hours of debugging when things inevitably go wrong.

The basic structure of an Astro project involves:
*   **Layouts:** The "frame" of your website (headers, footers, navigation).
*   **Pages:** The actual content, often written in Markdown.
*   **Styles (CSS):** The code that makes everything look good.

Start messy, learn by doing, and don't be afraid to break things locally. 

### Deploying the Website

Building the site on your computer is only half the battle. You have to get it online. 

For static sites like those built with Astro, platforms like **Netlify** or **Vercel** are incredible. They connect directly to your GitHub repository. Every time you push an update to your code, the platform automatically rebuilds and deploys the new version of your site. It feels like magic.

### Getting a Custom Domain

If you want a professional-looking URL (like `yourname.com` instead of `yourname.netlify.app`), you need to purchase a domain name from a registrar (like Gandi, Cloudflare, or OVH). 

Connecting your custom domain to your host requires configuring DNS (Domain Name System) settings. It can seem incredibly complicated the first time you look at a DNS dashboard. Don't panic if it doesn't work on the first try. Read the documentation provided by your host, be patient while DNS records propagate across the internet, and you'll get it working.

Building a website from scratch is a fantastic way to understand how the web actually works beneath the surface. It’s your own digital home—go build it!
