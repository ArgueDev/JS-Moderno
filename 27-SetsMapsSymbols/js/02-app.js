// WeakSet

const weakSet = new WeakSet();

const cliente = {
    nombre: 'Christian',
    saldo: 300
}

weakSet.add(cliente);
console.log(weakSet.has(cliente));

console.log(weakSet);