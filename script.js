// script.js

// Select all recipe cards
const recipeCards = document.querySelectorAll('.recipe-card');

// Select the modal and its content
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);

// Close modal when clicking outside of it
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Prevent modal from closing when clicking inside the modal content
modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Add click event to each recipe card
recipeCards.forEach(card => {
    card.addEventListener('click', () => {
        const recipeTitle = card.querySelector('h3').textContent;
        const recipeDescription = card.querySelector('p').textContent;
        const recipeImage = card.querySelector('img').src;

        // Populate modal content
        modalContent.innerHTML = `
            <span class="close-modal">&times;</span>
            <img src="${recipeImage}" alt="${recipeTitle}">
            <h2>${recipeTitle}</h2>
            <p>${recipeDescription}</p>
            <a href="#" class="btn">View Full Recipe</a>
        `;

        // Display the modal
        modal.style.display = 'flex';

        // Close modal when the close button is clicked
        const closeModal = modalContent.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
});