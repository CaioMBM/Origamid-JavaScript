// .repeat(n)
/*
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
// Saída: 'Camisas, Bonés, Calças, Bermudas, Vestidos, Saias'

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); 
// Saída: 'R$ 1200.43'
*/

// .split(padrao)
/*
const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split('s ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
// O .split('div') remove os caractres do da const htmlText e o .join('section') junta os caracteres do array e onde ficaria espaço é substituido pelo valor passado como parêmetro
*/

// .toLowerCase() e .toUpperCase()
/*
const sexo1 = 'Feminino';

sexo1.toLowerCase()  // feminino
sexo1.toUpperCase()  // FEMININO

if (sexo1.toLowerCase() === 'feminino') { // true
    // código
}; 
*/

// .trim(), str.trimStart(), str.trimEnd()
/*
const valor = '  R$ 23.00   ' 

valor.trim();       // 'R$ 23.00'
valor.trimStart();  // 'R$ 23.00   '
valor.trimEnd();    // '  R$ 23.00'
*/
