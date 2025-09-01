// Number
/*
const num1 = 100;
const num2 = new Number(32)
*/

// Propriedades e métodos de Number
// .isNaN() e .isInteger()
/*
Number.isNaN(NaN);   // true
Number.isNaN(4 + 5); // false

Number.isInteger(20);   // true
Number.isInteger(23.6); // false
*/

// .parseFloat() e .parseInt()
/*
parseFloat('99.50');            // Mesma função sem o Number
Number.parseFloat('99.50');     // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100');    // NaN

parseInt('99.50', 10);             // 99
parseInt(5.43434355555, 10);       // 5
Number.parseInt('100 Reais', 10);  // 100
*/

// .toFixed(decimais)
/*
const preco = 3.39;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(0) // 1000
carro.toFixed(1) // 1000.5
carro.toFixed(2) // 1000.46
carro.toFixed(3) // 1000.455
carro.toFixed(4) // 1000.4550

const preco2 = 12.49;
preco2.toFixed() + 33;  // 1233
+preco2.toFixed() + 33; // 45
*/

// .toLocaleString(language, options)
/*
const preco = 59.49;

preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
*/

// .toLocaleString(language, options)
/*
Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303
*/

// Propriedades e métodos de Math
// .abs(), .ceil(), .floor() e .round():
/*
Math.abs(-5.5); // 5.5
Math.ceil(4.83); // 5
Math.ceil(4.3);  // 5
Math.floor(4.833); // 4
Math.floor(4.3);   // 4
Math.round(4.8334); // 5
Math.round(4.3);    // 4
*/

// .max(), .min() e .random()
/*
Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX

// Número inteiro aleatório
Math.floor(Math.random() * 100); // entre 0 e 99,99...
Math.floor(Math.random() * 500); // entre 0 e 499,99..

// Número inteiro aleatório entre 72 e 32
Math.floor(Math.random() * (10 - 5 + 1)) + 5;  // entre 5 e 10
*/
