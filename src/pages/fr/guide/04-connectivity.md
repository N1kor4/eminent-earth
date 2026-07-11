---
layout: "../../../layouts/GuideLayout.astro"
title: "Connectivité"
description: "Internet, WiFi, 4G/5G, routeurs — comment on reste connecté."
sectionNumber: 4
---
---

## La toile invisible

Nous parlons souvent d'Internet comme s'il s'agissait d'un nuage magique flottant au-dessus de nous, mais la réalité est bien plus terre à terre. La connectivité est le fil invisible qui relie nos vies numériques, et elle repose sur une infrastructure physique massive qui s'étend sur tout le globe.

Lorsque vous envoyez un e-mail, regardez un film en streaming ou chargez une page web, vos données n'apparaissent pas magiquement sur votre écran. Elles voyagent à travers un réseau complexe de câbles, de routeurs et de serveurs.

### Voyage dans le temps (Partie 2) : Le TARDIS du Web

Pour comprendre comment nous en sommes arrivés là, entrons dans notre cabine téléphonique bleue (les fans de Doctor Who comprendront) et remontons le temps. Le World Wide Web a été inventé en 1989 par Tim Berners-Lee, un scientifique britannique au CERN. Il voulait simplement un meilleur moyen pour les scientifiques de partager des informations. Il a créé le premier navigateur web et le premier serveur web. Ce fut le modeste début de quelque chose qui allait changer le monde.

Avance rapide jusqu'à aujourd'hui, et nous sommes passés des modems lents et bruyants à d'immenses câbles à fibre optique reposant au fond des océans. Ces câbles transmettent des informations à l'aide d'impulsions lumineuses, ce qui signifie que vos données voyagent littéralement à la vitesse de la lumière ! Même l'air qui nous entoure est rempli de signaux invisibles, du Wi-Fi aux antennes 5G ultra-rapides.

### Comment les données voyagent réellement

Traçons le chemin réel de vos données. Lorsque vous cliquez sur un lien sur votre ordinateur, la requête voyage vers votre routeur domestique (la "box" que votre fournisseur d'accès à Internet vous a donnée). De là, elle voyage à travers les câbles de votre rue, rejoignant un réseau régional plus vaste géré par votre Fournisseur d'Accès à Internet (FAI).

Votre FAI achemine ensuite cette requête via d'énormes hubs nationaux. Si le site web est hébergé dans un autre pays, vos données peuvent plonger dans l'océan, voyageant à travers ces câbles à fibre optique sous-marins vers un autre continent. Elles atteignent le centre de données (data center) où se trouve le site web, récupèrent les informations et font le trajet de retour — le tout en une fraction de seconde.

<details class="learn-more">
<summary class="learn-more-summary">En savoir plus : DNS et Serveurs</summary>
<div class="learn-more-content">
<p>Lorsque vous tapez le nom d'un site web comme <code>wikipedia.org</code>, les ordinateurs ne savent pas vraiment où cela se trouve. Ils utilisent des adresses IP (comme <code>198.35.26.96</code>). Le <strong>Domain Name System (DNS)</strong> agit comme l'annuaire téléphonique d'Internet, traduisant instantanément le nom lisible par l'homme en adresse IP lisible par la machine afin que votre requête puisse être acheminée vers la bonne destination.</p>
<p>Une fois que votre requête atteint cette adresse IP, elle communique avec un <strong>Serveur</strong> — qui n'est essentiellement qu'un puissant ordinateur fonctionnant 24h/24 et 7j/7 dans un centre de données, dont le seul travail est de "servir" les fichiers du site web vers vous via ces câbles.</p>
</div>
</details>

Ces câbles sous-marins sont les véritables artères d'Internet. Ils sont étonnamment vulnérables ; occasionnellement, un requin essaiera d'en mordre un, ou une ancre coupera accidentellement une connexion !

### L'illusion du sans-fil

Nous aimons nos appareils sans fil, mais l'Internet "sans fil" est surtout une illusion. Lorsque vous utilisez le Wi-Fi ou les réseaux cellulaires (comme la 4G ou la 5G), vos données ne voyagent sans fil que sur le tout dernier kilomètre (ou les derniers mètres). Elles sautent de votre téléphone au routeur ou à l'antenne-relais le plus proche, et de là, elles sont immédiatement rebranchées sur le vaste réseau physique câblé.

Il convient également de noter que les signaux sans fil sont fragiles. Avez-vous déjà remarqué que votre Wi-Fi se déconnecte lorsque vous changez de pièce ? Plus vous êtes loin du routeur, et plus il y a de murs entre vous, plus le signal devient faible et lent.

### Les VPN

Un **VPN (Réseau Privé Virtuel)** crée un "tunnel" sécurisé et chiffré entre votre appareil et un serveur exploité par le service VPN. Lorsque vous naviguez sur le web à l'aide d'un VPN, votre FAI ne peut plus voir exactement quels sites web vous visitez (il ne voit que les données chiffrées allant vers le serveur VPN), et les sites web que vous visitez voient l'adresse IP du VPN plutôt que votre véritable adresse IP personnelle.

Bien que les VPN soient fortement commercialisés comme la solution ultime de confidentialité, il est important de se rappeler que vous ne faites que déplacer votre confiance de votre FAI vers la société VPN. Si le VPN enregistre vos données (logs), votre vie privée est compromise.

### TOR

Si vous avez besoin d'un niveau d'anonymat plus élevé, le **réseau Tor** (The Onion Router) va plus loin. Au lieu de faire passer vos données par un seul serveur VPN, Tor fait rebondir votre trafic chiffré à travers au moins trois serveurs aléatoires gérés par des bénévoles (appelés "nœuds") dans le monde entier avant qu'il n'atteigne sa destination.

Étant donné que chaque nœud ne connaît que l'identité du nœud le précédant immédiatement et de celui le suivant, aucun serveur ne sait à la fois qui vous êtes et quel site web vous visitez. Cela rend extrêmement difficile de retracer l'activité sur Internet jusqu'à l'utilisateur, ce qui fait de Tor un outil vital pour les journalistes, les militants et toute personne nécessitant un strict anonymat.

### Pourquoi c'est important

Il est important de comprendre cette infrastructure physique car elle met en évidence les vulnérabilités et la dynamique des pouvoirs d'Internet. Les entreprises et les gouvernements qui contrôlent ces câbles et ces réseaux ont une influence considérable sur la circulation de l'information. En démystifiant la connectivité, nous réalisons qu'Internet n'est pas un concept abstrait — c'est une machine physique construite par des humains. Et savoir comment elle fonctionne nous aide à militer pour un Internet qui reste ouvert, accessible et résilient pour tous.
