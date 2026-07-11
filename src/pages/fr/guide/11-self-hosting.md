---
layout: "../../../layouts/GuideLayout.astro"
title: "Auto-hébergement"
description: "Reprenez le contrôle de vos données en hébergeant vos propres services."
sectionNumber: 11
---

## Votre propre Cloud personnel

Associer un petit ordinateur peu gourmand en énergie comme un **Raspberry Pi** avec **Docker**, c'est comme débloquer un potentiel infini dans une machine de la taille d'une poche. Si vous en avez assez de payer des abonnements mensuels aux géants de la technologie et de vous demander qui a accès à vos fichiers, l'auto-hébergement est le moyen ultime de reprendre le contrôle de vos données.

Mon parcours a commencé simplement : je voulais configurer un VPN pour streamer des jeux depuis mon PC de bureau. Mais une fois que j'ai acheté un Raspberry Pi, cela m'a ouvert les portes du vaste monde de l'auto-hébergement et de l'indépendance numérique.

> *Envie d'aller plus loin ? Jetez un œil à la [Fondation Raspberry Pi](https://www.raspberrypi.com/).*

### L'apprentissage

Ma première tentative de configuration d'un serveur a été un désastre total. J'ai suivi les tutoriels à la lettre, mais comme je ne comprenais pas complètement ce que je faisais, les choses se sont vite compliquées. Mais c'est là que la persévérance entre en jeu. **Vous allez faire des erreurs, et c'est normal. Faire des erreurs est la façon dont on apprend.**

Finalement, j'ai arrêté de brancher un écran et j'ai commencé à tout gérer "sans tête" (headlessly) via SSH (Secure Shell). Utiliser la ligne de commande m'a semblé intimidant au début, mais c'est vite devenu une seconde nature.

> *Vous n'avez jamais utilisé la ligne de commande ? Ne vous inquiétez pas, le [SSH (Secure Shell)](https://www.ssh.com/academy/ssh) est plus simple qu'il n'y paraît.*

### Place à Docker et Portainer

Le véritable tournant pour l'auto-hébergement, c'est **Docker**. Docker est un outil qui vous permet d'exécuter des applications dans des environnements isolés appelés *conteneurs*. Vous les gérez à l'aide d'un simple fichier texte (`docker-compose.yml`) qui définit ce qui s'exécute et comment.

> *Curieux d'en savoir plus sur les conteneurs ? La [documentation officielle de Docker](https://docs.docker.com/) est un excellent point de départ.*

Pour rendre les choses encore plus faciles, je recommande vivement d'utiliser **Portainer**. C'est une interface web qui vous permet de gérer visuellement vos conteneurs Docker. Tout configurer manuellement sans interface graphique peut être un vrai casse-tête, et Portainer rend cela incroyablement accessible aux débutants.

### Mon installation actuelle

Si vous êtes curieux de savoir ce que vous pouvez réellement faire avec un serveur domestique, voici un aperçu de ce que je fais tourner actuellement sur mon Raspberry Pi :

*   **Nextcloud :** Ma propre alternative personnelle à Google Drive ou Dropbox pour la synchronisation et le partage de fichiers.
*   **Bitwarden (Vaultwarden) :** Un gestionnaire de mots de passe auto-hébergé (parce que vous ne devriez jamais utiliser le même mot de passe deux fois !).
*   **Firefly III :** Un gestionnaire de finances personnelles pour suivre ses dépenses.
*   **Pi-hole :** Un bloqueur de publicités et de traqueurs pour l'ensemble du réseau. Il empêche votre Smart TV et vos autres appareils de "téléphoner à la maison" en permanence.
*   **Tailscale :** Cela crée un **Tailnet** privé — un réseau maillé sécurisé entre mes appareils. Cela me permet d'accéder à mon Nextcloud en toute sécurité depuis n'importe où dans le monde, sans ouvrir de ports dangereux sur l'Internet public.

### Et après ?

L'auto-hébergement nécessite un peu d'entretien. Vous devez vous souvenir de faire des sauvegardes (gardez toujours une copie hors site !) et de mettre à jour vos logiciels. Mais la récompense est immense. Vous n'êtes plus un simple utilisateur d'Internet ; vous êtes un administrateur. Vous possédez votre cloud, votre coffre-fort de mots de passe et vos données. C'est cela la véritable liberté numérique.
