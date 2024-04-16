// switch case

const metodoPago = 'cheque';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no has selecionado un metodo de pago o metodo no soportado');
        break;
}