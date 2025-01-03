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

// Seleciona o contêiner onde os biscoitos cairão
const cookieContainer = document.getElementById("falling-cookies");

// Função para criar um biscoito
function createCookie() {
    const cookie = document.createElement("div");
    cookie.classList.add("cookie");

    // Posição horizontal inicial aleatória (entre 0 e a largura da janela)
    cookie.style.left = Math.random() * window.innerWidth + "px";

    // Tamanho aleatório para os biscoitos
    const size = Math.random() * 20 + 30; // Entre 30px e 50px
    cookie.style.width = size + "px";
    cookie.style.height = size + "px";

    // Duração aleatória da queda (entre 3s e 6s)
    const fallDuration = Math.random() * 3 + 3; // 3s a 6s

    // Define a animação com duração personalizada
    cookie.style.animation = `fall ${fallDuration}s linear, rotate ${fallDuration}s linear infinite`;

    // Adiciona o biscoito ao contêiner
    cookieContainer.appendChild(cookie);

    // Remove o biscoito após a animação
    setTimeout(() => {
        cookie.remove();
    }, fallDuration * 1000); // Duração total em milissegundos
}

// Cria biscoitos continuamente em posições e durações aleatórias
setInterval(createCookie, 500); // Um novo biscoito a cada 500ms

