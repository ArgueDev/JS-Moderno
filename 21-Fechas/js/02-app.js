/** https://momentjs.com/ */

const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM D YYYY h:mm:ss a'));

console.log(moment().add(1, 'days').calendar());