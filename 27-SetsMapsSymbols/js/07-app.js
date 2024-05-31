// Generadores

function *crearGenerador() {
    yield 1;
    yield 'Christian';
    yield 3 + 3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador);