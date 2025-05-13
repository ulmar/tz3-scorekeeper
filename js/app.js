// Variabili di stato
let scores = [0, 0];
let overtimeCount = 0;
let overtimeVisible = false;

// Aggiorna il punteggio
function updateScore(player, value) {
    const index = player - 1;
    scores[index] = Math.max(0, scores[index] + value);
    document.getElementById(`score${player}`).textContent = scores[index];
}

// Reset partita
function resetGame() {
    if (confirm("Sei sicuro di voler resettare la partita?")) {
        scores = [0, 0];
        document.getElementById('score1').textContent = '0';
        document.getElementById('score2').textContent = '0';
        document.getElementById('overtimeSection').classList.remove("show");
        resetOvertime();
        /*
        if(overtimeVisible){
            toggleOvertime();
        }
        */
    }
}

// Gestione Overtime
/*
function toggleOvertime() {
    overtimeVisible = !overtimeVisible;
    const section = document.getElementById('overtimeSection');
    const btn = document.getElementById('toggleOvertimeBtn');
    
    if (overtimeVisible) {
        section.style.display = 'block';
        btn.textContent = 'Nascondi Overtime';
    } else {
        section.style.display = 'none';
        btn.textContent = 'Overtime';
    }
}
*/
function incrementOvertime() {
    if (overtimeCount < 5) {
        overtimeCount++;
        updateOvertimeDisplay();
        
        if (overtimeCount === 4) {
            document.getElementById('overtimeMessage').textContent = "Prossimo turno: ultimo turno!";
        } else if (overtimeCount === 5) {
            document.getElementById('overtimeMessage').textContent = "ULTIMO TURNO!";
        }
    }
}

function resetOvertime() {
    overtimeCount = 0;
    document.getElementById('overtimeMessage').textContent = "";
    updateOvertimeDisplay();
}

function updateOvertimeDisplay() {
    document.getElementById('overtimeCounter').textContent = overtimeCount;
    const progress = (overtimeCount / 5) * 100;
    document.getElementById('overtimeProgress').style.width = `${progress}%`;
}

// Installa la PWA
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    // Puoi mostrare un pulsante di installazione qui se vuoi
    console.log('PWA installabile');
});