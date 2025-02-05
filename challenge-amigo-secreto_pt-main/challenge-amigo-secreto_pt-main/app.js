let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = ''; // Limpa o campo de entrada após adicionar o nome
    } else {
        alert('Por favor, insira um nome válido ou um nome que ainda não foi adicionado.');
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para realizar o sorteio do amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, adicione pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    let amigosSecretos = [...amigos];
    let resultado = [];

    // Embaralha a lista de amigos secretamente
    for (let i = amigosSecretos.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [amigosSecretos[i], amigosSecretos[j]] = [amigosSecretos[j], amigosSecretos[i]]; // Troca os elementos
    }

    // Garante que ninguém tire seu próprio nome
    for (let i = 0; i < amigos.length; i++) {
        if (amigosSecretos[i] === amigos[i]) {
            // Troca o sorteio caso a pessoa tire seu próprio nome
            [amigosSecretos[i], amigosSecretos[amigosSecretos.length - 1]] = [amigosSecretos[amigosSecretos.length - 1], amigosSecretos[i]];
        }
        resultado.push(`${amigos[i]} tirou ${amigosSecretos[i]}`);
    }

    // Exibe o resultado do sorteio
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ''; // Limpa resultados anteriores

    resultado.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultadoLista.appendChild(li);
    });
}
