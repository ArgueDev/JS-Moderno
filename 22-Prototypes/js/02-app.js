function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const christian = new Cliente('Christian', 400);

function formatearCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const { nombre, saldo, categoria } = empresa;
    return `La Empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(christian));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const argueDev = new Empresa('Aprendamos', 4000, 'Curso en Linea');
console.log(formatearEmpresa(argueDev));