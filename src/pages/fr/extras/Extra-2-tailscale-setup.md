---
layout: "../../../layouts/GuideLayout.astro"
title: "Configurer Tailscale"
description: "Mettre en place un réseau privé maillé avec Tailscale pour un accès distant sécurisé."
sectionNumber: 0
---

## L'Objectif : Accéder à son PC de n'importe où

Avant de pouvoir streamer un jeu depuis votre gros PC fixe vers votre PC portable au Starbucks, il faut que les deux appareils pensent qu'ils sont dans la même pièce. Ouvrir les ports de votre box internet est une faille de sécurité massive, et configurer un VPN traditionnel peut vite devenir fastidieux.

Entrez **Tailscale**.

Tailscale crée un "tailnet" — un réseau maillé privé et sécurisé. Au lieu de rediriger tout votre trafic internet via votre connexion locale (comme un VPN classique), il permet simplement à vos appareils de se voir comme s'ils étaient exactement sur le même réseau Wi-Fi local, peu importe où ils se trouvent dans le monde.

### Étape 1 : Installer Tailscale

1. Allez sur le [site de Tailscale](https://tailscale.com/) et créez un compte. **Astuce :** Utilisez GitHub pour vous connecter. D'expérience, les autres options de connexion peuvent parfois bugger.
2. Installez l'application Tailscale sur votre PC gamer (l'"Hôte") et sur l'appareil sur lequel vous voulez jouer (le "Client").
3. Connectez-vous sur les deux appareils.

> [!WARNING]
> **ÉTAPE CRITIQUE :** Allez dans le panneau d'administration de Tailscale sur le web et réglez l'expiration de la clé (**Key Expiry**) de votre PC hôte sur **Never** (Jamais). Si vous oubliez ça, le jeton d'accès de votre PC expirera pendant votre absence, et vous perdrez définitivement la connexion jusqu'à votre retour à la maison.

### Étape 2 : Attribuer des IP Fixes
L'une des meilleures fonctionnalités de Tailscale est qu'il attribue automatiquement des adresses IP à vos appareils. Vous pouvez également attribuer des adresses IP fixes directement depuis le panneau d'administration de Tailscale, contournant ainsi complètement les paramètres de votre box internet (ce qui est génial si vous êtes en résidence étudiante ou si vous n'avez pas d'accès administrateur à la box).

## Les Sécurités (Comment ne pas perdre l'accès)

Avoir une connexion à distance c'est super, mais que se passe-t-il si votre PC plante ou s'éteint pendant que vous êtes à 300km de là ? Vous avez besoin de sécurités.

### Allumer le PC (Wake-On-LAN)
Le Wake-On-LAN (WOL) vous permet d'envoyer un "paquet magique" ("magic packet") sur le réseau à une carte mère en veille pour lui dire de s'allumer.
- **Condition 1 :** Votre PC doit être connecté par Ethernet (LAN). Les cartes Wi-Fi s'éteignent quand le PC est éteint.
- **Condition 2 :** Vous devez activer le WOL dans le BIOS de votre carte mère, car il est désactivé par défaut par mesure de sécurité.

Si vous avez un Raspberry Pi ou un serveur toujours allumé chez vous, vous pouvez vous y connecter en SSH et envoyer le paquet magique localement. Si vous êtes chaud, configurez un alias :
```bash
alias wakepc='ssh pi "sudo etherwake -i eth0 00:11:22:33:44:55"'
```

### L'Astuce de la "Prise Connectée"
Si vous êtes en résidence étudiante (ex: CROUS) et n'avez absolument aucun accès au routeur pour configurer le WOL, il existe une technique légendaire : **La Prise Connectée**.
1. Branchez votre PC sur une prise connectée en Wi-Fi (multiprise connectée).
2. Allez dans le BIOS de votre PC et trouvez le paramètre "Restore on AC Power Loss" (ou similaire) et réglez-le sur **Power On** (Allumer).
3. Maintenant, si votre PC est éteint, il vous suffit d'éteindre la prise connectée depuis votre téléphone, d'attendre 5 secondes, puis de la rallumer. Le PC détectera le courant et s'allumera tout seul !
*(Note : Essayez de ne pas utiliser cette méthode pour éteindre de force votre PC pendant que Windows tourne, car cela pourrait corrompre vos fichiers. Utilisez-la uniquement pour l'allumer).*

### Extinctions à Distance et Récupération après Crash (SSH)
Si Windows plante ou que vous devez forcer un redémarrage, vous avez besoin d'une porte de secours.
1. Installez [OpenSSH Server sur Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui&pivots=windows-server-2025).
2. Assurez-vous d'avoir activé les fonctionnalités de Virtualisation/SSH dans votre BIOS ou dans les Fonctionnalités Windows.
3. Désormais, depuis votre PC portable, vous pouvez vous connecter en SSH directement sur votre PC hôte en utilisant son IP Tailscale !

```bash
alias sleeppc='ssh mon-nom-de-pc "shutdown /s /f /t 0"'
```

### L'Astuce Bonus : LocalSend
Puisque vos appareils sont maintenant reliés en toute sécurité via Tailscale, vous pouvez facilement transférer des fichiers entre eux ! Je recommande fortement [LocalSend](https://localsend.org/). Ça fonctionne comme AirDrop d'Apple, mais entre Windows, Linux, Android et macOS, et ça marche parfaitement sur votre nouveau tailnet.

Maintenant que votre PC est solidement connecté à votre ordinateur portable et virtuellement incassable, il est temps de configurer le streaming du jeu en lui-même.

