const cargarJsonArrayBtn = document.querySelector('#cargarJSONArray');
cargarJsonArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarHTML(datos))
        .catch(error => console.log(error))
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado;
        html += `
            <p>Empleado: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Id: ${id}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    });

    contenido.innerHTML = html;
}