function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando Clientes...');

        setTimeout(() => {
            resolve('Los Clientes fueron descargados');
        }, 5000);
    })
}

function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando Pedidos...');

        setTimeout(() => {
            resolve('Los Pedidos fueron descargados');
        }, 3000);
    })
}

const app = async () => {
    try {
        // const clientes = await descargarNuevosClientes();
        // console.log(clientes);
        
        // const pedidos = await descargarNuevosPedidos();
        // console.log(pedidos);

        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);

    } catch (error) {
        console.log(error);
    }
}

app();