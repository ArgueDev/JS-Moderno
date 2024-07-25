const cliente = 'Christian'

function mostrarCliente() {
    const cliente = 'Pablo'
    console.log(cliente);
}

mostrarCliente()


const obtenerCliente = () => {
    const nombre = 'Mario'

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente2 = obtenerCliente();
cliente2()