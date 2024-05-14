/** Variales */
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

/** Event Listeners */
eventListeners();

function eventListeners() {
    /** Cuando el usuario agrega un nuevo tweet */
    formulario.addEventListener('submit', agregarTweet);
    /** Cuando el documento esta listo */
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });
}

/** Funciones */
function agregarTweet(e) {
    e.preventDefault();

    /** Textarea donde el usuario escribe */
    const tweet = document.querySelector('#tweet').value;
    
    /** Validacion */
    if (tweet === '') {
        mostrarError('No puede ir vacio el mensaje')
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    /** Agregar los tweets al arreglo */
    tweets = [...tweets, tweetObj];
    
    /** Crear HTML */
    crearHTML();

    /** Reinicar el textarea */
    formulario.reset();

}

/** Mostrar mensaje de error */
function mostrarError(error) {
    const mensaje = document.createElement('P');
    mensaje.textContent = error;
    mensaje.classList.add('error');

    /** Insertarlo en el contenido */
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensaje);

    /** Elimina la alerta despues de 3 segundos */
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}

/** Muestra un listado de los tweets */
function crearHTML() {

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            /** Agregar un boton para eliminar */
            const btnEliminar = document.createElement('A');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            /** Agregar la funcion de eliminar */
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            /** Crear el HTML */
            const li = document.createElement('LI');
            /** Agregar el texto */
            li.innerText = tweet.tweet;
            /** Asignar el boton */
            li.appendChild(btnEliminar);
            /** Insertando en el HTML */
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();

}

/** Agrega los tweets actuales al localStorage */
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

/** Elimina el tweet */
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

/** Limpiar el HTML */
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}