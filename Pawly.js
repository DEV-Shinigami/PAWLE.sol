// Seleção de elementos
const title = document.getElementById("interactive-title");
const vibrantColors = ["#FF5733", "#28B463", "#3498DB", "#9B59B6", "#FFD700"];

// Interatividade no título
title.addEventListener("mouseover", () => {
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    title.style.color = randomColor;
    title.style.transform = "scale(1.2)";
    title.style.textShadow = `0 0 10px ${randomColor}`;
});

title.addEventListener("mouseout", () => {
    title.style.color = "#FFFFFF";
    title.style.transform = "scale(1)";
    title.style.textShadow = "none";
});

// Seleciona o elemento "Pawly"
const pawlyTrigger = document.getElementById("pawly-sound-trigger");
const barkSound = document.getElementById("bark-sound-1");

// Função para alternar o som
function toggleBark() {
    if (barkSound.paused) {
        barkSound.currentTime = 0; // Reinicia o som
        barkSound.play(); // Toca o som
    } else {
        barkSound.pause(); // Pausa o som
        barkSound.currentTime = 0; // Reinicia para o início
    }
}

// Adiciona o evento de clique
pawlyTrigger.addEventListener("click", (event) => {
    event.preventDefault(); // Previne a ação padrão do link
    toggleBark(); // Chama a função para alternar o som
});

