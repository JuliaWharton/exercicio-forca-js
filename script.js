let listaPalavras = ['DESGRAÇA', 'DESPREZO'];

let palavraGerada = listaPalavras[Math.floor(Math.random()*listaPalavras.length)].split('');
let button = document.querySelector('button'); 
let array = document.querySelectorAll('.letra p');
let list = document.querySelectorAll('.listaDeErros p')
let guess = document.querySelector('input'); 
let guessValor = '';    
let index = 0; 

const verificarGuess = () => { 
    guessValor = guess.value; 
}
console.log('ok')

const analise = () => {
    verificarGuess(); 
    if(palavraGerada.includes(guessValor)){
        index = palavraGerada.indexOf(guessValor);
        array[index].innerHTML = guessValor;
        console.log('ok1')
    }else{
        list[index].innerHTML = guessValor;
        console.log('ok2')
    }
}

button.onclick = function(){ 
    analise(); 
};
