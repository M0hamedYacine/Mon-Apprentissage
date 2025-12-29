📝 Frontend Mentor - QR Code Component 

Ceci est ma solution au challenge QR Code Component  de Frontend Mentor. Ce projet m'a permis de pratiquer la mise en page de composants isolés et de comprendre comment maintenir une structure visuelle identique sur tous les types d'écrans.


🚀 Le Projet

L'objectif était de reproduire fidèlement une carte de composant en respectant les couleurs, la typographie et surtout l'espacement.
📸 Aperçu
🧠 Ce que j'ai appris
1. La Consistance Visuelle

Ce que j'ai préféré dans ce projet, c'est de découvrir comment créer un composant qui reste identique peu importe la taille de l'écran.

J'ai compris que pour éviter qu'un composant ne se déforme ou ne s'étire de façon étrange sur de très grands écrans, il faut :

    Utiliser une largeur maximale fixe (max-w-[...] en Tailwind).
    Utiliser des unités relatives pour le rembourrage (padding) et les marges.
    Centrer le composant dynamiquement dans le "viewport" (la fenêtre) pour qu'il soit toujours le point focal.

    Note personnelle : C'est gratifiant de voir que peu importe si l'utilisateur est sur un écran 13 pouces ou un moniteur ultra-large, mon composant garde exactement les proportions prévues.

2. Maîtrise de Tailwind CSS

J'ai utilisé des classes arbitraires pour coller précisément au design :

    Gestion des couleurs HSL : bg-[hsl(216,15%,48%)] (sans espaces !).
    Arrondis précis : rounded-xl ou rounded-2xl.

🛠️ Technologies utilisées

    HTML5 : Structure sémantique.
    Tailwind CSS : Stylisation rapide et précise.
    Mobile-first workflow : Pour assurer une base solide.

📖 Comment l'utiliser

    Clone le dépôt.
    Ouvre le fichier index.html dans ton navigateur.