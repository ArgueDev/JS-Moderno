const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (let pendiente in pendientes) {
    console.log(pendiente);
}

const automovil = {
    modelo: 'Camaron',
    year: 1969,
    motor: '6.0'
}

// for (let auto in automovil) {
//     console.log(automovil[auto]);
// }

for (let [llave, valor] of Object.entries(automovil)) {
    console.log(`${llave}: ${valor}`);
}