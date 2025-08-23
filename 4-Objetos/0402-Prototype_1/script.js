// Prototype
/*
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('Caio', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined
*/

// Adição de métodos ao prototype
/*
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function(){
  return this.nome + ' andou';
}

const caio = new Pessoa('Caio', 28);
*/

// Diferença entre adicionar métodos na função construtora e ao adicionar ao prototype
/*
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function(){
    return this.nome + ' andou demais';
  }
}

Pessoa.prototype.andar = function(){
  return this.nome + ' andou';
}

Pessoa.prototype.pular = function(){
  return this.nome + ' pulou';
}

const caio = new Pessoa('Caio', 28);
*/

// Acesso ao Protótipo
/*
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function(){
    return this.nome + ' andou demais';
  }
}

const caio = new Pessoa('Caio', 28);

console.log(caio.nome);     // Saída: Caio
console.log(caio.idade);    // Saída: 28
console.log(caio.andar());  // Saída: Caio andou demais
*/

// Proto
/*
--> O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine do navegador fazer essa busca, não devemos falar com __proto__ diretamente.
*/

// Herança de Protótipo
/*
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const caio = new Pessoa('Caio', 28);

Object.prototype;

//Obs: O objeto caio possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object
console.log(caio.toString());       // Saída: [object Object]
console.log(caio.isPrototypeOf());  // Saída: false
console.log(caio.valueOf());        // Saída: Pessoa {nome: 'Caio', idade: 28}
*/
