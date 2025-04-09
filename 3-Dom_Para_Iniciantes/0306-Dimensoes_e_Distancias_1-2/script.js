// Exercício
// Verifique a distância da primeira imagem em relação ao topo da página
/*
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop)
*/

// Retorne a soma da largura de todas as imagens
/*
const imagens = document.querySelectorAll('img');

let somaLarguras = 0;
imagens.forEach(img => {
  somaLarguras += img.offsetWidth; // aqui será somado os valores de width
});
console.log('Soma das larguras:', somaLarguras + 'px');
*/

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
/*
const links = document.querySelectorAll('a');

links.forEach( link => {
    const linkWidth = link.clientWidth;
    const linkHeight = link.clientHeight;


    // Tamanho recomendado
    if (linkWidth >= 48 && linkHeight >= 48){
        console.log(linkWidth + "x" + linkHeight + " Tamanho recomendado")
    }
    // Tamanhos não recomendado
    else if (linkWidth < 48 && linkHeight < 48){
        console.log(linkWidth + "x" + linkHeight + " Tamanhos não recomendado")
    } 
    // Tamanho não recomendado: width menor
    else if (linkWidth < 48 && linkHeight >= 48){
        console.log(linkWidth + "x" + linkHeight + " Tamanho não recomendado: width menor")
    }
    // Tamanho não recomendado: height menor
    else if (linkWidth >= 48 && linkHeight < 48){
        console.log(linkWidth + "x" + linkHeight + " Tamanho não recomendado: height menor")
    }
})

// Obs: Eu fiz a mais e tbm coloquei o tamanho que estava de errado.
*/

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
/*
const browserWidth = window.matchMedia('(max-width: 750px)');
const menu = document.querySelector('.menu');

if (browserWidth.matches){
    menu.classList.add('menu-ativo');
}
*/