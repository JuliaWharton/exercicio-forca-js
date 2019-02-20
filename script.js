let listaPalavras = ['DESGRAÇA', 'DESPREZO'];

let palavraGerada = listaPalavras[Math.floor(Math.random()*listaPalavras.length)].split('');
let button = document.querySelector('button'); 
let array = document.querySelectorAll('.letra p');
let list = document.querySelector('.listaDeErros p')
let guess = document.querySelector('input'); 
let guessValor = '';    
let index = 0;
 

const verificarGuess = () => { 
    guessValor = guess.value.toUpperCase(); 
}
console.log('ok')

const analise = () => {
    verificarGuess(); 
    let acertou = 0;
    for(index in palavraGerada){
        if(palavraGerada[index] == guessValor){
            array[index].innerHTML = guessValor;
            acertou ++;
        }
    }
    if(acertou == 0){
        list.innerHTML += guessValor + ' ';
    }
}

button.onclick = function(){ 
    analise(); 
};