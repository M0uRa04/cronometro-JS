const milessegundosElement = document.getElementById('milisegundos')
const segundosElement = document.getElementById('segundos')
const minutosElement = document.getElementById('minutos')

let startTime;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true
        startTime = new Date().getTime();
        updateTimer();
    }
}

function resetTimer() {
    isRunning = false
    startTime = 0
    minutosElement.textContent = formatTime(0);
    segundosElement.textContent = formatTime(0);
    milessegundosElement.textContent = formatTime(0);
}

function updateTimer() {
    if (isRunning) {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;

        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        const miliseconds = elapsedTime % 1000;

        minutosElement.textContent = formatTime(minutes);
        segundosElement.textContent = formatTime(seconds);
        milessegundosElement.textContent = formatTime(miliseconds);

        //setTimeout(updateTimer, 1000)
    }
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
 }

 document.getElementById('botao-iniciar').addEventListener('click', startTimer);
 document.getElementById('botao-zerar').addEventListener('click', resetTimer);
 
 