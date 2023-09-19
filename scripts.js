const reais = document.getElementById("reais");
const dolares = document.getElementById("dolares");

reais.addEventListener('input', () => {
    const valorReais = parseFloat(reais.value)
    const conversao = valorReais * 0.21;

    dolares.value = conversao.toFixed(2);
})

dolares.addEventListener('input', () => {
    const valorDolares = parseFloat(dolares.value)
    const conversao = valorDolares * 4.86;

    reais.value = conversao.toFixed(2);
})
