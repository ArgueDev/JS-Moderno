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

const producto4 = {
    nombre: 'Celular',
    precio: 800
}

// .push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

// .unshift agrega al principio de un arreglo
carrito.unshift(producto3);
console.table(carrito);

// Eliminar elemento segun la posicion
carrito.splice(1, 1);
console.table(carrito);

// Eliminar ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);

// Eliminar el primer elemento de un arreglo
carrito.shift();
console.table(carrito);