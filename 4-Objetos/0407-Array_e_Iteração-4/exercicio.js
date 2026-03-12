// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso

// === RESOLUÇÃO ===
/*

const cursos = document.querySelectorAll('.curso');
// Transformando "const cursos" num Array
const cursosArray = Array.from(cursos);

const cursoObjetos = cursosArray.map((cursos) => {
    const objetoTitulo    = cursos.querySelector('h1').innerText;
    const objetoDescricao = cursos.querySelector('p').innerText;
    const objetoAula      = cursos.querySelector('.aulas').innerText;
    const objetoHora      = cursos.querySelector('.horas').innerText;

    return{
        titulo: objetoTitulo,
        descrição: objetoDescricao,
        aula: objetoAula,
        hora: objetoHora
    }
})

console.log(cursoObjetos)
*/


// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

// === RESOLUÇÃO ===
/*

const arrayLimpa = numeros.filter((numero) => {
    if (numero > 100){ return numero; }
});
console.log(arrayLimpa)

// Forma mais compacta
const arrayLimpa2 = numeros.filter( numero => numero > 100);
console.log(arrayLimpa2)
*/


// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

// === RESOLUÇÃO ===
/*
const verificarInstrumeto = instrumentos.some( instrumento => instrumento === 'Baixo')
console.log(verificarInstrumeto)
*/


// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]

// === RESOLUÇÃO ===
/*
// Pegando os preços e colocando num array --> removendo os 3 primeiros espaços da string ("R$ ") para que fique apenas os números --> trocando as vígulas por ponto
const comprasPreco = compras.map( precoProduto => precoProduto.preco.slice(3).replace(',', '.') );

// Transformando em Number
const precoNumber = comprasPreco.map(Number)

// Fazendo a soma dos valores da compra
const comprasTotal = precoNumber.reduce((valorAcumulado, valorAtual) => {
    return valorAcumulado + valorAtual;
}, 0)

console.log( "Valor totat: R$" + comprasTotal)

// Versão reduzida
const valorTotal = compras.reduce( (acumulador, item) => {
    const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
    return acumulador + precoLimpo;
}, 0)

console.log(valorTotal)
*/