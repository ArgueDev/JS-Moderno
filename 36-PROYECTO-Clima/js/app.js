const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        // Hubo un error
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    // Consultar la API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    const alertaPrevia = document.querySelector('.alerta');

    if (alertaPrevia) {
        alerta.remove();
    }

    // Crear la alerta
    const alerta = document.createElement('DIV');

    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'alerta');

    alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</sapn>
    `;

    container.appendChild(alerta);

    // Eliminar alerta despues de 3segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);

}

function consultarAPI(ciudad, pais) {
    const appId = '5474a450afab8002a62c248b4735a3fc';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner(); // Muestra un spinner de carga

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            
            limpiarHTML();

            if (datos.cod === '404') {
                mostrarError('Ciuadd no existe');
                return;
            }

            // Imprime las respuesta en el HTML
            mostrarClima(datos);
        });
}

function mostrarClima(datos) {
    const { name, main: { temp, temp_max, temp_min } } = datos;

    const temperatura = kelvinACentigrados(temp);
    const temperatura_max = kelvinACentigrados(temp_max);
    const temperatura_min = kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('P');
    nombreCiudad.textContent = `Clima en: ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('P');
    actual.innerHTML = ` ${temperatura} &#8451; `;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('P');
    tempMax.innerHTML = ` MAX: ${temperatura_max} &#8451; `;
    tempMax.classList.add('text-xl');

    const tempMin = document.createElement('P');
    tempMin.innerHTML = ` MIN: ${temperatura_min} &#8451; `;
    tempMin.classList.add('text-xl');

    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner() {
    limpiarHTML();

    const divSpinner = document.createElement('DIV');
    divSpinner.classList.add('spinner');
    divSpinner.innerHTML = `
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    `;

    resultado.appendChild(divSpinner);
}