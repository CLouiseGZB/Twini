// Variables globales
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Fonction pour gérer les animations d'entrée et de sortie
function setActiveItem(newIndex) {
    const oldIndex = currentIndex; // Index précédent
    const direction = newIndex > oldIndex ? 'right' : 'left'; // Déterminer la direction (droite ou gauche)

    // Supprime la classe active de l'ancien élément et ajoute la classe de sortie
    items[oldIndex].classList.remove('active');
    items[oldIndex].classList.add(`exit-${direction}`);

    // Quand l'animation de sortie est terminée, supprime les classes de sortie
    items[oldIndex].addEventListener(
        'transitionend',
        function removeExitClass() {
            items[oldIndex].classList.remove(`exit-${direction}`);
            items[oldIndex].removeEventListener('transitionend', removeExitClass);
        }
    );

    // Active le nouvel élément
    items[newIndex].classList.add('active');
    currentIndex = newIndex; // Mettre à jour l'index actuel
}

// Fonction pour passer à l'élément suivant
function nextItem() {
    const newIndex = (currentIndex + 1) % totalItems;
    setActiveItem(newIndex);
}

// Fonction pour passer à l'élément précédent
function prevItem() {
    const newIndex = (currentIndex - 1 + totalItems) % totalItems;
    setActiveItem(newIndex);
}

// Gestion des clics sur les flèches
document.querySelector('.carousel-controls .next').addEventListener('click', nextItem);
document.querySelector('.carousel-controls .prev').addEventListener('click', prevItem);


setInterval(nextItem, 5000); // Changer l'élément actif toutes les 5 secondesf

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.partenaires div');
    let currentIndex = 0;

    setInterval(() => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }, 2000);
});
