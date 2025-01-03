// Seleciona o título
const title = document.getElementById("interactive-title");

// Define as cores vibrantes para o hover
const vibrantColors = ["#FF5733", "#28B463", "#3498DB", "#9B59B6", "#FFD700"];

// Adiciona o evento de "mouseover" para interatividade
title.addEventListener("mouseover", () => {
    // Escolhe uma cor aleatória do array
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    title.style.color = randomColor; // Aplica a cor vibrante
    title.style.transform = "scale(1.8)"; // Aumenta bastante o tamanho
    title.style.textShadow = `0 0 20px ${randomColor}`; // Adiciona sombra
});

// Adiciona o evento de "mouseout" para restaurar o estado original
title.addEventListener("mouseout", () => {
    title.style.color = "#FFFFFF"; // Volta para o branco
    title.style.transform = "scale(1)"; // Volta ao tamanho original
    title.style.textShadow = "none"; // Remove a sombra
});