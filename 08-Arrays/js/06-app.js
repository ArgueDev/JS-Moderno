const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor',
    precio: 300
}

const producto2 = {
    nombre: 'Tablet',
    precio: 200
}

const producto3 = {
    nombre: 'Teclado',
    precio: 400
}

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);