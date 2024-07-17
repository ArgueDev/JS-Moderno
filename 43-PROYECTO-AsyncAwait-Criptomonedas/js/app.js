const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}


// Crear un promise
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomoneda();

    formulario.addEventListener('submit', submitFormulario);

    criptomonedasSelect.addEventListener('change', leerValor)
    monedaSelect.addEventListener('change', leerValor)
});

async function consultarCriptomoneda() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(resultado => obtenerCriptomonedas(resultado.Data))
    //     .then(criptomonedas => selectCriptomonedas(criptomonedas))
    
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptomonedas(criptomonedas);

    } catch (error) {
        console.error(error);
    }
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    })
}

function leerValor(e) {
    e.preventDefault();

    objBusqueda[e.target.name] = e.target.value;

}

function submitFormulario(e) {
    e.preventDefault();

    // Validar
    const { moneda, criptomoneda } = objBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    // Consultar la API con los resultados
    consultarAPI();
}

function mostrarAlerta(mensaje) {
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('error');
    
        // Mensaje de error
        divMensaje.textContent = mensaje;
    
        formulario.appendChild(divMensaje);
    
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }

}

async function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(cotizacion => {
    //         mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    //     })
    
    try {
        const respuesta = await fetch(url);
        const cotizacion = await respuesta.json();
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    } catch (error) {
        console.error(error);
    }
}

function mostrarSpinner() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');
    spinner.innerHTML =
        `
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        `;
    
    resultado.appendChild(spinner);
}

function mostrarCotizacionHTML(cotizacion) {

    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML =
        `
            El Precio es: <span>${PRICE}</span>
        `;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML =
        `
            Precio mas alto del dia: <span>${HIGHDAY}</span>
        `;
    
    const precioBajo = document.createElement('P');
    precioBajo.innerHTML =
        `
            Precio mas bajo del dia: <span>${LOWDAY}</span>
        `;
    
    const variaciones = document.createElement('P');
    variaciones.innerHTML =
        `
            Variacion ultima 24 horas: <span>${CHANGEPCT24HOUR}%</span>
        `;
    
    const ultimaActualizacion = document.createElement('P');
    ultimaActualizacion.innerHTML =
        `
            Utlima Actualizacion: <span>${LASTUPDATE}</span>
        `;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(variaciones);
    resultado.appendChild(ultimaActualizacion);
}