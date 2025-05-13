// Fonctions pour générer les cartes du portfolio

// Fonction pour générer les étoiles de notation
function generateStars(count) {
    let starsHTML = '';
    // Afficher uniquement le nombre d'étoiles spécifié
    for (let i = 1; i <= count; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    return starsHTML;
}

// Fonction pour générer les cartes des compétences principales
function generateMainSkillsCards() {
    const containerElement = document.querySelector('.skills-list');
    containerElement.innerHTML = '';

    mainSkills.forEach(skill => {
        // Déterminer le chemin de l'image en fonction de l'ID de la compétence
        const imagePath = `images/4_small/${skill.image}`;
            
        // Générer les étoiles seulement si le champ stars existe
        const starsHTML = skill.stars ? `
            <div class="skill-rating">
                <span>
                    ${generateStars(skill.stars)}
                </span>
            </div>
        ` : '';
            
        const cardHTML = `
            <article class="skill-card">        		
                <a href="#${skill.id}" class="skill-link" onclick="showSkillDetails('${skill.id}')">
                    <div class="skill-image-container">
                        <div id="${skill.id}" class="skill-image" style="background-image: url(${imagePath})">
                        </div>
                    </div>
                    <div class="skill-content">
                        <div class="text-overflow">
                            <h3 class="card-title">${skill.name}</h3>
                            <p class="card-description">${skill.description}</p>
                        </div>
                        ${starsHTML}
                    </div>
                </a>
            </article>
        `;
        containerElement.innerHTML += cardHTML;
    });
}

// Fonction pour générer les cartes des projets récents
function generateRecentProjectCards() {
    const containerElement = document.querySelector('.projects-grid');
    containerElement.innerHTML = '';

    recentProjects.forEach(project => {
        const cardHTML = `
            <article class="project-card">
                <a href="#project-${project.id}" onclick="showProjectDetails('${project.id}')">
                    <div class="project-image-container">
                        <div id="${project.id}" class="project-image" style="background-image: url(images/4_small/${project.image})">
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="text-overflow">
                            <h3 class="card-title">${project.name}</h3>
                            <p class="card-description">${project.description}</p>
                        </div>
                    </div>
                </a>
            </article>
        `;
        containerElement.innerHTML += cardHTML;
    });
}

// Fonction pour générer les cartes du portfolio de projets
function generateShowcaseProjectCards() {
    const containerElement = document.querySelector('.carousel-container');
    
    // Conserver le titre existant
    const title = containerElement.querySelector('.section-title');
    
    // Vider le contenu actuel sauf le titre
    containerElement.innerHTML = '';
    containerElement.appendChild(title);

    // Ajouter les projets showcase
    showcaseProjects.forEach(project => {
        const cardHTML = `
            <article class="showcase-card" id="${project.gridId}">
                <a href="#showcase-${project.id}" onclick="showShowcaseDetails('${project.id}')"> 
                    <div id="${project.id}" class="showcase-image" style="background-image: url(images/4_small/${project.image})">
                    </div>
                    <div class="showcase-content">
                        <h3 class="showcase-title">${project.name}</h3>
                        <p class="showcase-description">${project.description}</p>
                        <p class="showcase-technologies"><i class="fas fa-code"></i> ${project.technologies}</p>
                    </div>
                </a>
            </article>
        `;
        containerElement.innerHTML += cardHTML;
    });
}

// Fonctions pour afficher les détails des projets et compétences
function showSkillDetails(skillId) {
    const skill = mainSkills.find(s => s.id === skillId);
    if (skill) {
        // Éviter la redirection par défaut du lien
        event.preventDefault();
        
        // Créer la modal pour les détails
        createModal(
            skill.name,
            `
            <div class="skill-details">
                <div class="detail-image" style="background-image: url(images/4_small/${skill.image})"></div>
                <div class="detail-content">
                    <p>${skill.description}</p>
                    <div class="detail-rating">${generateStars(skill.stars)}</div>
                    <div class="detail-info-box">
                        <h4>Technologies maîtrisées</h4>
                        <ul>
                            <li>HTML5 / CSS3</li>
                            <li>JavaScript / TypeScript</li>
                            <li>Frameworks modernes</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        );
    }
}

function showProjectDetails(projectId) {
    const project = recentProjects.find(p => p.id === projectId);
    if (project) {
        // Éviter la redirection par défaut du lien
        event.preventDefault();
        
        const url = project.url === undefined ? "#" : project.url;
        const githubUrl = project.gitUrl ?? "#";
        // Créer la modal pour les détails
        createModal(
            project.name,
            `
            <div class="project-details">
                <div class="detail-image" style="background-image: url(images/4_small/${project.image})"></div>
                <div class="detail-content">
                    <p>${project.description}</p>
                    <div class="detail-rating">${generateStars(project.stars)}</div>
                    <div class="detail-info-box">
                        <h4>Caractéristiques du projet</h4>
                        <ul>
                            <li>Technologies : JavaScript, HTML, CSS</li>
                            <li>Durée : 3 mois</li>
                            <li>Rôle : Développeur principal</li>
                            <li>Livraison : ${new Date().getFullYear()-1}</li>
                        </ul>
                    </div>
                    <div class="detail-actions">
                        ${url && url !== "#" ? `<a href="${url}" class="btn btn-primary">Voir le site</a>` : ''}
                        ${githubUrl && githubUrl !== "#" ? `<a href="${githubUrl}" class="btn btn-secondary">Voir le code</a>` : ''}
                    </div>
                </div>
            </div>
            `
        );
    }
}

function showShowcaseDetails(projectId) {
    const project = showcaseProjects.find(p => p.id === projectId);
    const url = project.url === undefined ? "#" : project.url;
    const githubUrl = project.gitUrl ?? "#";
    if (project) {
        // Éviter la redirection par défaut du lien
        event.preventDefault();
        
        // Créer la modal pour les détails
        createModal(
            project.name,
            `
            <div class="showcase-details">
                <div class="detail-image" style="background-image: url(images/4_small/${project.image})"></div>
                <div class="detail-content">
                    <p>${project.description}</p>
                    <div class="detail-info-box">
                        <h4>Technologies utilisées</h4>
                        <p><i class="fas fa-code"></i> ${project.technologies}</p>
                    </div>
                    <div class="detail-info-box">
                        <h4>Fonctionnalités principales</h4>
                        <ul>
                            <li>Authentification utilisateur</li>
                            <li>Interface responsive</li>
                            <li>Optimisation des performances</li>
                            <li>Compatibilité cross-browser</li>
                        </ul>
                    </div>
                    <div class="detail-actions">
                        ${url && url !== "#" ? `<a href="${url}" class="btn btn-primary">Démonstration</a>` : ''}
                        ${githubUrl && githubUrl !== "#" ? `<a href="${githubUrl}" class="btn btn-secondary">GitHub</a>` : ''}
                    </div>
                </div>
            </div>
            `
        );
    }
}

// Fonction pour créer une modal
function createModal(title, content) {
    // Supprimer toute modal existante
    const existingModal = document.querySelector('.modal-container');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Créer la structure de la modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = title;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = closeModal;
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = content;
    
    // Assembler la structure
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContainer.appendChild(modalContent);
    
    // Ajouter la modal au document
    document.body.appendChild(modalContainer);
    
    // Empêcher le scroll du body quand la modal est ouverte
    document.body.style.overflow = 'hidden';
    
    // Afficher la modal avec une animation
    setTimeout(() => {
        modalContainer.classList.add('active');
    }, 10);
    
    // Ajouter l'écoute du clic extérieur pour fermer
    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            closeModal();
        }
    });
}

// Fonction pour fermer la modal
function closeModal() {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
        modalContainer.classList.remove('active');
        setTimeout(() => {
            modalContainer.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Fonction d'initialisation qui génère toutes les cartes
function initCards() {
    generateMainSkillsCards();
    generateRecentProjectCards();
    generateShowcaseProjectCards();
}

// Exécuter l'initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initCards);
