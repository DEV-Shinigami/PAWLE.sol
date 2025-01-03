// Seleciona o título
const title = document.getElementById("interactive-title");

// Define as cores para o efeito de animação
const colors = ["#FFD700", "#FF5733", "#28B463", "#3498DB", "#9B59B6"];
let colorIndex = 0;

// Função para mudar as cores automaticamente
function animateTitleColors() {
    title.style.color = colors[colorIndex];
    title.style.textShadow = `0 0 15px ${colors[colorIndex]}`;
    colorIndex = (colorIndex + 1) % colors.length;
}

// Inicia o efeito de troca de cores
setInterval(animateTitleColors, 1000);

// Adiciona um evento ao clique no título
title.addEventListener("click", () => {
    title.style.transform = "scale(1.5)"; // Aumenta de tamanho ao clicar
    setTimeout(() => {
        title.style.transform = "scale(1)"; // Volta ao tamanho original
    }, 300);
});
