const reais = document.getElementById("reais");
const dolares = document.getElementById("dolares");

reais.addEventListener('input', () => {
    const valorReais = parseFloat(reais.value);
    const taxaConversao = valorReais * 4.85; // Para o dia 18/09/2023 15:23 BRT

    const valorDolares = taxaConversao;
    dolares.value = valorDolares.toFixed(2);
})

dolares.addEventListener('input', () => {
    const valorDolares = parseFloat(reais.value);
    const taxaConversao = valorDolares * 0.21; // Para o dia 18/09/2023 15:23 BRT

    const valorReais = taxaConversao;
    reais.value = valorReais.toFixed(2);
})