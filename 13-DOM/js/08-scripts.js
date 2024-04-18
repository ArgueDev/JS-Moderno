// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);

const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo heading desde trasversing the dom'
console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0].src);

// Traversing de hijo al padre
// console.log(card.parentNode);
// console.log(card.parentElement.parentElement);

// console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);