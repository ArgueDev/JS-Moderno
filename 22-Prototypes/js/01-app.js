const cliente = {
    nombre: 'Christian',
    saldo: 500
}

console.log(cliente);

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const christian = new Cliente('Christian', 400);
console.log(christian);