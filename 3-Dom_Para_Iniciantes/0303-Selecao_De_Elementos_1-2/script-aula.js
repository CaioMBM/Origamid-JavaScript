// Selecionando pelo ID do elemento
/*
const animais = document.getElementById('animais');
console.log(animais);
*/

// Selecionando pela classe do elemento
/*
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1])
*/

// Selecionando pelo seletor o elemento o primeiro elemento li
/*
const primeiraLi = document.querySelector('li');
console.log(primeiraLi)
*/

// Selecionando pelo seletor o elemento o primeiro elemento ul
/*
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)
*/

// Selecionando pelo seletor os links do HTML que possuem # no começo deles
/*
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);
*/

// Selecionando pelo seletor geral todos os elementos com as classes .animais img
/*
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);
*/

// HTMLCollection vs NodeList
/*
const primeiraUl = document.querySelector('ul');
const gridSectionNode = document.querySelectorAll('.grid-section');
const gridSectionHTML = document.getElementsByClassName('grid-section');

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);
*/

// O método de Array forEach() existe apenas em NodeList
/*
const gridSectionNode = document.querySelectorAll('.grid-section');
gridSectionNode.forEach(function(item, index){
  console.log(item);
});

// Transformando array-like em um array
const arrayGrid = Array.from(gridSectionHTML);
// Exibindo que transformou num array
arrayGrid.forEach(function(item) {
  console.log(item);
})
*/