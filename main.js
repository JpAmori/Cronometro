let mileseconds = 000;
let seconds = 00;
let minutes = 00;
let hours = 00;

var interval;

function clearVisor(){
    document.getElementById("mileseconds").innerText = String(mileseconds).padStart(3, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
}

function start() {
    cont();
    interval = setInterval(cont, 1);
}

function pause() {
    clearInterval(interval);
}

function reset() {
    window.alert("Você resetou o contador em: " +document.getElementById('watch').innerText);
    clearInterval(interval);
    mileseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearVisor();
}

function cont() {
    mileseconds++;
    clearVisor()
    if (mileseconds == 1000 ) {
        mileseconds = 0;
        seconds++;
        clearVisor()
    }
    if (seconds == 60) {
        minutes++;
        seconds = 0;
        clearVisor()
    }
    if (minutes == 60) {
        hours++;
        minutes = 0;
        clearVisor()
    }
}

const starter = document.getElementById("click").addEventListener('click', start)
const pauser = document.getElementById("stop").addEventListener('click', pause)
const clear = document.getElementById("remove").addEventListener('click', reset)