const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function () {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando';
    };

    recognition.onspeechend = function () {
        salida.textContent = 'Se dejo de grabar';
        recognition.stop();
    };

    recognition.onresult = function (e) {
        console.log(e.result);
    }
}