const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;

    if (descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }

});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})

// hay 3 valores posibles

// fulfilled - El promise se cumplio

// rejected - El promise no se cumplio

// pending - No se ha cumplido y tampoco fue rezachado