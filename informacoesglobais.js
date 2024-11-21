const url = 'https://raw.githubusercontent.com/s7malvadaomatarino/ciencia-de-dados-3c/refs/heads/main/dados-globais.json';

async function visualiarinformacoesGlobais(){
const res =await fetch(url);

const dados = await res.json();

}
visualiarinformacoesGlobais();