// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
// === RESOLUÇÃO ===
/*
const paragrafos = document.querySelectorAll('p');
const paragrafosArray = Array.from(paragrafos);  // transformando de uma nodelist para um array

const totalCaracteres = paragrafosArray.reduce((total, p) => {
    return total + p.innerText.length;
}, 0);

console.log(totalCaracteres);

*/


// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.
// === RESOLUÇÃO ===
/*
function criarElemento(tag, classe, conteudo){
    const elemento = document.createElement(tag);
    elemento.classList.add(classe);
    elemento.innerText = conteudo;

    return elemento
}
console.log(criarElemento('li', 'azul', 'bla bla bla'))

// Plus: Fazendo uma verificação
function criarElemento2(tag, classe, conteudo){
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerText = conteudo : null;

    return elemento
}

console.log(criarElemento2('li', '', 'criadoo'));
*/


// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico
// === RESOLUÇÃO ===
/*
const h1Titulo = criarElemento2.bind(null, 'h1', 'titulo');

const cursoJS   = h1Titulo('Curso de JS');
const cursoHTML = h1Titulo('Curso de HTML');

console.log(cursoHTML, cursoJS)

// é o mesmo que:
//console.log(h1Titulo('Curso de JS'))
*/
