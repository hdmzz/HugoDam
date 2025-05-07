// Fonctions pour générer les cartes

// Fonction pour générer les étoiles de notation
function generateStars(count) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= count) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else {
            starsHTML += '<i class="fas fa-star grey-star"></i>';
        }
    }
    return starsHTML;
}

// Fonction pour générer les cartes des hébergements populaires
function generatePopularCards() {
    const containerElement = document.querySelector('.lespop');
    containerElement.innerHTML = '';

    popularHotels.forEach(hotel => {
        const cardHTML = `
            <article class="popular">        		
                <a href="#" class="aside_prio">
                    <div class="conteneur_image_pop">
                        <div id="${hotel.id}" class="populaire" style="background-image: url(images/hebergements/4_small/${hotel.image})">
                        </div>
                    </div>
                    <div class="contenu_case_pop">
                        <div class="overflow">
                            <h3 class="titre_carte">${hotel.name}</h3>
                            <p class="commentaire_carte">${hotel.price}</p>
                        </div>
                        <div class="ratings_pop">
                            <span>
                                ${generateStars(hotel.stars)}
                            </span>
                        </div>
                    </div>
                </a>
            </article>
        `;
        containerElement.innerHTML += cardHTML;
    });
}

// Fonction pour générer les cartes des hébergements à Marseille
function generateAccommodationCards() {
    const containerElement = document.getElementById('div_hebergement');
    containerElement.innerHTML = '';

    accommodations.forEach(accommodation => {
        const cardHTML = `
            <article class="hebergementcarte">
                <a href="#" class="hebprio">
                    <div class="contneur_image_hebergement">
                        <div id="${accommodation.id}" class="hebergements" style="background-image: url(images/hebergements/4_small/${accommodation.image})">
                        </div>
                    </div>
                    <div class="hebergment_case_contenue">
                        <div class="overflow">
                            <h3 class="titre_carte">${accommodation.name}</h3>
                            <p class="commentaire_carte">${accommodation.price}</p>
                        </div>
                        <div class="ratings">
                            <span>
                                ${generateStars(accommodation.stars)}
                            </span>
                        </div>
                    </div>
                </a>
            </article>
        `;
        containerElement.innerHTML += cardHTML;
    });
}

// Fonction pour générer les cartes des activités
function generateActivityCards() {
    const containerElement = document.getElementById('annonce_acti');
    
    // Conserver le titre existant
    const title = '<h2 id="titreGrille">Activités à Marseille</h2>';
    
    let cardsHTML = title;

    activities.forEach(activity => {
        const cardHTML = `
            <article class="cart_acti" id="${activity.gridId}">
                <a href="#"> 
                    <div id="${activity.id}" class="activites" style="background-image: url(images/activites/4_small/${activity.image})">
                    </div>
                    <div class="contenue_activites">
                        <h3 class="acti_description">${activity.name}</h3>
                    </div>
                </a>
            </article>
        `;
        cardsHTML += cardHTML;
    });
    
    containerElement.innerHTML = cardsHTML;
}

// Fonction d'initialisation qui génère toutes les cartes
function initCards() {
    generatePopularCards();
    generateAccommodationCards();
    generateActivityCards();
}

// Exécuter l'initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initCards);
