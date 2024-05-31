// Symbols

const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
    console.log('Son Iguales');
} else {
    console.log('Son Diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Christian';
persona[apellido] = 'Arguello'
persona.tipoCliente = 'Gold';
persona.saldo = 1000;

console.log(persona);

// Las propiedades que utlizan un symbol no son iterables
for (let i in persona) {
    console.log(i);
}