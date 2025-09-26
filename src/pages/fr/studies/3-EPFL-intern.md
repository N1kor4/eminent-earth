---
layout: "../../../layouts/ProjectLayout.astro"
title: Stage à l’EPFL
date: 2025-06-07
author: Nicolas Rabreau
image: {
  src: "/public/images/post-1.jpg",
  alt: "Une photo d'un codeur",
}
description: J’ai effectué un stage de recherche à l’EPFL sur les détecteurs supraconducteurs à nanofils et l’intégration électronique quantique.
draft: false
category: none
---

## Première expérience professionnelle à l’étranger

**Laboratoire :** Groupe d’Edoardo Charbon (Quantum Architecture & Computation)

Mon premier jour à l’EPFL a été à la fois excitant et chaleureux. J’ai découvert ce que signifie travailler dans un environnement véritablement multiculturel — en fait, il n’y avait presque pas de Suisses dans le laboratoire, à l’exception de l’administration et du Professeur Edoardo Charbon lui-même. Cette diversité a été une excellente opportunité pour rencontrer des personnes de différents horizons et élargir ma perspective.  

Ma recherche portait sur les **détecteurs supraconducteurs à nanofils pour photons uniques (SNSPDs)** et leur intégration avec des **circuits Rapid Single Flux Quantum (RSFQ)**. Ces acronymes peuvent sembler intimidants, alors laissez-moi expliquer.  

Les SNSPDs sont des dispositifs remarquables : ils peuvent détecter des photons uniques avec une précision extrême, un bruit minimal et une incertitude temporelle très faible (jitter). Le défi est qu’ils ne peuvent pas être facilement contrôlés avec l’électronique CMOS standard à température ambiante — le bruit est trop important. Abaisser la température réduit ce bruit, un peu comme refroidir des atomes les fait moins bouger. Plus le système est froid, plus les signaux sont stables.  

L’idée du groupe était d’interfacer les SNSPDs avec la logique RSFQ, qui utilise la supraconductivité et les jonctions Josephson pour traiter les signaux à très haute vitesse et faible consommation. C’est exactement là que mon travail intervenait.  

---

## Mon rôle

Ma mission consistait à concevoir un système capable de **lire les données de 64 pixels SNSPD** et de les convertir en un seul signal de sortie haute vitesse. L’objectif était ambitieux : atteindre des fréquences de fonctionnement dans la gamme des gigahertz.  

Pour comparaison, le point de départ était un article d’un laboratoire japonais qui avait démontré un **dispositif à 100 MHz** sans filtrage. Grâce à des simulations, j’ai exploré des architectures capables de pousser cette limite beaucoup plus loin. Mon design proposé — incluant une chaîne complète du SNSPD jusqu’à la sortie RSFQ — a atteint un **taux moyen de 5 GHz**, soit une amélioration potentielle de **50×** avec filtrage intégré.  

Même si ces résultats étaient basés sur des simulations et non sur la fabrication, mon superviseur s’est montré très enthousiaste quant aux conclusions et à leur impact potentiel sur les futurs systèmes de détection.  

---

## Résultats et expérience

Ce stage a été un tournant pour moi. Il combinait **dispositifs quantiques, électronique supraconductrice et conception de circuits** d’une manière qui reliait la théorie aux applications concrètes. Il a également confirmé ma motivation à travailler à la frontière entre physique et ingénierie.  

Au-delà des aspects techniques, vivre à Neuchâtel a été inoubliable — une ville magnifique et un cadre idéal pour ma première expérience professionnelle à l’étranger.  

👉 [Lire mon rapport complet de stage ici](/path-to-report.pdf)
