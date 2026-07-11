---
layout: "../../../layouts/GuideLayout.astro"
title: "Réseau & Sécurité"
description: "Comment rester en sécurité dans un monde interconnecté."
sectionNumber: 10
---

## La vie privée nécessite la sécurité

La vie privée sans la sécurité, c'est comme fermer sa porte d'entrée à clé mais laisser les fenêtres grandes ouvertes.

Plus vous comptez sur vous-même — que ce soit en auto-hébergeant des services, en utilisant des outils de confidentialité, ou en gérant vos propres appareils — plus la sécurité devient importante. À quoi bon éviter Google ou Facebook si votre serveur personnel se fait pirater sur un Wi-Fi public ?

Vous n'avez pas besoin d'être un expert en cybersécurité travaillant 24h/24 et 7j/7 pour faire les choses bien. Quelques bonnes habitudes suffisent largement à faire de vous une cible beaucoup plus difficile à atteindre.

### Les fuites de données arrivent à tout le monde

On entend souvent parler de gigantesques violations de données aux informations. Mais ce ne sont pas seulement les entreprises ou les gouvernements qui sont ciblés. Des millions d'e-mails, de mots de passe et de détails de paiement fuient chaque année. La première ligne de défense contre cela est simplement la connaissance et les bonnes pratiques.

### Protection des comptes : Le gestionnaire de mots de passe

Si vous utilisez un seul mot de passe facile à retenir pour tout, vous prenez un risque énorme. Si un site est piraté, les attaquants essaieront ce même mot de passe sur votre messagerie, votre banque et vos réseaux sociaux.

Vous avez besoin de **mots de passe forts et uniques pour chaque compte**, et d'un moyen sûr de les stocker. Un gestionnaire de mots de passe n'est pas négociable.

*   **KeePass :** Entièrement local, sans cloud, très sécurisé, mais nécessite un peu de configuration.
*   **Proton Pass ou Bitwarden :** Faciles à utiliser, open-source, et synchronisés entre vos appareils. (Vous pouvez même auto-héberger Bitwarden, comme mentionné dans la section précédente !)

### 2FA : L'authentification à deux facteurs

Même avec un mot de passe fort, une couche de protection supplémentaire est vitale. L'authentification à deux facteurs (2FA) nécessite quelque chose que vous *savez* (votre mot de passe) et quelque chose que vous *avez* (un code sur votre téléphone).

*   Utilisez une application comme **Aegis Authenticator**, **Ente Auth**, ou **Raivo OTP** au lieu de vous fier aux codes SMS, qui peuvent être interceptés.
*   **Sauvegardez toujours vos codes de récupération !**

### Les alias d'e-mail

Utilisez des alias d'e-mail pour éviter d'exposer votre véritable adresse. Des services comme **SimpleLogin** vous permettent de générer des adresses e-mail uniques pour chaque service auquel vous vous inscrivez. Ils transfèrent les e-mails vers votre vraie boîte de réception. Si un site se fait pirater ou commence à vous spammer, il vous suffit de désactiver l'alias. Votre véritable e-mail reste caché et sécurisé.

### Sécuriser votre serveur

Si vous faites tourner un serveur comme un Raspberry Pi, vous ouvrez une porte sur Internet. Voici comment le sécuriser :

1.  **UFW (Uncomplicated Firewall) :** Bloque le trafic réseau indésirable. N'ouvrez que les ports dont vous avez absolument besoin (comme le SSH ou le trafic web).
2.  **Fail2Ban :** Cet outil surveille les tentatives de connexion et bloque automatiquement les adresses IP qui échouent trop de fois (ce qui arrête les attaques par force brute).
3.  **Bonnes pratiques SSH :** N'utilisez jamais de mots de passe pour le SSH. Utilisez plutôt des clés cryptographiques, et envisagez de changer le port SSH par défaut (22) par un autre port afin d'éviter les bots automatisés.

La sécurité ne consiste pas à être paranoïaque ; il s'agit d'avoir le contrôle. Vous n'avez pas besoin d'être parfait, il vous suffit d'être meilleur que l'utilisateur moyen pour dissuader la plupart des attaquants.
