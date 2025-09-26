---
layout: "../../../layouts/ProjectLayout.astro"
title: EPFL Internship
date: 2025-06-07
author: Nicolas Rabreau
image: {
  src: "/public/images/post-1.jpg",
  alt: "A picture of a coder",
}
description: I completed a research internship at EPFL on superconducting nanowire detectors and quantum electronics integration.
draft: false
category: none
---

## First experience working abroad

**Lab:** Edoardo Charbon’s group (Quantum Architecture & Computation)

My first day at EPFL was both exciting and welcoming. I discovered what it meant to work in a truly multicultural environment — in fact, there were almost no Swiss in the lab aside from the administration and Professor Edoardo Charbon himself. This diversity was a great opportunity to meet people from different backgrounds and broaden my perspective.  

My research focused on **Superconducting Nanowire Single-Photon Detectors (SNSPDs)** and their integration with **Rapid Single Flux Quantum (RSFQ) circuits**. These acronyms sound intimidating, so let me explain.  

SNSPDs are remarkable devices: they can detect single photons with extremely high precision, low noise, and very little timing uncertainty (jitter). The challenge is that they cannot easily be controlled with standard CMOS electronics at room temperature — the noise is too high. Lowering the temperature reduces this noise, just like cooling down makes atoms move less. The colder the system, the more stable the signals.  

The group’s idea was to interface SNSPDs with RSFQ logic, which uses superconductivity and Josephson junctions to process signals at ultra-high speed and low power. This is exactly where my work came in.  

---

## My role

My task was to design a system capable of **reading out the data of 64 SNSPD pixels** and converting it into a single high-speed output signal. The goal was ambitious: to reach operation frequencies in the gigahertz range.  

For comparison, the starting point was a paper from a Japanese lab that had demonstrated a **100 MHz device** without filtering. Through simulations, I explored architectures that could push this limit dramatically further. My proposed design — which included a full signal chain from SNSPD to RSFQ output — achieved an **average rate of 5 GHz**, a potential **50× improvement** with integrated filtering.  

While these results were based on simulation rather than fabrication, my supervisor was very enthusiastic about the findings and their potential impact on future detector systems.  

---

## Results and experience

This internship was a turning point for me. It combined **quantum devices, superconducting electronics, and circuit design** in a way that connected theory with real-world applications. It also confirmed my motivation to work at the frontier between physics and engineering.  

Beyond the technical aspects, living in Neuchâtel was unforgettable — a beautiful city and a wonderful place for my first professional experience abroad.  

👉 [Read my full internship report here](/path-to-report.pdf)  

