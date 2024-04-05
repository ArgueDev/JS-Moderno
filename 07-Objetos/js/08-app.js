"use strict";

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto);

producto.disponible = false;
producto.imagen = 'imagen.jpg';

console.log(producto);
