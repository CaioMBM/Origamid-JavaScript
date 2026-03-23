// Crie uma função que verifique corretamente o tipo de dado
// === RESOLUÇÃO ===
/*
function verificarDado(dado){
    return Object.prototype.toString.call(dado);
}
*/

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
// === RESOLUÇÃO ===
/*
const quadrado = [];
Object.defineProperties(quadrado, {
    lados: { value: 4 }
})
*/

// Previna qualquer mudança no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}
// === RESOLUÇÃO ===
/*
Object.freeze(configuracao);
*/

// Liste o nome de todas as propriedades do protótipo de String e Array
// === RESOLUÇÃO ===
/*
Object.getOwnPropertyNames(String.prototype);
Object.getOwnPropertyNames(Array.prototype);
// Basta dar um console.log() caso queira ver as propriedades de cada um
*/
