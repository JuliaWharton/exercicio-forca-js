let listaPalavras = ['DESGRAÇA', 'DESPREZO'];

let palavraGerada = listaPalavras[Math.floor(Math.random()*listaPalavras.length)].split('');

let array = document.querySelectorAll('.letra');
let list = document.querySelectorAll('listaDeErros')

const analise = () => {
    if(palavraGerada.includes(guess)){
        let index = palavraGerada.indexOf(guess);
        array[index].innerHTML = guess;
    }else{
        list[index].innerHTML = guess;
    }
}

let letra = document.querySelector('.guessBox').value