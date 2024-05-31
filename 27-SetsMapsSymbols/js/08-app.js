const ciudades = ['Londres', 'NewYork', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Christian');
datos.set('profesion', 'Desarrollador Web');

// Entries Iterator
for (let entry of ciudades.entries()) {
    console.log(entry);
}

for (let entry of ordenes.entries()) {
    console.log(entry);
}

for (let entry of datos.entries()) {
    console.log(entry);
}

// Values Iterator
for (let value of ciudades.values()) {
    console.log(value);
}

for (let value of ordenes.values()) {
    console.log(value);
}

for (let value of datos.values()) {
    console.log(value);
}

// Keys Iterator
for (let key of ciudades.keys()) {
    console.log(key);
}

for (let key of ordenes.keys()) {
    console.log(key);
}

for (let key of datos.keys()) {
    console.log(key);
}

// Defautl
for (let ciudad of ciudades) {
    console.log(ciudad);
}

for (let orden of ordenes) {
    console.log(orden);
}

for (let dato of datos) {
    console.log(dato);
}