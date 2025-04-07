// Primeiro parâmentro (callback) do forEach()
/*
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
  // console.log(item, index, array)
});
*/

// Transformando um array-like em um array
/*
const titulos = document.getElementsByClassName('titulo');
// console.log(titulos);
const titulosArray = Array.from(titulos);
// console.log(titulosArray);

// Exibindo os itens do array
titulosArray.forEach(function(item, index, array){
  console.log(item, index, array);
});
*/

// Arrow funcion
/*
imgs.forEach((argumento) => {
  console.log(argumento)
});
*/

// Algumas particularidades da arrow function
/*
const imgs = document.querySelectorAll('img');

// 1) Se tiver apenas 1 argumento, não precisa de parênteses
imgs.forEach(item => {
console.log(item);
});

// 2) Se não tiver argumento, precisa de parênteses
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

// 3) Se tiver apenas uma linha de código
let c = 0;
imgs.forEach(() => console.log(c++));

// 4) Se tiver multiplos parâmetros, precisa de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});
*/