// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// === RESOLUÇÃO ===
/*
function mudarClasse(){
    document.body.classList.toggle('vermelho');
}

setInterval(mudarClasse, 2000);
*/


// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).
// === RESOLUÇÃO ===
/**/
const iniciar = document.querySelector('.iniciar');
const pausar  = document.querySelector('.pausar');
const tempo   = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempor);
pausar.addEventListener('click', pausarTempor);
pausar.addEventListener('dblclick', resetarTempor);

let i = 0;
let timer;

function iniciarTempor(){
    timer = setInterval( ()=>{
        tempo.innerText = i++;
    }, 100)

    iniciar.setAttribute('disabled', '');
}

function pausarTempor(){
    clearInterval(timer);

    iniciar.removeAttribute('disabled');
}

function resetarTempor(){
    tempo.innerHTML = 0;
    i = 0;
}