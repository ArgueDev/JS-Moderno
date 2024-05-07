/** Variables */
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

/** Contenedor para los resultados */
const resultado = document.querySelector('#resultado');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

/** Generar un objeto con la busqueda */
const datoBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

/** Eventos */
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los autos al cargar
    llenarSelect(); // LLena las opciones de año
});

/** Event Listeners para los selects de busquedas */
marca.addEventListener('change', (e) => {
    datoBusqueda.marca = e.target.value;
    filtrarAuto();
    
});
year.addEventListener('change', (e) => {
    datoBusqueda.year = e.target.value;
    filtrarAuto();
    
});
minimo.addEventListener('change', (e) => {
    datoBusqueda.minimo = e.target.value;
    filtrarAuto();
    
});
maximo.addEventListener('change', (e) => {
    datoBusqueda.maximo = e.target.value;
    filtrarAuto();
    
});
puertas.addEventListener('change', (e) => {
    datoBusqueda.puertas = e.target.value;
    filtrarAuto();
    
});
transmision.addEventListener('change', (e) => {
    datoBusqueda.transmision = e.target.value;
    filtrarAuto();
    
});
color.addEventListener('change', (e) => {
    datoBusqueda.color = e.target.value;
    filtrarAuto();
});


/** Funciones */
function mostrarAutos(autos) {
    
    limpiarHTML(); // Eliminar el HTML previo

    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} Puertas - ${transmision} - ${precio} - ${color}
        `;

        /** Insertar HTML */
        resultado.appendChild(autoHTML);
    });
}

/** Limpiar HTML */
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

/** Genera los años del select */
function llenarSelect() {
    for (let i = maxYear; i >= minYear; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

/** Filtra en base a la busqueda */
function filtrarAuto() {
    const resultado = autos.filter(filterMarca)
        .filter(filterYear)
        .filter(filterMinimo)
        .filter(filterMaximo)
        .filter(filterPuerta)
        .filter(filterTransmision)
        .filter(filterColor);
    
        
    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResult();
    }
}

function noResult() {

    limpiarHTML();

    const noResult = document.createElement('DIV');
    noResult.classList.add('alerta', 'error');
    noResult.textContent = 'No hay Resultados, intenta con otras opciones';

    resultado.appendChild(noResult);
}

function filterMarca(auto) {
    const { marca } = datoBusqueda;

    if (marca) {
        return auto.marca === marca;
    }

    return auto;
}

function filterYear(auto) {
    const { year } = datoBusqueda;

    if (year) {
        return auto.year === parseInt(year);
    }

    return auto;
}

function filterMinimo(auto) {
    const { minimo } = datoBusqueda;
    if (minimo) {
        return auto.precio >= minimo; 
    }

    return auto;
}

function filterMaximo(auto) {
    const { maximo } = datoBusqueda;

    if (maximo) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filterPuerta(auto) {
    const { puertas } = datoBusqueda;

    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }

    return auto;
}

function filterTransmision(auto) {
    const { transmision } = datoBusqueda;

    if (transmision) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filterColor(auto) {
    const { color } = datoBusqueda;

    if (color) {
        return auto.color === color;
    }

    return auto;
}