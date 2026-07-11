// guideData.js — Ordered list of guide sections + extras for both languages
const guideData = {
  en: [
    { number: 1,  slug: "01-introduction",        title: "Introduction",                   description: "Why understanding our digital tools matters — and what this guide is about." },
    { number: 2,  slug: "02-hardware",            title: "Hardware",                       description: "Computers past and present: from mainframes to Raspberry Pi." },
    { number: 3,  slug: "03-distribution",        title: "Operating Systems",             description: "The distribution worlds: Windows, macOS, and Linux." },
    { number: 4,  slug: "04-connectivity",        title: "Connectivity",                   description: "Internet, WiFi, 4G/5G, routers — how we stay connected." },
    { number: 5,  slug: "05-phones",              title: "Smartphones",                    description: "The most powerful computer you carry every day." },
    { number: 6,  slug: "06-connected-world",     title: "The Connected World",            description: "Smart TVs, tablets, IoT devices — tech in every corner of life." },
    { number: 7,  slug: "07-sustainable-tech",    title: "Sustainable Tech",               description: "Avoid overkill, repair, FabLabs, Fairphone — save the planet and your wallet." },
    { number: 8,  slug: "08-privacy-history",     title: "Privacy: A History",             description: "Snowden, data breaches, surveillance — major events that shaped digital rights." },
    { number: 9,  slug: "09-software",            title: "Software & FOSS",                description: "Free and open-source software, privacy-respecting apps, Linux." },
    { number: 10, slug: "10-networking",          title: "Networking & Security",          description: "VPN, Tailnet, DNS, antivirus, adblockers — protecting your connection." },
    { number: 11, slug: "11-self-hosting",        title: "Self-Hosting",                   description: "Docker, Raspberry Pi, and taking control of your data." },
    { number: 12, slug: "12-information-media",   title: "Information & Media",            description: "How information spreads, media ownership, detecting bias." },
    { number: 13, slug: "13-ai-basics",           title: "AI Basics",                      description: "Machine learning, LLMs, OCR, agentic AI — the fundamentals." },
    { number: 14, slug: "14-ai-philosophy",       title: "AI & Philosophy",                description: "Conscious usage, company ethics, and protecting your data from AI." },
    { number: 15, slug: "15-conclusion",          title: "Conclusion",                     description: "Why I wrote this — and what you can do next." },
  ],
  fr: [
    { number: 1,  slug: "01-introduction",        title: "Introduction",                   description: "Pourquoi comprendre nos outils numériques est essentiel — et de quoi parle ce guide." },
    { number: 2,  slug: "02-hardware",            title: "Le Hardware",                    description: "Les ordinateurs d'hier et d'aujourd'hui : du mainframe au Raspberry Pi." },
    { number: 3,  slug: "03-distribution",        title: "Systèmes d'Exploitation",        description: "Le monde des distributions : Windows, macOS et Linux." },
    { number: 4,  slug: "04-connectivity",        title: "Connectivité",                   description: "Internet, WiFi, 4G/5G, routeurs — comment on reste connecté." },
    { number: 5,  slug: "05-phones",              title: "Les Smartphones",                description: "L'ordinateur le plus puissant que vous transportez chaque jour." },
    { number: 6,  slug: "06-connected-world",     title: "Le Monde Connecté",              description: "Smart TV, tablettes, objets connectés — la tech dans chaque recoin de la vie." },
    { number: 7,  slug: "07-sustainable-tech",    title: "Tech Durable",                   description: "Éviter l'overkill, réparer, FabLabs, Fairphone — pour la planète et votre portefeuille." },
    { number: 8,  slug: "08-privacy-history",     title: "Vie Privée : Histoire",          description: "Snowden, fuites de données, surveillance — les événements qui ont façonné les droits numériques." },
    { number: 9,  slug: "09-software",            title: "Logiciel & FOSS",                description: "Logiciels libres et open-source, applications respectueuses de la vie privée, Linux." },
    { number: 10, slug: "10-networking",          title: "Réseau & Sécurité",              description: "VPN, Tailnet, DNS, antivirus, bloqueurs de pubs — protéger sa connexion." },
    { number: 11, slug: "11-self-hosting",        title: "Auto-hébergement",               description: "Docker, Raspberry Pi et la reprise en main de vos données." },
    { number: 12, slug: "12-information-media",   title: "Information & Médias",           description: "Comment l'information circule, qui possède les médias, détecter les biais." },
    { number: 13, slug: "13-ai-basics",           title: "Les Bases de l'IA",              description: "Machine learning, LLM, OCR, IA agentique — les fondamentaux." },
    { number: 14, slug: "14-ai-philosophy",       title: "IA & Philosophie",               description: "Usage conscient, éthique des entreprises et protection de vos données face à l'IA." },
    { number: 15, slug: "15-conclusion",          title: "Conclusion",                     description: "Pourquoi j'ai écrit tout ça — et ce que vous pouvez faire ensuite." },
  ],
  // Extras — appendices outside the main 15-chapter flow
  extras: {
    en: [
      { slug: "Extra-1-building-a-website",  title: "Building a Website",    description: "How I built this site with Astro — and how you can too." },
      { slug: "Extra-2-tailscale-setup",     title: "Tailscale Setup",       description: "Setting up a private mesh network with Tailscale." },
      { slug: "Extra-3-remote-gaming",       title: "Remote Gaming",         description: "Using Tailscale to play games from your PC anywhere." },
    ],
    fr: [
      { slug: "Extra-1-building-a-website",  title: "Créer un Site Web",     description: "Comment j'ai construit ce site avec Astro — et comment vous pouvez faire pareil." },
      { slug: "Extra-2-tailscale-setup",     title: "Configurer Tailscale",  description: "Mettre en place un réseau privé maillé avec Tailscale." },
      { slug: "Extra-3-remote-gaming",       title: "Jeu à Distance",        description: "Utiliser Tailscale pour jouer depuis votre PC n'importe où." },
    ],
  },
  news: {
    en: [
      { slug: "News-1-chat-control",         title: "Chat control",          description: "UE wants to instaure Chat control." },
      { slug: "News-2-ID-online",            title: "Online ID",             description: "The push for digital identity online." },
      { slug: "News-3-City-surveillance",    title: "City Surveillance",     description: "Increasing cameras and surveillance in modern cities." }
    ],
    fr: [
      { slug: "News-1-chat-control",         title: "Surveillance des messageries",    description: "L'UE veut instaurer le contrôle des conversations." },
      { slug: "News-2-ID-online",            title: "Identité en ligne",     description: "La poussée vers l'identité numérique en ligne." },
      { slug: "News-3-City-surveillance",    title: "Surveillance urbaine",  description: "Augmentation des caméras et de la surveillance dans les villes modernes." }
    ]
  }
};

export default guideData;
