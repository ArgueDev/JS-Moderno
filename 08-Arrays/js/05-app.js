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

// .push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: 'Teclado',
    precio: 400
}

carrito.unshift(producto3);

console.table(carrito);