// Array e loops
/*
var videoGames = ['Switch', 'PS4', 'XBox'];

for (var i = 0; i < videoGames.length; i++){
    console.log(i);              // Saída: Vai ser a posição dos itens
    console.log(videoGames[i]);  // Saída: Vai ser o nome dos itens
}
*/

// break
/*
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) { 
    // console.log(videoGames[i])      // Saída: Switch, PS4
    if(videoGames[i] === 'PS4') {
      break;  
    }
    // console.log(videoGames[i])      // Saída: Switch
}
*/

// forEach()
/*
var frutas = ['Banana', 'Pera', 'Goiaba', 'Uva']

frutas.forEach(function(fruta, index, array){
    console.log(fruta, index, array); // Saída: Vai ser o nome dos itens, suas posições e o valores do array 
})
*/


// Exercício
// Crie uma array com os anos que o Brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002
/*
var copasBrasil = [1959, 1962, 1970, 1994, 2002]
console.log(copasBrasil);
*/

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
/*
copasBrasil.forEach(function(copa){
    console.log(`O brasil ganhou a copa de ${copa}`);
})
*/

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
/*
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var i = 0; i < frutas.length; i++){
    if (frutas[i] === 'Pera'){
        break;
    }
    console.log(frutas[i]);
}
*/

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
/*
*/
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)
