//O principal objetivo deste desafio é fortalecer as habilidades em lógica de programação. Aqui irei desenvolver a lógica para resolver o problema.

let listaNomes = [];
let ultimoSorteado = '';

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == '') {
        alert('Por favor, adicione o nome de um amigo.');
    } else {
        listaNomes.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        atualizarLista();
    }
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < listaNomes.length; i++) {
        let criarLista = document.createElement('li');
        criarLista.innerHTML = listaNomes[i];
        listaAmigos.appendChild(criarLista);
    }
}

function sortearAmigo() {
    if (listaNomes.length == 0) {
        alert('Adicione nomes a lista!');
        return;
    }
    let amigoAleatorio = Math.floor(Math.random() * listaNomes.length);
    let amigoSorteado = listaNomes[amigoAleatorio];
    if (amigoSorteado == ultimoSorteado) {
        alert('Amigo já sorteado.');
        return;
    }
    ultimoSorteado = amigoSorteado;

    document.getElementById('resultado').innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
    lançarConfetti();
}

function reiniciarSorteio() {
    listaNomes = [];
    ultimoSorteado = '';
    document.getElementById('resultado').innerHTML = '';
    atualizarLista();
}

function lançarConfetti() {
    confetti({
        particleCount: 500, 
        spread: 160,        
        origin: { x: 0.5, y: 0.5 } 
    });
}