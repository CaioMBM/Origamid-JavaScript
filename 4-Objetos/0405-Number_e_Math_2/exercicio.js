// Retorne um número aleatório entre 1050 e 2000
/*
Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
*/

// Retorne o maior número da lista abaixo
// const numeros = '4, 5, 20, 8, 9';

/*
const numArray = numeros.split(', ');
const numMaior = Math.max(...numArray) 

// Esses três pontinhos é um operador chamado "spread" (n foi faladod dele no curso ainda)
*/

// Crie uma função para limpar os preços e retornar os números com centavos arredondados, depois retorne a soma total
// const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
/*
// Tratando os preços
function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

// Somando os preços
let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
})

// Exibindo, em real, o valor somando
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
*/
