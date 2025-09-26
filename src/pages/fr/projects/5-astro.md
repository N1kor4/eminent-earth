---
layout: "../../../layouts/ProjectLayout.astro"
title: Making This Website
date: 2025-06-07
author: Nicolas Rabreau
image: {
  src: "/images/post-1.jpg",
  alt: "A picture of a coder",
}
description: How I built this site using Astro and what I learned along the way
draft: false
category: Portfolio
---

## Why I Built This Site

Creating this website has been both a technical challenge and a personal journey. I wanted a space to express myself, share projects, and — let’s be honest — have a cool-looking portfolio that reflects who I am.

But getting there? Not as smooth as I hoped. I ran into problems with build systems, component logic, Markdown integration, and even just understanding how things fit together. So, this post is here to help **you avoid the headaches** I ran into — and maybe give you a little inspiration along the way.

---

## Why Astro?

I'm not an expert in pure HTML, CSS, or JavaScript, and I wanted something more **flexible and creative** than no-code tools like WordPress or Wix. That’s when I discovered [Astro](https://astro.build/), a modern web framework focused on performance and simplicity.

Astro is amazing because it lets you write pages in Markdown (like this one!), mix components from different frameworks (React, Vue, etc.), and keep things **static** and fast by default. That makes it **perfect for personal portfolios or blogs**.

---

## What I Wanted in My Site

- A blog system that's easy to update (Markdown is perfect for this)
- A simple but clean design that reflects me
- A structure I can scale and improve later (add projects, links, videos, etc.)
- Fast loading and SEO-friendly
- A custom domain to look more professional

---

## The Build Journey

Let’s be real — it wasn’t all smooth sailing.

To get started, I followed [this awesome YouTube tutorial series](#) — 18 videos that walk you through the process step-by-step. The creator? **Goated.** Seriously. (If you're just starting, follow tutorials but **read the docs too**. You'll save yourself hours of debugging.)

Here’s a simplified breakdown of what I had to figure out:

### 📁 Astro Project Structure

- **Core files**: What Astro installs when you create a new project. It includes all the base setup.
- **Config & packages**: This is where you control how your project behaves (`astro.config.mjs`, `tsconfig.json`, etc.).
- **Styles**: These define how everything looks — from fonts to boxes to spacing.
- **Layouts & pages**: Layouts define the overall look of a page; pages are usually Markdown files like this one.

---

## Deploying the Website

After building my Astro site locally, I needed to **get it online**.

There are many hosting options — I used the same one as in the tutorial (probably Vercel or Netlify). Both are great for static sites, especially when connected to GitHub: **push your code → site updates automatically.** It’s magic.

If you're building a blog, I recommend **Netlify**, especially because of its GitHub integration and ease of use.

---

## But What About the URL?

If you want a fancy, clean URL like `yourname.fr` instead of something like `yourname.netlify.app`, you’ll need to buy a domain name. That's where **domain registrars** come in.

> ✍️ A **domain registrar** is a company authorized to sell domain names. For `.fr` domains, examples include **Gandi** and **OVH** (I used OVH).

Setting up your domain means connecting it to your host using DNS (Domain Name System) settings. It sounds complicated — and it kind of is — but there are tutorials out there that break it down well.

I’ll eventually share links or even my own video about how to configure this, but for now: **don't panic if it doesn’t work on the first try**. I had to dig through documentation and a few forums to get mine working.

---

## Final Thoughts

I'm not a network engineer or a full-time developer, but I figured enough out to get this working — and **so can you**. This post is partly a personal reflection and partly a reminder that **you don’t need to know everything** to get started.

Start messy. Learn by doing. And don’t be afraid to share your process — someone else might need exactly what you just figured out.

---

*Thanks for reading — and if you’ve made it this far, maybe take one small step today to start your own site or protect your privacy online. Small actions matter.*

