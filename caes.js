const botoesRacas = document.getElementById('botoes-racas');

async function obterRacasDeCachorros() {
    try {
        const resposta = await fetch('https://dog.ceo/api/breeds/list/all');
        if (!resposta.ok) {
            throw new Error('Erro ao acessar a API de cães.');
        }
        const racas = await resposta.json();
        exibirBotoes(racas.message);
    } catch (erro) {
        alert(`Erro ao carregar a lista de raças de cães: ${erro.message}`);
    }
}

function exibirBotoes(racas) {
    for (const raca in racas) {
        const botao = document.createElement('button');
        botao.textContent = raca;
        botao.classList.add('tipo-btn');
        botao.addEventListener('click', () => redirecionarParaDetalhes(raca));
        botoesRacas.appendChild(botao);
    }
}

function redirecionarParaDetalhes(raca) {
    localStorage.setItem('racaSelecionada', raca);
    window.location.href = 'detalhes.html'; }

obterRacasDeCachorros();