const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    {nombre: 'Monitor', precio: 1000},
    {nombre: 'Television', precio: 900},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 400}
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.nombre);
}