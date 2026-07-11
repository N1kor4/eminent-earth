---
layout: "../../../layouts/GuideLayout.astro"
title: "Networking & Security"
description: "Keeping yourself safe and secure in an interconnected world."
sectionNumber: 10
---

## Privacy Needs Security

Privacy without security is like locking your front door while leaving the windows wide open. 

The more you rely on yourself—whether that means self-hosting services, using privacy tools, or managing your own devices—the more important security becomes. What’s the point of avoiding Google or Facebook if your personal server gets hacked over public Wi-Fi?

You don’t have to be a cybersecurity expert working 24/7 to do it right. A few smart habits go a very long way toward making yourself a harder target. 

### Data Leaks Happen To Everyone

We often hear about huge data breaches in the news. But it’s not just corporations or governments being targeted. Millions of emails, passwords, and payment details are leaked every year. The first line of defense against this is simple knowledge and good habits.

### Account Protection: The Password Manager

If you use one easy-to-remember password for everything, you are taking a massive risk. If one site gets breached, attackers will try that same password on your email, your bank, and your social media.

You need **strong, unique passwords for every account**, and a secure way to store them. A password manager is non-negotiable. 

*   **KeePass:** Fully local, no cloud, very secure, but takes some setup.
*   **Proton Pass or Bitwarden:** Easy to use, open-source, and synced across devices. (You can even self-host Bitwarden, as mentioned in the previous section!)

### 2FA: Two-Factor Authentication

Even with a strong password, an extra layer of protection is vital. Two-Factor Authentication (2FA) requires something you *know* (your password) and something you *have* (a code on your phone). 

*   Use an app like **Aegis Authenticator**, **Ente Auth**, or **Raivo OTP** instead of relying on SMS codes, which can be intercepted.
*   **Always back up your recovery codes!**

### Email Aliases

Use email aliases to avoid exposing your real email address. Services like **SimpleLogin** allow you to generate unique email addresses for every service you sign up for. They forward emails to your real inbox. If a site gets hacked or starts spamming you, you just turn off the alias. Your real email remains hidden and secure.

### Securing Your Server

If you are running a server like a Raspberry Pi, you are opening a door to the internet. Here’s how to secure it:

1.  **UFW (Uncomplicated Firewall):** Blocks unwanted network traffic. Only open the ports you absolutely need (like SSH or web traffic).
2.  **Fail2Ban:** This tool monitors login attempts and automatically blocks IP addresses that fail too many times (stopping brute-force attacks).
3.  **SSH Best Practices:** Never use passwords for SSH. Use cryptographic keys instead, and consider changing the default SSH port (22) to something else to avoid automated bots.

Security isn’t about being paranoid; it’s about being in control. You don’t have to be perfect, you just have to be better than the average user to deter most attackers.
