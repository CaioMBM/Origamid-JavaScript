// Palavra-chave this
/*
function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro('Honda', 5000);
// Saída: Carro {marca: 'Honda', preco: 6000}
*/

// Exemplo Real
/*
// Objeto "Dom"
const Dom = {
  // Propriedade "seletor"
  seletor: 'li',    // No seletor, tem que ter o elemento no HTML

  // Método que retorna o elemento <li> do HTML
  element() {
    return document.querySelector(this.seletor);
  },

  // Outra forma de fazer um método dentro do objeto
  // element: function(){
  //   // Código
  // }

  // Método que adiciona a classe "ativo"
  ativo() {
    this.element().classList.add('ativo');
  },
}

// Dom.ativo();         // adiciona ativo ao li
// Dom.seletor = 'ul';  // Atualiza o valor de seletor
// Dom.ativo();         // adiciona ativo ao ul
*/

// Transformando o objeto de cima numa função construtora
/*
function Dom(seletor) {
  // Função que retorna o elemento HTML passado como argumento da função construtora
  this.element = function() {
    return document.querySelector(seletor); // Transforma a string "li" no elemento HTML respectivo, ou seja, <li>
  }

  // Função que adiciona a classe "ativo" ao elemento HTML passado como argumento da função construtora
  this.ativar = function() {
    this.element().classList.add('ativo');
  }
}

// Criando dois novos objetos a partir da função construtora
const li = new Dom('li');
const ul = new Dom('ul');
*/

// Passando parâmetro dentro de uma função da função construtora
/*
function Dom(seletor) {
  // Função que retorna o elemento HTML passado como argumento da função construtora
  this.element = function() {
    return document.querySelector(seletor); 
  }
  
  // Função que adiciona a classe que foi passada como argumento na função
  this.ativar = function(classe) {
    this.element().classList.add(classe);
  }
}

const li = new Dom('li');
li.ativar('roxo')
*/
