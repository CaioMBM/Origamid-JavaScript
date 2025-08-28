// String
/*
const comida = 'Pizza';
const liquido = new String('Água');
*/

// Propriedades e métodos de String
// .length
/*
const comida = 'Pizza';
const frase = 'A melhor comida';

comida.length; // 5
frase.length; // 15

comida[0] // P
frase[0] // A
frase[frase.length - 1] // a
*/

// chartAt()
/*
const linguagem = 'JavaScript';

linguagem.charAt(0);                     // J
linguagem.charAt(linguagem.length - 1);  // t

linguagem[0];                            // J
*/

// concat(str2, str3, ...)
/*
const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase.concat(linguagem, '!!'); // A melhor linguagem é JavaScript!!

console.log(frase + linguagem + " :)") // A melhor linguagem é JavaScript :)
*/

// .includes(search, position)
/*
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta, 10)  // true
listaFrutas.includes(fruta, 11)  // false
*/

// .endsWith(search) e .startsWith(search)
/*
const fruta = 'Banana';

fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false
fruta.endsWith('nana'); // true
*/

// .slice(start, end)
/*
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(1, 6); // epósi

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(0);   // Depósito de cliente
transacao1.slice(5);   // ito de cliente
transacao1.slice(12);  // cliente
transacao1.slice(-4);  // ente
*/

// .substring(start, end)
/*
const linguagem = 'JavaScript';

linguagem.substring(3,5);  // aS
linguagem.substring(0,4);  // Java
linguagem.substring(4);    // Script
linguagem.substring(-3);   // JavaScript
*/

// .indexOf(search) e .lastIndexOf(search)
/*
const instrumento = 'Guitarra';

instrumento.indexOf('r');     // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta');    // 3
*/

// .padStart(n, str) e .padEnd(n, str)
/*
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padStart(10);      //      R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....
listaPrecos[0].padEnd(10);        // R$ 99     

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
})

// .....R$ 99
// ....R$ 199
// ..R$ 12000
*/
