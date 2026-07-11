---
layout: "../../../layouts/GuideLayout.astro"
title: "Le Hardware"
description: "Les bases physiques de nos appareils : du transistor aux supercalculateurs."
sectionNumber: 2
---

## Les fondations physiques

Avant de parler de code ou d'applications, il faut comprendre la base : le matériel, ou "hardware". C'est la partie physique de l'informatique, ce que vous pouvez réellement toucher. Bien que nos téléphones et ordinateurs soient de plus en plus fins et mystérieux, ils reposent tous sur les mêmes principes fondamentaux.

### Un bref voyage dans le temps

Pour comprendre comment nous en sommes arrivés là, il faut remonter à l'invention du premier transistor. Ce commutateur microscopique a révolutionné le monde. Les premiers calculs servaient à des choses sérieuses, comme calculer des trajectoires spatiales (ou jouer aux tout premiers jeux vidéo comme *Spacewar!* dans les laboratoires).

Puis est venue la nanofabrication, nous permettant de rétrécir ces transistors. Les ordinateurs se sont "démocratisés" avec des machines portables (bien qu'encore très lourdes). Nous avons vu l'essor des premiers systèmes d'exploitation et des ordinateurs personnels qui ont fait entrer des jeux vidéo comme Atari dans nos salons.

La puissance de ces machines a doublé à une vitesse incroyable. C'est ce qu'on appelle la **Loi de Moore** — l'observation selon laquelle le nombre de transistors sur une puce double environ tous les deux ans, entraînant une croissance exponentielle de la puissance de calcul. Finalement, cela a conduit à une spécialisation des machines : PC familiaux, serveurs massifs, immenses centres de données et supercalculateurs.

Tous ces appareils sont désormais reliés à un seul Internet. Mais avant de plonger dans le web, regardons de quoi est vraiment faite une machine moderne.

### À l'intérieur de la machine

*Pour répondre à une question courante : Non, les ordinateurs n'ont pas toujours été aussi modulaires qu'aujourd'hui. Les premiers ordinateurs étaient d'énormes mainframes intégrés. La culture moderne de la construction de son propre PC est un luxe relativement récent !*

Pour faire simple, imaginez un ordinateur comme une cuisine :

*   **Le Processeur (CPU) :** C'est le chef cuisinier. Il exécute les instructions, calcule, et prend les décisions. Plus il est puissant (défini par son nombre de cœurs et sa fréquence), plus il peut préparer de plats rapidement. Les ordinateurs modernes utilisent généralement des puces Intel ou AMD.
*   **La Mémoire Vive (RAM) :** C'est le plan de travail. C'est là que le chef pose les ingrédients dont il a besoin immédiatement. Plus vous avez de RAM, plus vous pouvez ouvrir d'applications en même temps sans ralentissement. Mais attention : quand on éteint l'ordinateur, le plan de travail est vidé.
*   **Le Stockage (Disque Dur / SSD) :** C'est le garde-manger. C'est là que vos données (photos, logiciels, système d'exploitation) sont stockées de manière permanente. Les SSD modernes (comme les disques M.2) sont ultra-rapides et ont révolutionné la réactivité de nos machines, remplaçant les vieux disques durs mécaniques (HDD).
*   **La Carte Mère :** C'est la cuisine elle-même. C'est la grande carte (parfois d'un vert moche) qui relie tous les composants entre eux pour qu'ils puissent communiquer.
*   **L'Alimentation :** L'électricité qui fait tourner la cuisine.
*   **La Carte Graphique (GPU) :** Imaginez un sous-chef spécialisé uniquement pour que les plats soient beaux. Elle gère tout ce que vous voyez à l'écran, ce qui est particulièrement important pour les jeux ou le rendu 3D.

Vous pouvez également installer d'autres adaptateurs spécifiques, comme des cartes Wi-Fi ou Bluetooth, pour ajouter plus de fonctionnalités à votre cuisine.

Comprendre ces bases ne vous aidera pas seulement à faire de meilleurs choix lors de l'achat d'un nouvel appareil ; cela vous aidera aussi à réaliser que nos machines ne sont pas magiques. Elles obéissent à des règles physiques et logiques strictes. C'est la première étape pour démystifier la technologie.

### Les Ordinateurs Portables

Les ordinateurs portables ont introduit une nouvelle utilité : la mobilité. Le but était de tout minimiser. Si les premiers portables offraient une certaine flexibilité, les modèles modernes sont presque entièrement verrouillés, ce qui rend impossible la mise à niveau de pièces individuelles. Cependant, des marques comme [Framework](https://frame.work/) s'y opposent en proposant des ordinateurs portables entièrement modulaires et réparables.

### Des ordinateurs plus petits : Raspberry Pi & Arduino

Tous les ordinateurs ne se trouvent pas sur un bureau. Des appareils comme le [Raspberry Pi](https://www.raspberrypi.com/) et l'[Arduino](https://www.arduino.cc/) sont minuscules, peu coûteux et incroyablement utiles. Ils utilisent souvent des architectures différentes (comme ARM au lieu de x64) et nous montrent qu'il n'y a pas qu'une seule façon de construire un processeur. Ils sont parfaits pour bricoler, apprendre, ou auto-héberger de petits services.

### Serveurs, Centres de Données et Supercalculateurs

*   **Serveurs :** Ce sont essentiellement des ordinateurs puissants conçus pour fonctionner 24h/24 et 7j/7, fournissant des services, des données ou des applications à d'autres ordinateurs (clients) via un réseau.
*   **Centres de Données (Data Centers) :** Imaginez un immense entrepôt rempli de milliers de serveurs, constamment refroidis et alimentés en électricité, formant la colonne vertébrale physique du "cloud".
*   **Supercalculateurs :** Ce sont des machines colossales avec des quantités massives de RAM et de puissance de traitement, utilisées pour des simulations complexes comme les prévisions météorologiques ou la mécanique quantique.
*   **Ordinateurs pour l'IA :** Plus récemment, nous avons vu des clusters spécialisés remplis de milliers de GPU spécifiquement conçus pour entraîner les réseaux de neurones massifs derrière l'intelligence artificielle moderne.

### Le Droit à la Réparation

Le matériel n'est pas seulement une question de vitesse et de performance. C'est aussi une question de longévité, de durabilité et de propriété.

L'une des conversations les plus importantes dans le monde de la technologie aujourd'hui est le droit à la réparation. Pendant des années, les entreprises technologiques ont conçu leurs produits de manière à ce qu'il soit difficile, voire impossible, pour les utilisateurs de les réparer eux-mêmes. Les batteries collées, les vis propriétaires et les verrous logiciels sont devenus la norme.

Cette tendance à l'obsolescence programmée — la conception de produits destinés à tomber en panne ou à devenir rapidement obsolètes — nous oblige à acheter de nouveaux appareils plus souvent que nécessaire. C'est mauvais pour notre portefeuille, et c'est dévastateur pour l'environnement. Les déchets électroniques représentent l'une des sources de pollution qui augmente le plus rapidement à l'échelle mondiale.

Veuillez noter que, pour des raisons de sécurité, il n'est pas conseillé de conserver des appareils qui ne sont plus mis à jour.

Soutenir les entreprises qui privilégient la réparabilité (comme [Framework](https://frame.work/) ou [Fairphone](https://www.fairphone.com/)), apprendre à réparer ses propres appareils lorsque c'est possible, et plaider en faveur de lois sur le droit à la réparation sont des étapes cruciales pour reprendre le contrôle de notre matériel. Un appareil que vous ne pouvez pas ouvrir est un appareil que vous ne possédez pas vraiment.
