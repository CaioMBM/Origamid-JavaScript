// Selecionando pelo ID do elemento
const animais = document.getElementById('animais');
console.log(animais);

// Selecionando pela classe do elemento
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1])

// Selecionando pelo seletor o elemento o primeiro elemento li
const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

// Selecionando pelo seletor o elemento o primeiro elemento ul
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

// Selecionando pelo seletor os links do HTML que possuem # no começo deles
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);
