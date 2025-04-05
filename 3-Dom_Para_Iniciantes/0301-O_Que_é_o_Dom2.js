// Acessando o h1 do HTML - query selecton
/*
const titulo = document.querySelector('h1');

// Propriedades do h1
titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;
*/

// addEventListener
// Com função anônima
/*
const titulo = document.querySelector('h1');
titulo.addEventListener('click', function(){    
    console.log("clicou");
})
*/

// Sem função anônima
/*
const titulo = document.querySelector('h1');

function callback(){
    console.log("clicou");
}

titulo.addEventListener('click', callback); // ativa a função callback ao clicar no h1
*/


// Exercício
// Retorne o url da página atual utilizando o objeto window
/*
const url = window.location.href;
console.log(url);
*/

// Seleciona o primeiro elemento da página que possua a classe ativo
/*
const h1 = document.querySelector('h1')
console.log(h1)
*/

// Retorne a linguagem do navegador
/*
const linguagem = window.navigator.language;
console.log(linguagem)
*/

// Retorne a largura da janela
/*
const largura = window.innerWidth;
console.log(largura)
*/ 
