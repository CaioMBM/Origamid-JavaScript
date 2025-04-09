// Propriedades para o height e para o width
/*
const section = document.querySelector('.animais-lista');

// height
console.log("height + padding = " + section.clientHeight);
// Saída: 370
console.log("height + padding + border = " + section.offsetHeight);
// Saída: 370
console.log("height total = " + section.scrollHeight); // height total, mesmo dentro de scroll
// Saída:  658

// width
console.log("width + padding = " + section.clientWidth);
// Saída: 82
console.log("width + padding + border = " + section.offsetWidth);
// Saída: 100
console.log("width total = " + section.scrollWidth); // width total, mesmo dentro de scroll
// Saída: 82 
*/

// offsetTop e offsetLeft
/*
const primeiroH2 = document.querySelector('h2');
console.log("Distância do topo do elemento para o topo do site: " + primeiroH2.offsetTop)  
// Saída: 221
console.log("Distância do canto esquerdo do elemento para o canto esquerdo do site: " + primeiroH2.offsetLeft)  
// Saída: 130
*/

// getBoundingClientRect()
/*
const primeiroH2 = document.querySelector('h2');
const rect = primeiroH2.getBoundingClientRect();  
console.log(rect);          // Vai retornar um objeto
console.log(rect.height);   // Vai retornar a altura desse objeto, nesse caso a altura do elemento h2

console.log(rect.top);      // Vai retornar a distância do topo desse objeto até o topo do site
if (rect.top < 0){
    console.log("PASSOUU")
} else{
    console.log("NÃO passou")
}
*/

// window
/*
console.log("Largura da janela do site: " + window.innerWidth);
console.log("Largura da janela do site + área do dev tolls: " + window.outerWidth);
console.log("Altura da janela do site: " + window.innerHeight);
console.log("Altura da janela do site + área da aba de navegação: " + window.outerHeight);
console.log("Distância total do scroll horizontal: " + window.pageXOffset);
console.log("Distância total do scroll vertical: " + window.pageYOffset);
*/

// matchMedia() - Media Query com JS
const janela = window.matchMedia('(max-width: 600px)');

console.log(window.innerWidth)
if(janela.matches) {
    console.log('Tela MENOR que 600px')
} else {
    console.log('Tela MAIOR que 600px')
}