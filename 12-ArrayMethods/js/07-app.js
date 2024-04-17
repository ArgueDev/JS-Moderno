const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];

const meses3 = meses.concat(meses2);

console.log(meses3);

const resultado = [...meses, ...meses2];
console.log(resultado);