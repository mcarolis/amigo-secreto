//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nome = amigoInput.value.trim();

    // Verificar se o nome não está vazio e se não é duplicado
    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
    } else {
        amigos.push(nome);
        atualizarLista();
    }

    // Limpar o campo de entrada após adicionar
    amigoInput.value = '';
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpar a lista atual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto aleatoriamente
function sortearAmigo() {
    // Verificar se existem amigos na lista
    if (amigos.length < 1) {
        alert("Adicione pelo menos um nome para sortear.");
        return;
    }

    // Sorteia um amigo aleatoriamente
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome sorteado na tela
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}
