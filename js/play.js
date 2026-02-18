var medio, play, reiniciar, retrasar, adelantar, silenciar, masVolumen, menosVolumen;

function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '\u25BA'; 
        document.body.style.backgroundColor = '#fff';
    } else {
        medio.play();
        play.value = '||'; 
        document.body.style.backgroundColor = 'grey';
    }
}

function accionReiniciar() {
    medio.currentTime = 0;
    medio.play();
    play.value = '||';
}

function accionRetrasar() {
    medio.currentTime = Math.max(0, medio.currentTime - 5);
}

function accionAdelantar() {   
    medio.currentTime = Math.min(medio.duration, medio.currentTime + 5);
}

function accionSilenciar() {
    if (medio.muted) {
        medio.muted = false;
        silenciar.value = "silenciar";
    } else {
        medio.muted = true;
        silenciar.value = "escuchar";
    }
}

function accionMasVolumen() {
    if (medio.volume < 1) {
        medio.volume = (parseFloat(medio.volume) + 0.1).toFixed(1);
    }
}

function accionMenosVolumen() {
    if (medio.volume > 0) {
        medio.volume = (parseFloat(medio.volume) - 0.1).toFixed(1);
    }
}

function iniciar() {
    // Localizar elementos
    medio = document.getElementById('medio');
    play = document.getElementById('play');
    reiniciar = document.getElementById('reiniciar');
    retrasar = document.getElementById('retrasar');
    adelantar = document.getElementById('adelantar');
    silenciar = document.getElementById('silenciar');
    masVolumen = document.getElementById('masVolumen'); 
    menosVolumen = document.getElementById('menosVolumen'); 

    // Añadir eventos
    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);