// Construtores Nativos
/*
const pais = 'Brasil';
const cidade = new String('Rio');

// Método
pais.charAt(0);     // Saída: B
cidade.charAt(0);   // Saída: R
*/

// Acessando a função do protótipo
/*
const lista = document.querySelectorAll('li');

// Transformando uma lista de itens em uma array
const listaArray = Array.prototype.slice.call(lista);
// const listaArray = Array.from(lista); 
*/

// Método do Objeto vs Protótipo
/*
const lista = document.querySelectorAll('li');

Array.prototype.slice.call(lista);
Array.from(lista); // O Array.from() faz o mesmo que Array.prototype.slice.call(). A diferença tá que o .from() acessar o objeto e o outro acessar o protótipo

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);
*/

// Entenda o que está sendo retornado
/*
const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
// Saída: {marca: 'Ford', preco: 2000, acelerar: ƒ}

Carro.marca // String
// Saída: Ford

Carro.preco // Number
// Saída: 2000

Carro.acelerar // Function
// Saída: ƒ acelerar() { return true; }

Carro.acelerar() // Boolean
// Saída: True

Carro.marca.charAt // Function
// Saída: ƒ charAt() { [native code] }

Carro.marca.charAt(0) // String
// Saída: F

console.log(Carro.marca.charAt(0))
*/
