let listadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirtextonaTela(tag, Texto){
let campo = document.querySelector(tag);
campo.innerHTML = Texto;
responsiveVoice.speak(Texto, 'Brazilian Portuguese Femele', {rate:1.2});
}

function exibirMensagemInicial(){

    exibirtextonaTela("h1", "Jodo do número secreto");
    exibirtextonaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirtextonaTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "Tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !!`;
        exibirtextonaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto){
            exibirtextonaTela("p", "O número secreto é Menor");
        } else {
            exibirtextonaTela("p", "O número secreto é Maior");
        }
        tentativas ++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
    listadeNumerosSorteados = [];
   }

   if(listadeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else{
    listadeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}



