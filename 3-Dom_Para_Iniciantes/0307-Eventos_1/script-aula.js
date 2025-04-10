// addEventListener()
/*
const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})
*/

// Boa prática com callback
/*
const img = document.querySelector('img');

// Declarando a função
function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback);    // Chama ela sem os parênteses
img.addEventListener('click', callback());  // undefined porque a chamou com os parênteses
// Com função anônima
img.addEventListener('click', function() {
  console.log('Clicou');
})

// Sem função anônima - usando arrow function
img.addEventListener('click', () => {
  console.log('Clicou');
})
*/

// event
/*
const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img.addEventListener('click', callback);
*/

// Propriedades event
/*
const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
    // Retorna o elemento selecionado para ocorrer o evento - this
    const currentTarget = event.currentTarget; 
    console.log(currentTarget);
    // Retorna o elemento exato que recebeu o evento
    const target = event.target; 
    console.log(currentTarget)
    // Retorna uma string com o tipo do evento.
    const type = event.type;     
    console.log(type);
}

animaisLista.addEventListener('click', executarCallback);
*/

// event.preventDefault()
/*
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);
*/

// this
/*
const img = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  // Usando métodos e propriedades de elemento
  const srcThis = this.getAttribute('src');
  console.log(srcThis); 
}

img.addEventListener('click', callback);
*/

// Diferentes eventos (alguns)
/*
const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

// Acontece quando clica no elemento
h1.addEventListener('click', callback);
// Acontece quando o cursor do mouse toca e sai do elemento
h1.addEventListener('mouseenter', callback);
// Acontece quando rola a scroll da janela
window.addEventListener('scroll', callback);
// Acontece quando o tamanho da janela altera o tamanho
window.addEventListener('resize', callback);
// Acontece quando alguma tecla do teclado é apertada
window.addEventListener('keydown', callback);
*/

// Keyboard 
/*
function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);
*/
