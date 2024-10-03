// Probar 2 valores

function suma(a, b) {
    return a + b;
}

let resultado = suma(1, 3);
let esperado = 3;

if (resultado !== esperado) {
    console.error(`El resultado ${resultado} es diferente a lo esperado, la prueba no paso`);
} else {
    console.log('La prueba paso correctamente');
}