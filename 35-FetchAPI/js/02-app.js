const cargarJson = document.querySelector('#cargarJSON');
cargarJson.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';
    fetch(url)
        .then(respuesta => respuesta.json() )
        .then(datos => mostrarHTML(datos) )
        .catch(error => console.log(error) );
}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre }</p>
        <p>Empresa: ${ empresa }</p>
        <p>Id: ${ id }</p>
        <p>Trabajo: ${ trabajo}</p>
    `
}