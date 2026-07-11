---
layout: "../../../layouts/GuideLayout.astro"
title: "Jeu à Distance"
description: "Utiliser Tailscale pour jouer depuis votre PC n'importe où dans le monde."
sectionNumber: 0
---

## Le Duo Logiciel : Sunshine et Moonlight

Pour streamer vos jeux en haute qualité, on s'appuie sur une puissante combinaison open-source.
- **[Sunshine](https://docs.lizardbyte.dev/projects/sunshine/latest/) (L'Hôte) :** Installez-le sur votre PC gamer. Il capture votre écran, votre audio et les entrées de vos manettes et les diffuse sur le réseau.
- **[Moonlight](https://moonlight-stream.org/) (Le Client) :** Installez-le sur votre PC portable, tablette ou téléphone. Il reçoit le flux et renvoie les pressions de vos boutons à l'hôte.

### Configuration
1. Installez Sunshine sur votre PC principal.
2. Installez Moonlight sur votre appareil client.
3. Ouvrez Moonlight. Parfois, il détectera automatiquement votre PC, mais **faites attention** : assurez-vous d'ajouter manuellement le PC en utilisant son **adresse IP Tailscale**. Si vous utilisez l'IP locale, cela ne fonctionnera pas quand vous quitterez votre maison !

> [!IMPORTANT]
> **Lancer Sunshine en tant que Service Windows :** Lors de l'installation de Sunshine, il y a une option pour le faire tourner en tant que Service Windows. **Faites-le.** Si vous ne le faites pas, Sunshine ne démarrera qu'*après* que vous vous soyez connecté à Windows. Si vous redémarrez votre PC à distance, vous serez coincé indéfiniment sur l'écran de connexion Windows parce que Sunshine ne se sera pas encore lancé !

Si vous avez besoin d'approfondir les réglages de bitrate et d'encodeur, [MikeTheTech propose d'excellents tutoriels](https://www.youtube.com/watch?v=QaNXP2-hXlY) sur YouTube (en anglais). Mais honnêtement, si vous avez un PC puissant et un bon internet, vous pouvez tout laisser par défaut.

## Les Caprices Matériels (Comment se faire avoir)

J'ai plus d'un an d'expérience à gérer les petits détails qui peuvent ruiner votre setup pendant que vous êtes à des kilomètres de chez vous. Soyez attentifs.

### 1. Désactiver la Mise en Veille
Si votre PC se met en veille, l'écran s'éteint, la carte réseau s'endort, et c'est fini. Vous ne pourrez plus vous y connecter.
- **La Solution :** Allez dans les paramètres d'alimentation de Windows et réglez "Mettre l'ordinateur en veille" sur **Jamais**. Je recommande fortement de supprimer complètement l'option "Mettre en veille" de votre menu Démarrer pour ne jamais cliquer dessus par erreur (c'est du vécu).

### 2. L'"Écran Noir" et le Dongle Factice
Les cartes graphiques sont intelligentes. Si elles ne détectent pas d'écran physique branché et allumé, elles refusent parfois de faire un rendu, ce qui fait que Moonlight se connecte à un écran noir.
- **La Solution :** Achetez un "Dummy Plug" HDMI (ça coûte environ 10-15€ sur Amazon). Il se branche sur votre carte graphique et lui fait croire qu'un écran 4K est connecté, même quand vos vrais écrans sont éteints.
- **Astuce :** Prenez un dongle *HDMI*, pas un DisplayPort. Les dongles DP sont réputés pour beaucoup bugger.
- **Attention :** Quand vous rentrez chez vous et que vous voulez jouer physiquement, débranchez le dongle ! Avoir un écran fantôme actif en même temps que de vrais écrans peut causer des soucis de performance et des galères de gestion de fenêtres.
