const url = 'https://raw.githubusercontent.com/s7malvadaomatarino/ciencia-de-dados-3c/refs/heads/main/dados-globais.json';

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);

    const dados = await res.json();

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');

    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span>
    de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas} estão conectadas</span>
    em alguma rede social e passam em média  <span>${dados.tempo_medio} horas conectadas.</span>`

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();
