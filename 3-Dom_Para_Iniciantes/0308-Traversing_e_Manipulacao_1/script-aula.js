// outerHTML, innerHTML e innerText
/*
const h1 = document.querySelector('h1');
console.log(h1.innerHTML);
console.log(h1.innerText);
console.log(h1.outerHTML);
*/

// Trasversing
/*
const lista = document.querySelector('.animais-lista');

// Retorna elemento HTML pai
console.log(lista.parentElement);                // Saída: <section class="grid-section animais">
// Retorna elemento HTML pai do pai
console.log(lista.parentElement.parentElement);  // Saída: <body>
// Retorna elemento HTML seguinte, ou seja, o que está abaixo
console.log(lista.nextElementSibling);           // Saída: <div class="animais-descricao">
// Retorna elemento HTML acima
console.log(lista.previousElementSibling);      // Saída: <h1 class="titulo">

// Retorna o HTMLCollection com os filhos
console.log(lista.children);                            // Saída: HTMLCollection(6) [li, li, li, li, li, li]
// Retorna o primeiro filho
console.log(lista.children[0]);                         // Saída: (primeira imagem)
// Retorna o último filho
console.log(lista.children[lista.children.length - 1]); // Saída: (última imagem)

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho
*/

// Element Vs Node
/*
const lista = document.querySelector('.animais-lista');

// Retorna o elemento acima
console.log(lista.previousElementSibling); // Saída: h1.titulo

// Retorna o node acima
console.log(lista.previousSibling);        // Saída: #text (esse #text refere-se a quebra de linha "/n", explicação melhor no vídeo ou no google docs da aula)

// Retorna o primeiro node child
console.log(lista.firstChild);             // Saída: #text

// Retorna o todos os node child
console.log(lista.childNodes);             // Saída: NodeList(13) [text, li, text, li, text, li, text, li, text, li, text, li, text]
*/
