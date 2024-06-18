const abrirbtn = document.querySelector('#abrir-pantalla-completa');
const salirbtn = document.querySelector('#salir-pantalla-completa');

abrirbtn.addEventListener('click', pantallaCompleta);
salirbtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}