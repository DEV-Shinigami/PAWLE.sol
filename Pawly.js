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

// Seleciona o contêiner onde os biscoitos serão adicionados
const container = document.getElementById("falling-cookies");

// Função para criar um biscoito
function createCookie() {
    const cookie = document.createElement("div");
    cookie.classList.add("cookie");

    // Define posição horizontal aleatória
    const randomPosition = Math.random() * window.innerWidth;

    // Define duração da queda e rotação
    const fallDuration = Math.random() * 5 + 3; // Entre 3 e 8 segundos
    const spinDuration = Math.random() * 3 + 2; // Entre 2 e 5 segundos

    // Aplica estilos aleatórios
    cookie.style.left = `${randomPosition}px`;
    cookie.style.animationDuration = `${fallDuration}s, ${spinDuration}s`;

    // Adiciona o biscoito ao contêiner
    container.appendChild(cookie);

    // Remove o biscoito após a animação para evitar acumulação no DOM
    setTimeout(() => {
        cookie.remove();
    }, fallDuration * 1000);
}

// Função para criar biscoitos com intervalos aleatórios
function startFallingCookies() {
    setInterval(() => {
        createCookie();
    }, Math.random() * 2000 + 1000); // Entre 1 e 3 segundos
}

// Inicia os biscoitos caindo
startFallingCookies();

document.addEventListener("mousemove", (event) => {
    // Cria uma pegada
    const paw = document.createElement("div");
    paw.classList.add("paw-print");

    // Define a posição da pegada com base no cursor
    paw.style.left = `${event.pageX}px`;
    paw.style.top = `${event.pageY}px`;

    // Adiciona a pegada ao corpo
    document.body.appendChild(paw);

    // Remove a pegada após a animação
    setTimeout(() => {
        paw.remove();
    }, 2000);
});

// Seleciona o elemento "Pawly" no cabeçalho
const pawlyTrigger = document.getElementById("pawly-sound-trigger");

// Lista de sons
const barkSounds = [
    document.getElementById("bark-sound-1"),
];

// Função para reproduzir um som aleatório
function playRandomBark() {
    // Seleciona um som aleatório da lista
    const randomBark = barkSounds[Math.floor(Math.random() * barkSounds.length)];
    randomBark.currentTime = 0; // Reinicia o som
    randomBark.play(); // Reproduz o som
}

// Adiciona o evento de clique ao nome "Pawly"
pawlyTrigger.addEventListener("click", (event) => {
    event.preventDefault(); // Previne a ação padrão do link
    playRandomBark(); // Reproduz o som
});


