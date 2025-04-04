// Escopo da função
/*
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}
  
mostrarCarro();     // Saída: Fusca
console.log(carro); // Saída: Erro, carro is not defined
*/
/*
var carro = 'Fusca';

function mostrarCarro() {
    console.log(carro);
}

mostrarCarro();     // Saída: Fusca
console.log(carro); // Saída: Fusca
*/

// Escopo global
/*
// 'use strict'     // O 'use strict' impede a criação de variáveis globais
function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
}

mostrarCarro();     // Saída: ERRO: carro is not defined
console.log(carro); // Saída: ERRO: carro is not defined
*/

// Escopo de função (pai)
/*
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro();      // Saída: Meu carro é um Fusca
console.log(carro);  // Saída: Fusca
*/

// Escopo de bloco
/*
{
    var mes = "Maio";
    console.log(mes) // Saída: Maio
}

console.log(mes)    // Saída: Maio
*/
/*
{
    let mes = "Maio";
    console.log(mes) // Saída: Maio
}

console.log(mes)    // Saída: ERRO: mes is not defined  
*/

// Bloco x Objeto
/*
// Bloco
{
    let mes = "Maio";
    console.log(mes) // Saída: Maio
}

// Objeto
let mes = {};
*/

// Bloco do for usando let
/*
// Valor do i alterado devido o var no loop
var i = 10;
for(var i = 0; i < 3; i++) {
    console.log(`Número ${i}`); // Saída: Número 0, Número 1, Número 2 
}                               
console.log(i);                 // Saída: 3

// Valor do i inalterado devido o let no loop
var i = 10;
for(let i = 0; i < 3; i++) {
    console.log(`Número ${i}`); // Saída: Número 0, Número 1, Número 2 
}                               
console.log(i);                 // Saída: 10
*/

// Const 
/*
// const nome = "Caio";
// nome = "Arthur"
// console.log(nome);    // Saída: ERRO: Atribuição a variável constante.
// const nome = "Arthur";
// console.log(nome);      // Saída: ERRO: O identificador 'nome' já foi declarado.

// const pessoa = { nome : "Felipe", idade: 21}
// pessoa.nome = "Marcio";
// console.log(pessoa.nome) // Saída: Marcio 
// pessoa.nome = Marcio;
// console.log(pessoa.nome) // Saída: Marcio não está definida
// pessoa = "caio"; // Saída: Atribuição a variável constante.
*/

// Let
/*
let ano;     // Criei a variável (sem valor)
ano = 2018;  // Atribuí valor
ano++;       // Incrementei valor
console.log(ano);   // Saída: 2019

let ano = 2020;     // Saída: ERRO: O identificador 'ano' já foi declarado.
*/


// Exercício
// Por qual motivo o código abaixo retorna com erros?
/*
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// console.log(var, marca, portas);
// Resposta: 
// 1- Não pode chamar var, e sim, o nome da var;
// 2- const e let só podem ser acessadas dentro do bloco.
// Obs: Caso queira ver o resultado no console, coloque o console.log() dentro do bloco e com o valor da var ao invés da palavra-chave var.
*/

// Como corrigir o erro abaixo?
/*
function somarDois(x) {
    const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// Resposta: Basta colocar o const fora da function, desta forma todas as functions terão acesso ao valor do const.
*/

// O que fazer para total retornar 500?
/*
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
// Resposta: Basta alterar de var numero para let numero dentro do for, desta forma o valor fora do for não será atualizado por causa do for.
// Obs: Se quiser, fora do for, pode alterar de var numero para const numero = 50.
*/