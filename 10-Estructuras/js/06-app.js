const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si eres usuario y puedes pagar');
} else if (!usuario) {
    console.log('Crea una cuenta o inica sesion');
} else if (!puedePagar) {
    console.log('Fondos insuficientes');
} else {
    console.log('No puedes comprar');
}