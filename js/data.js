// Données pour le portfolio de développeur

// Données pour les compétences principales
const mainSkills = [
    {
        id: "frontend",
        name: "Développement Frontend",
        description: "Expertise en HTML5, CSS3 et JavaScript",
        stars: 5,
        image: "reactanguvue.png"
    },
    {
        id: "backend",
        name: "Développement Backend",
        description: "Node.js, Express et bases de données",
        stars: 5,
        image: "node-js.svg"
    },
    {
        id: "C / C++",
        name: "Developpement C / C++",
        description: "OpenGL, Multi-threading, gestion de la memoire, réseau",
        stars: 5,
        image: "ISO_C++_Logo.jpg"
    },
    {
        id: "docker",
        name: "Docker",
        description: "Orchestration de conteneurs docker",
        stars: 4,
        image: "docker.svg"
    },
    {
        id: "Python",
        name: "Python",
        description: "Tensorflow, OpenCV, Django FastApi",
        stars: 3,
        image: "python.png"
    },
    {
        id: "powershell",
        name: "Powershell",
        description: "Windows Powershell",
        stars: 4,
        image: "powershell.svg"
    },
    {
        id: "bash",
        name: "Bash",
        description: "Script Bash",
        stars: 4,
        image: "bash.svg"
    },
];

// Données pour les projets récents
const recentProjects = [
    {
        id: "SunnyCi",
        name: "SunnyCi",
        description: "Localiser une terrasse au soleil !",
        image: "Sunnycimapbox.png",
        url: "https://hdmzz.github.io/sunnyCiMapbox/"
    },
    {
        id: "ign",
        name: "Visualisation 3D",
        description: "Interface de visualisation de données géographiques",
        image: "sunnyciign.png",
        url: "https://hdmzz.github.io/DEMVis/"
    },
    {
        id: "toralizer",
        name: "Toralizer",
        description: "Une commande permettant de faire passer n’importe quelle commande Linux par le réseau TOR.",
        image: "Tor-logo-2011-flat.svg.png",
        gitUrl: "https://github.com/hdmzz/toralizer.git"
    },
    {
        id: "honey",
        name: "Honey Pot",
        description: "Honey Pot ecrit en python WIP",
        image: "honey.png",
        gitUrl: "https://github.com/hdmzz/honeypot.git"
    },
    {
        id: "ray",
        name: "Raytracer C++",
        description: "Un simple raytracer ecrit en C++",
        image: "raytracer.jpg",
        gitUrl: "https://github.com/hdmzz/raytracer.git"
    },
    {
        id: "Réseaux de neurones",
        name: "Réseaux de neurones",
        description: "Réseaux de neurones en C",
        image: "nn_sbg.jpeg"
        
    },
    {
        id: "Self Driving Car",
        name: "Self Driving Car",
        description: "Réseau de neurones en typescript et visualistaion 3d sans librairies",
        url: "https://hdmzz.github.io/selfDrivingCar/",
        image: "nn_sbg.jpeg",
    },
    {
        id: "Xor",
        name: "Xor Linked List",
        description: "Implémentation d'un Xor linked list",
        url: "https://github.com/hdmzz/xor_linked_list.git",
        image: "XOR-Linked-List-Banner.png",
        gitUrl: "https://github.com/hdmzz/xor_linked_list.git"
    },
];

// Données pour les projets en vitrine (pour le carrousel)
const showcaseProjects = [
    {
        id: "SunnyCi",
        name: "SunnyCi",
        description: "Localiser une terrasse au soleil !",
        image: "Sunnycimapbox.png",
        url: "https://hdmzz.github.io/sunnyCiMapbox/",
        technologies: "JavaScript, MapBox, API géographiques",
        gridId: "carte_acti_sunnyci"
    },
    {
        id: "ign",
        name: "Visualisation 3D",
        description: "Interface de visualisation de données géographiques",
        image: "sunnyciign.png",
        url: "https://hdmzz.github.io/DEMVis/",
        technologies: "JavaScript 3D, WebGL, APIs cartographiques",
        gridId: "carte_acti_ign"
    },
    {
        id: "toralizer",
        name: "Toralizer",
        description: "Une commande permettant de faire passer n'importe quelle commande Linux par le réseau TOR.",
        image: "Tor-logo-2011-flat.svg.png",
        gitUrl: "https://github.com/hdmzz/toralizer.git",
        technologies: "Linux, TOR, Shell",
        gridId: "carte_acti_toralizer"
    },
    {
        id: "honey",
        name: "Honey Pot",
        description: "Honey Pot ecrit en python WIP",
        image: "honey.png",
        gitUrl: "https://github.com/hdmzz/honeypot.git",
        technologies: "Python, Cybersécurité",
        gridId: "carte_acti_honey"
    },
    {
        id: "ray",
        name: "Raytracer C++",
        description: "Un simple raytracer ecrit en C++",
        image: "raytracer.jpg",
        gitUrl: "https://github.com/hdmzz/raytracer.git",
        technologies: "C++, Computer Graphics",
        gridId: "carte_acti_ray"
    },
    {
        id: "Réseaux de neurones",
        name: "Réseaux de neurones",
        description: "Réseaux de neurones en C",
        image: "nn_sbg.jpeg",
        technologies: "C, Machine Learning, Neural Networks",
        gridId: "carte_acti_nn"
    }
];
