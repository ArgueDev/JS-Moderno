const carrito = [
    {nombre: 'Monitor', precio: 1000},
    {nombre: 'Television', precio: 900},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 400}
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

carrito.forEach( function (producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});