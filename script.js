const leitor = document.querySelector('.leitor');
const botao = document.querySelector('.btnTentar');
const mensagem = document.querySelector('.mensagem');

let numeroAleatorio = parseInt(Math.random() * 20) + 1;

botao.addEventListener('click', chutar);
mensagem.textContent = "Digite um número de 1 a 20 e clique no botão!";

function chutar() {
   let resultado = ObterResultado();
   if(resultado) {
    numeroAleatorio = parseInt(Math.random() * 20) + 1;
   }
};

function ObterResultado() {

    if(isNaN(leitor.value)) {
        mensagem.textContent = "Digite um número!";
        return false;
    }

    let chute = parseInt(leitor.value);
    console.log(chute);
    console.log(numeroAleatorio);

    if(numeroAleatorio > chute) {
        mensagem.textContent = "O número secreto é maior que o palpite.";
        return false;
    }

    else if(numeroAleatorio < chute) {
        mensagem.textContent = "O número secreto é menor que o palpite.";
        return false;
    }
    
    else if(numeroAleatorio == chute){
        mensagem.textContent = "Parabéns você acertou o número! Clique no botão " +
                                "para jogar novamente.";

        return true;
    }
};