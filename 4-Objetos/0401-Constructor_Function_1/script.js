// Objeto
/*
const carro = {
  marca: 'Marca',
  preco: 0,
}

// Atribuindo valor a const carro:
const honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;

// Sobrescrevendo o valor a const carro:
const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;
*/

// Constructor Function
/*
function Carro() {        // Carro() é o construtor
  this.marca = 'Marca';   // O this é para fazer referência a prórpia Constructor Function
  this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
// Saída: Carro {marca: 'Honda', preco: 4000} 

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;
// Saída: Carro {marca: 'Fiat', preco: 3000} 
*/

// Palavra-chave new
/*
// 1) Cria um novo objeto
honda = {};

// 2) Define o protótipo
honda.prototype = Carro.prototype;

// 3) Aponta a variável this para o objeto
this = honda;

// 4) Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5) Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}
*/

// Parâmetros e Argumentos
/*
function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 4000);
const fiat = new Carro('Fiat', 3000);
*/