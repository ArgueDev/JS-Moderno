const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(paise => {
            console.log(paise);
        })
    }, 1000);
}

mostrarPaises();

nuevoPais('Alemania', mostrarPaises);