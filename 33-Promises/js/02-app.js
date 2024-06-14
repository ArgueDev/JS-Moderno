const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregando: ${pais}`);
    callback();
}

function mostrarPais() {
    console.log(paises);
}

function iniciarCallBackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPais);

        setTimeout(() => {
            nuevoPais('Francia', mostrarPais)
        }, 3000);
    }, 3000);
}

iniciarCallBackHell();