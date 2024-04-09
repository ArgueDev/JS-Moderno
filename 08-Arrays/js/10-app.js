const carrito = [
    {nombre: 'Monitor', precio: 1000},
    {nombre: 'Television', precio: 900},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 400}
]

const nuevoArreglo = carrito.forEach( function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.map( function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArreglo); // Con foreach no se crea un nuevo arreglo
console.log(nuevoArreglo2); // Con map si se puede crear un nuevo arreglo