// Exercício
// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
/*
// Selecionando os links internos e armazenando nesta const
const linksInternos = document.querySelectorAll('a[href^="#"]');

function clicarLink(event){
    // Previna o comportamento padrão
    event.preventDefault();
    
    // Remove a classe ativo de cada item
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });

    // Adiciona a classe ativo ao item
    event.currentTarget.classList.add('ativo');
}

// Percorrer todos os itens intermos e aciona o evento no item clicado
linksInternos.forEach((link) => {
    link.addEventListener('click', clicarLink);
});
*/

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
/*
// Minha resolução
function mostrarElemento(event){
    const target = event.target;
    console.log(target);
}

window.addEventListener('click', mostrarElemento);
*/
// Resolução do prof
/* 
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
    console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento)
})
*/


// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
/*
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
    event.currentTarget.remove();
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento)
})
*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
/*
function aumetarParagrafo(event){
    if (event.key === 't'){
        document.documentElement.classList.toggle('letraMaior');
        console.log("clicou T")
    }
}

window.addEventListener('keydown', aumetarParagrafo);
*/