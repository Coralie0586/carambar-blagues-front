// carambar-blagues-front/script.js
document.addEventListener('DOMContentLoaded', () => {
    const getJokeButton = document.getElementById('get-joke-button');
    const jokeQuestion = document.getElementById('joke-question');
    const jokeAnswer = document.getElementById('joke-answer');

   // mon URL Render
    const API_URL = 'https://carambar-blagues-api.onrender.com/api/v1/blagues/random';

    const fetchJoke = async () => {
        jokeQuestion.textContent = 'Chargement de la blague...';
        jokeAnswer.textContent = ''; // Cache la réponse pendant le chargement

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            const data = await response.json();
            jokeQuestion.textContent = data.question;
            jokeAnswer.textContent = data.answer;
        } catch (error) {
            console.error('Erreur lors de la récupération de la blague:', error);
            jokeQuestion.textContent = 'Oups ! Impossible de récupérer une blague pour l\'instant.';
            jokeAnswer.textContent = 'Vérifiez la console pour plus de détails.';
        }
    };

    // Charge une blague au chargement initial de la page
    fetchJoke();

    // Attache l'événement au bouton
    getJokeButton.addEventListener('click', fetchJoke);
});