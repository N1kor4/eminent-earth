---
layout: "../../../layouts/ProjectLayout.astro"
title: Ferroelectric Memory Probe Station Project (CEA Leti)
date: 2025-06-07
author: Nicolas Rabreau
image: {
  src: "/images/post-1.jpg",
  alt: "A picture of a coder",
}
description: Projet en partenariat avec le CEA Leti axé sur l'automatisation des mesures des stations de test pour les cellules de mémoire ferroélectriques à l'aide de Python et Arduino.
draft: false
category: none
---

Ce projet d'une durée d'un an a été mené en collaboration avec le CEA Leti, l'un des principaux centres de recherche européens en microélectronique. Il s'est déroulé à l'interface entre l'instrumentation, l'automatisation et la physique des matériaux, et s'est concentré sur la caractérisation des mémoires ferroélectriques (FeRAM).

Contrairement au travail de fabrication en salle blanche, ce projet consistait à développer et à automatiser des protocoles de test pour les stations de test utilisées pour évaluer les cellules FeRAM préfabriquées. L'objectif était de mesurer la rétention, la fiabilité de commutation et la dérive au cours de différents cycles d'écriture/lecture.

---

## Ce sur quoi j'ai travaillé

- Construction d'une interface basée sur Python pour la communication en temps réel avec un contrôleur Arduino, permettant un contrôle numérique précis des adresses mémoire et du timing
- Utilisation de l'accès direct aux registres (PORTx, DDRx) pour optimiser les opérations d'écriture/lecture au niveau du microcontrôleur
- Développement d'une interface graphique (PyQt5 + tkinter) pour simplifier la programmation de la mémoire, avec des fonctionnalités d'importation/exportation des données de forme d'onde
- Banc d'essai quasi-fonctionnel avec des joints de soudure pour connecter la carte

---

## Résultats et impact

Ce projet se poursuit année après année et progresse progressivement. L'année dernière a marqué la première itération, au cours de laquelle les étudiants ont construit un banc d'essai basique mais fonctionnel et une base de code rudimentaire. Cette année, nous avons affiné le code, amélioré les protocoles de communication et rendu le système plus stable.

Cependant, nous dépendons d'une autre entreprise partenaire pour créer une connexion physique entre l'Arduino et la carte mémoire. Malgré cette limitation, nous avons laissé derrière nous un référentiel GitHub bien documenté, permettant au prochain groupe d'étudiants de reprendre facilement le projet avec une bonne compréhension du contexte et des défis à relever.