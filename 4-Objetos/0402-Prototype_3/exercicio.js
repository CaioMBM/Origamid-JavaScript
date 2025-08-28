// Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade. Crie um método no protótipo que retorne o nome completo da pessoa
/*
function Pessoa(nome, sobrenome, idade){
    this.nome      = nome,
    this.sobrenome = sobrenome,
    this.idade     = idade
}

Pessoa.prototype.fullName = function(){
    return `${this.nome} ${this.sobrenome} `
}

const caio = new Pessoa('Caio', 'Montenegro', 22);
console.log(caio.fullName())
*/

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
/*
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)
*/

// Liste os construtores dos dados abaixo
// const li = document.querySelector('li');

// li;
// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();

// // Qual o construtor do dado abaixo:
// li.hidden.constructor.name;

/*
const li = document.querySelector('li');

li;
console.log('li            - ' + li.constructor.name); 
// HTMLLIElement

li.click;
console.log('li.click      - ' + li.click.constructor.name); 
// Função

li.innerText;
console.log('li.innerText  - ' + li.innerText.constructor.name); 
// String 

li.value;
console.log('li.value      - ' + li.value.constructor.name); 
// Number

li.hidden;
console.log('li.hidden     - ' + li.hidden.constructor.name); 
// Boolean

li.offsetLeft;
console.log('li.offsetLeft - ' + li.offsetLeft.constructor.name); 
// Number

li.click(); 
console.log('li.click()    - ' + li.click()); 
// undefined

// Qual o construtor do dado abaixo?
li.hidden.constructor.name; // String
*/
