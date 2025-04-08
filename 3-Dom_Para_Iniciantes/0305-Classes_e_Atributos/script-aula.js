// console.log()

const menu = document.querySelector('.menu');

// className
/*
console.log(menu.className)
// Alterando o nome da classe com className
menu.className = 'novaClasse';
console.log(menu.className);
*/

// classList
/*
console.log(menu.classList)    // Retorna um DOMTokenList (print do retorno no google docs)
console.log(menu.classList[0]) // Saída: menu
*/

// classList.add
/*
menu.classList.add('ativo', 'aparece')
*/

// classList.remove
/*
menu.classList.remove('aparece')
*/

// classList.toggle
/*
menu.classList.toggle('ativo')
// Obs: Se tiver outros menu.classList.toggle('ativo'), a classe ativo pode ser add ou removida
*/

// classList.contains
/*
menu.classList.toggle('ativo'); // Foi adicionada a classe ativo
if (menu.classList.contains('ativo')){
  window.alert("Tem a classe .ativo")
} else {window.alert("Não tem a classe .ativo")}
*/

// attibutes
/*
const animais = document.querySelector('.animais');
console.log(animais.attributes);  // Retorna um NamedNodeMap (print do retorno no google docs)
// Exibindo o atributo da posição [n] do elemento selecionado
console.log(animais.attributes[1]); // Saída: id="animais"
*/

// getAttribute() e setAttribute()
/*
const primeiraImagem = document.querySelector('img')

// Caminho da imagem
const primeiraImagemCaminho = primeiraImagem.getAttribute('src');
console.log(primeiraImagemCaminho)     // Saída: img/imagem1.jpg

// Mostrando o texto alternativo da imagem
const primeiraImagemTextAlt = primeiraImagem.getAttribute('alt');
console.log(primeiraImagemTextAlt)     // Saída: null

// Adicionar texto alternativo a img
primeiraImagem.setAttribute('alt', 'Adicionei texto alternativo');

// Verificando se possui o atributo
const verificarAtributo = primeiraImagem.hasAttribute('src');
console.log(verificarAtributo);        // Saída: true 
*/
