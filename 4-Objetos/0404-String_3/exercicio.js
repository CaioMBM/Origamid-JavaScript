// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento
/*
const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];


let taxaTotal = 0;

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace(' R$ ', '');

    if(item.descricao.slice(0, 4) === 'Taxa'){
        taxaTotal = taxaTotal + numeroLimpo;
    }
})

console.log(taxaTotal);
*/

// Retorne uma array com a lista abaixo
/*
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const novoArray = transportes.split(';');
console.log(novoArray);
*/

// Substitua todos os span's por a's
/*
const html = `<ul> <li><span>Sobre</span></li> <li><span>Produtos</span></li> <li><span>Contato</span></li> </ul>`;

// Removendo todos os "span"
const removeSpan = html.split('span');
// Adicionando "a" nos lugares vazios que ficaram após remover "span"
const adicionaA  = removeSpan.join('a');
console.log(adicionaA);
*/

// Retorne o último caracter da frase
/*
const frase = 'Melhor do ano!';

const lastCaracter = frase.charAt(frase.length - 1);
console.log(lastCaracter);
*/

// Retorne o total de taxas
/*
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

// Alternativa 1 - Desta forma já mostra a quantidade de "taxa", mas também dos outros itens porque na verdade desta forma é mostrado no console os itens e quantidade de vezes que cada um se repete.
transacoes.forEach((item) => {
    // Deixando todos os caracteres em letra minúscula
    item = item.toLowerCase();
    // Removendo o espaçamento antes de "taxa"
    item = item.trim();
    // Deixando apenas os 4 primeires caracteres de cada índice
    item = item.slice(0, 4)

    console.log(item)
})

// Alternativa 2 - Mostra apenas a quantidade de veses que "caixa" aparece
let taxasTotal = 0;

transacoes.forEach((item) => {
    // Deixando todos os caracteres em letra minúscula
    item = item.toLowerCase();
    // Removendo o espaçamento antes de "taxa"
    item = item.trim();
    // Deixando apenas os 4 primeires caracteres de cada índice
    item = item.slice(0, 4)
    
    // Conta quantos "taxa" possui
    if (item === 'taxa'){ taxasTotal++ };
});
console.log(taxasTotal);


// Alternativa 3 - Deixando o código da alternativa 2 mais limpo 
let taxasTotal = 0;

transacoes.forEach((item) => {
    // Deixando todos os caracteres em letra minúscula -> Removendo o espaçamento antes de "taxa" -> Deixando apenas os 4 primeires caracteres de cada índice
    item = item.toLowerCase().trim().slice(0, 4);

    // Conta quantos "taxa" possui
    if (item === 'taxa'){ taxasTotal++ };
});
console.log(taxasTotal);
*/
