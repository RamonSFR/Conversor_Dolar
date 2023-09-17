const reais = document.getElementById('reais');
const dolares = document.getElementById('dolares');



reais.addEventListener('input', () => {
    const valorReal = parseFloat(reais.value);
    const taxaConversao = 0.21 // Para o dia 17/09/2023 ás 20:20 BRT

    const valorDolar = valorReal * taxaConversao;
    dolares.value = valorDolar.toFixed(2);
});

dolares.addEventListener('input', () => {
    const valorDolar2 = parseFloat(dolares.value);
    const taxaConversao2 = 4.87; // Para o dia 17/09/2023 ás 20:20 BRT

    const valorReal2 = valorDolar2 * taxaConversao2;
    reais.value = valorReal2.toFixed(2);
})