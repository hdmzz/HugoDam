// Fonctions simplifiées pour le carrousel des activités

// Variables pour le contrôle du carrousel
let scrollPosition = 0;
let scrollInterval;
const scrollSpeed = 1; // Vitesse de défilement en pixels
const scrollDelay = 20; // Délai entre chaque mouvement en ms

// Fonction d'initialisation du carrousel
function initCarousel() {
    // Attendre que les cartes soient générées
    setTimeout(() => {
        // Récupérer le conteneur des activités
        const container = document.getElementById('annonce_acti');
        if (!container) return;
        
        // Ajouter la classe pour le style du carrousel
        container.classList.add('carousel');
        
        // Créer le wrapper pour les slides
        const slidesWrapper = document.createElement('div');
        slidesWrapper.className = 'carousel-slides';
        
        // Déplacer les cartes d'activités dans le wrapper
        const cards = container.querySelectorAll('.cart_acti');
        const title = container.querySelector('#titreGrille');
        
        // Garder le titre hors du wrapper
        container.innerHTML = '';
        container.appendChild(title);
        
        // Ajouter toutes les cartes au wrapper
        cards.forEach(card => {
            slidesWrapper.appendChild(card);
        });
        
        // Créer des clones des cartes pour défilement continu
        createClones(slidesWrapper, cards);
        
        // Ajouter le wrapper au conteneur
        container.appendChild(slidesWrapper);
        
        // Démarrer le défilement automatique
        startAutoScroll();
    }, 500); // Attendre que les cartes soient générées
}

// Fonction pour créer des clones pour un défilement infini
function createClones(wrapper, cards) {
    // Cloner chaque carte et l'ajouter à la fin du wrapper
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.classList.add('clone');
        wrapper.appendChild(clone);
    });
}

// Fonction pour démarrer le défilement automatique
function startAutoScroll() {
    // Arrêter l'ancien défilement s'il existe
    if (scrollInterval) {
        clearInterval(scrollInterval);
    }
    
    // Démarrer le défilement
    scrollInterval = setInterval(() => {
        // Récupérer le wrapper
        const wrapper = document.querySelector('.carousel-slides');
        if (!wrapper) return;
        
        // Incrémenter la position de défilement
        scrollPosition += scrollSpeed;
        
        // Appliquer la transformation
        wrapper.style.transform = `translateX(-${scrollPosition}px)`;
        
        // Vérifier si on a défilé toutes les cartes originales
        const originalCards = wrapper.querySelectorAll('.cart_acti:not(.clone)');
        if (originalCards.length === 0) return;
        
        // Calculer la largeur totale des cartes originales
        const cardWidth = originalCards[0].offsetWidth + 20; // 20px est la marge
        const totalOriginalWidth = cardWidth * originalCards.length;
        
        // Si on a défilé toutes les cartes originales, revenir au début mais sans saut visible
        if (scrollPosition >= totalOriginalWidth) {
            scrollPosition = 0;
            wrapper.style.transition = 'none'; // Désactiver la transition
            wrapper.style.transform = `translateX(0)`;
            
            // Réactiver la transition après un bref délai
            setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s ease';
            }, 10);
        }
    }, scrollDelay);
}

// Initialiser le carrousel après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    // Attendre que cards.js ait généré les cartes
    setTimeout(() => {
        initCarousel();
    }, 100);
});
