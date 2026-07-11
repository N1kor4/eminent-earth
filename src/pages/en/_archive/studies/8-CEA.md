---
layout: "../../../layouts/ProjectLayout.astro"
title: Ferroelectric Memory Probe Station Project (CEA Leti)
date: 2025-06-07
author: Nicolas Rabreau
image: {
  src: "/images/post-1.jpg",
  alt: "A picture of a coder",
}
description: Collaborative project with CEA Leti on automating probe station testing and characterizing ferroelectric memory (FeRAM) under real-world conditions.
draft: false
category: none
---

This year-long project was a collaboration with CEA Leti, one of Europe’s leading research centers in microelectronics. It took place at the interface between instrumentation, automation, and materials physics, focusing on ferroelectric memory (FeRAM) characterization.

Contrary to cleanroom fabrication work, this project involved developing and automating test protocols for probe stations used to evaluate pre-fabricated FeRAM cells. The goal was to measure retention, switching reliability, and drift across different write/read cycles.

---

## What I worked on

- Built a Python-based interface for real-time communication with an Arduino controller, enabling precise digital control of memory addresses and timing
- Leveraged direct register access (PORTx, DDRx) to optimize write/read operations at the microcontroller level
- Developed a GUI (PyQt5 + tkinter) to simplify memory programming, with import/export features for waveform data
- A quasi-functional test bench with solder joints to connect the board

---

## Results & Impact

This project is being continued year after year and progresses gradually. Last year marked the first iteration, where students built a basic but functional test bench and a rudimentary codebase. This year, we refined the code, improved communication protocols, and made the system more stable.

However, we depend on another partner company to create a physical connection between the Arduino and the memory board. Despite this limitation, we left behind a well-documented GitHub repository, enabling the next group of students to easily resume the project with a strong understanding of the context and challenges.
