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

    // Seleciona todos os links de navegação que começam com "#"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            // Faz o scroll suave até o elemento alvo
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

