// Funzione per aggiornare il punteggio
function changeScore(player, change) {
    const scoreDisplay = document.getElementById(`player${player}-score`);
    let score = parseInt(scoreDisplay.textContent);
    score += change;
    scoreDisplay.textContent = score;
}

// Funzione per resettare i punteggi
function resetScores() {
    document.getElementById('player1-score').textContent = 20;
    document.getElementById('player2-score').textContent = 20;
    overtimeCount = 0;
    document.getElementById('overtime-counter').textContent = `Turno Extra: ${overtimeCount}`;
}

// Variabile per tenere traccia dei turni extra
let overtimeCount = 0;

// Funzione per incrementare il contatore dei turni extra
function incrementOvertime() {
    if (overtimeCount < 5) {
        overtimeCount++;
        document.getElementById('overtime-counter').textContent = (overtimeCount < 5) ? `Turno Extra: ${overtimeCount}` : `Ultimo Turno`;
    }
}

// Registra il service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('Service Worker registrato con successo:', registration);
        }).catch(error => {
            console.log('Registrazione del Service Worker fallita:', error);
        });
    });
}