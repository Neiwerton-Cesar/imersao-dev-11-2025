const cardContainer = document.querySelector(".card-container");
const campoBusca = document.querySelector("#campo-busca");
let dados = [];

// Função para carregar os dados do JSON uma única vez
async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

// Chama a função para carregar os dados assim que o script for lido
carregarDados();

function iniciarBusca() {
    const termoBusca = campoBusca.value.toLowerCase();

    const resultados = dados.filter(dado => {
        return dado.nome.toLowerCase().includes(termoBusca) || 
               dado.descricao.toLowerCase().includes(termoBusca);
    });

    renderizarCards(resultados);

    // Limpa o campo de busca após a pesquisa
    campoBusca.value = "";
}

function renderizarCards(dados) {
    // Limpa os cards existentes antes de renderizar os novos
    cardContainer.innerHTML = "";
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <img src="${dado.imagem}" alt="Logo ${dado.nome}" class="card-imagem">
        <h2>${dado.nome}</h2>
        <p>${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
}
