const galeria = document.getElementById('galeria');
const tituloRaca = document.getElementById('titulo-raca');
const descricaoRaca = document.getElementById('descricao-raca');

async function obterImagensDaRaca(raca) {
    try {
        const resposta = await fetch(`https://dog.ceo/api/breed/${raca}/images/random/4`);
        if (!resposta.ok) {
            throw new Error('Erro ao acessar a API de imagens da raça.');
        }
        const dados = await resposta.json();
        const imagens = dados.message;
        mostrarGaleria(imagens, raca);
    } catch (erro) {
        alert(`Erro ao carregar imagens da raça: ${erro.message}`);
    }
}

function mostrarGaleria(imagens, raca) {
    const descricao = obterDescricaoRaca(raca);
    descricaoRaca.textContent = descricao;
    
    galeria.innerHTML = '';
    imagens.forEach(imagemUrl => {
        const img = document.createElement('img');
        img.src = imagemUrl;
        img.alt = `Imagem de ${raca}`;
        img.classList.add('galeria-imagem');
        img.setAttribute('data-tooltip', `Raça: ${raca} - ${descricao}`);
        galeria.appendChild(img);
    });
}

function obterDescricaoRaca(raca) {
    const descricoes = {
        labrador: "Labradores são amigáveis, leais e ótimos com crianças.",
        beagle: "Beagles são ativos, curiosos e ótimos farejadores.",
        poodle: "Poodles são inteligentes e possuem um ótimo temperamento.",
    };
    
    return descricoes[raca.toLowerCase()] || "Informações sobre essa raça não estão disponíveis.";
}

function inicializar() {
    const racaSelecionada = localStorage.getItem('racaSelecionada');
    if (racaSelecionada) {
        tituloRaca.textContent = `Raça: ${racaSelecionada}`;
        obterImagensDaRaca(racaSelecionada);
    } else {
        alert('Nenhuma raça selecionada!');
        window.location.href = 'caes.html';
    }
}

inicializar();
