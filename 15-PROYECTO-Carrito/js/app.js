/** Variables */
const carrito = document.querySelector('#carrito');
const contenedorcarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    /** Agregar un curso presionando "Agregar al Carrito" */
    listaCursos.addEventListener('click', agregarCurso);

    /** Elimina cursos del carrito */
    carrito.addEventListener('click', eliminarCurso);

    /** vaciar carrito */
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    });
}


/** Funciones */
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

/** Elimina un curso del carrito */
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        /** Elimina del arregloCarrito por el data-id */
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
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

    /** Revisa si un elemento ya existe en el carrito */
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        /** Actualizamos la cantidad */
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso
            } else {
                return curso;
            }
        });

        articulosCarrito = [...cursos];

    } else {
        /** Agrega elementos al arreglo de carrito */
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    // console.log(articulosCarrito);

    carritoHTML();
}

/** Muestra el carrito de compras en el html */
function carritoHTML() {
    /** Limpiar el HTML */
    limpiarHTML();

    /** Recorre el carrito y genera el HTML */
    articulosCarrito.forEach(curso => {
        const { imagen, nombre, precio, cantidad, id } = curso;

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${nombre}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        /** Agrega el HTML del carrito en el tbody */
        contenedorcarrito.appendChild(row);
    });
}

/** Elimina los cursos del tbody */
function limpiarHTML() {
    /** Forma lenta */
    // contenedorcarrito.innerHTML = '';

    while (contenedorcarrito.firstChild) {
        contenedorcarrito.removeChild(contenedorcarrito.firstChild);
    }

}