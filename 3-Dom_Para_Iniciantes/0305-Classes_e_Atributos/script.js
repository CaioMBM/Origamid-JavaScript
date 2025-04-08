// Exercício
// Adicione a classe ativo a todos os itens do menu
/*
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach( (item) => {
  item.classList.add('ativo')
})
*/

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
/*
const itensMenu = document.querySelectorAll('.menu a');
// Minha resolução
itensMenu.forEach( (item) => {
  item.classList.remove('ativo')
  itensMenu[0].classList.add('ativo')
})
// Resolução do porfessor

itensMenu.forEach( (item) => {
  item.classList.remove('ativo')
})
itensMenu[0].classList.add('ativo')
*/

// Verifique se as imagens possuem o atributo alt
/*
const imagens = document.querySelectorAll('img');
imagens.forEach((imgs) => {
  console.log(imgs.hasAttribute('alt')) 
})
*/

// Modifique o href do link externo no menu
/*
const linkExtMenu = document.querySelector('a[href^="http"]');
linkExtMenu.setAttribute('href', 'https://www.linkedin.com/in/caio-montenegro-486571250/');
*/
