// Maps

const cliente = new Map();

cliente.set('nombre', 'Christian');
cliente.set('tipo', 'Gold');
cliente.set('saldo', 3000);

console.log(cliente);

console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));