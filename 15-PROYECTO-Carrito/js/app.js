/** Variables */
const carrito = document.querySelector('#carrito');
const contenedorcarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();

function cargarEventListeners() {
    /** Agregar un curso presionando "Agregar al Carrito" */
    listaCursos.addEventListener('click', agregarCurso);
}


/** Funciones */
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

/** Lee el contenido del HTML al que le dimos click y extrae la informacion del curso */
function leerDatosCurso(curso) {
    /** Crear un objeto con el contenido del curso actual */
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCurso);
}