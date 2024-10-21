const galeria = document.getElementById('galeria');
const botaoGerarMaisImagens = document.getElementById('gerar-imagens');

async function obterImagensDeCaes() {
    try {
        const resposta = await fetch('https://dog.ceo/api/breeds/image/random/8');
        if (!resposta.ok) {
            throw new Error('Erro ao acessar a API de imagens de cães.');
        }
        const dados = await resposta.json();
        const imagens = dados.message;
        mostrarGaleria(imagens);
    } catch (erro) {
        alert(`Erro ao carregar imagens de cães: ${erro.message}`);
    }
}
function mostrarGaleria(imagens) {
    galeria.innerHTML = '';
    imagens.forEach(imagemUrl => {
        const img = document.createElement('img');
        img.src = imagemUrl;
        img.alt = 'Imagem de cachorro';
        img.classList.add('galeria-imagem');
        galeria.appendChild(img);
    });
}

botaoGerarMaisImagens.addEventListener('click', obterImagensDeCaes);

obterImagensDeCaes();

