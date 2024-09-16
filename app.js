let correctAnswer;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCalculation() {
    let terms = getRandomInt(4, 6); // Entre 4 et 6 termes
    let calculation = '';
    let total = 0;

    for (let i = 0; i < terms; i++) {
        let number = getRandomInt(5, 999);
        let operator = (i === 0) ? '' : (Math.random() < 0.5 ? ' + ' : ' - ');
        calculation += operator + number;
        total += (operator === ' - ') ? -number : number;
    }

    document.getElementById('calculation').innerText = calculation;
    correctAnswer = total;
    document.getElementById('result').innerText = '';
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = `Incorrect. La bonne réponse est ${correctAnswer}`;
    }
}

// Génère un premier calcul au chargement
window.onload = generateCalculation;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('Service Worker enregistré avec succès :', registration.scope);
    }, function(err) {
      console.log('Erreur d\'enregistrement du Service Worker :', err);
    });
  }
  