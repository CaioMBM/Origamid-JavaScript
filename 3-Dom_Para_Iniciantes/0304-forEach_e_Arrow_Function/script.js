// Exercício
// Mostre no console cada parágrado do site
/*
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((paragrafo) => console.log(paragrafo));
*/

// Mostre o texto dos parágrafos no console
/*
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((paragrafoTetxo) => console.log(paragrafoTetxo.innerText));
*/

// Como corrigir os erros abaixo:
/*
const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);


// Código corrigido
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(() => i++); // Pegadinha, não há erro nesse
*/