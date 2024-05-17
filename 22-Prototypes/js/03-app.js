function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold'
    } else if (this.saldo > 5000) {
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }

    return tipo;

}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function (retira) {
    this.saldo -= retira;
}

const carlos = new Cliente('Carlos', 4000);
console.log(carlos);

console.log(carlos.tipoCliente());
console.log(carlos.nombreClienteSaldo());
carlos.retirarSaldo(500);
console.log(carlos.nombreClienteSaldo());