// Array
/*
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos       = [49, 99, 69, 89];

// console.log(precos[0]) // 49

const dados = [
    new String('Tipo 1'), 
    ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], 
    function andar(nome) { console.log(nome) }
];

console.log(dados[0]);        // String {'Tipo 1'}
console.log(dados[1]);        // (3) ['Carro', 'Portas', {…}]
console.log(dados[1][2].cor); // Azul
dados[2]('Ford');             // ford
*/

// Construção de Arrays
/*
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');

console.log(carros[1])              // Mustang
console.log(carros);                // ['Corola', 'Mustang', 'Honda']
console.log(carros[2] = 'Ferrari'); // Ferrari
console.log(carros);                // ['Corola', 'Mustang', 'Ferrari']
console.log(carros.length);         // 3

console.log(carros[10] = 'Parati'); // Parati
console.log(carros);                // (11) ['Corola', 'Mustang', 'Ferrari', vazio x 7, 'Parati']
*/

// Propriedades e métodos de Array
// .from()
/*
let li = document.querySelectorAll('li'); // NodeList (é um array like)
console.log(li)                           // NodeList(3) [li, li, li]
li     = Array.from(li); // Transformando num Array
console.log(li)         // (3) [li, li, li]


const carros = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Ford',
    length: 3,
}

const carrosArray = Array.from(carros);
console.log(carrosArray) // (3) ['Fiat', 'Honda', 'Ford']
*/

// .isArray()
/*
let li = document.querySelectorAll('li'); // NodeList
Array.isArray(li);                        // false

li = Array.from(li); // Array
Array.isArray(li);   // true
*/

// Array.of(), Array() e new Array()
/*
Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]
*/

// Propriedades e Métodos do Prototype
// .length
/*
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 4
frutas[2].length; // 2
*/

// Métodos Modificadores 
// [].sort()
/*
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]
*/

// [].unshift() e [].push()
/*
const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];
*/

// [].shift() e [].pop()
/*
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford'
carros; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda'
carros; // ['Fiat', 'VW'];
*/

// [].reverse()
/*
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];
*/
