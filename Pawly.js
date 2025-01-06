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

    // Função personalizada para scroll suave
    function smoothScroll(target, duration) {
        const element = document.documentElement || document.body; // Elemento principal do documento
        const start = element.scrollTop; // Posição inicial do scroll
        const targetPosition = target.getBoundingClientRect().top; // Posição do alvo em relação à viewport
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, start, targetPosition, duration);
            element.scrollTop = run; // Atualiza a posição do scroll
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Função de easing para suavizar a animação
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Adiciona o evento de clique aos links do cabeçalho
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute("href"); // Obtém o ID do alvo
            const target = document.querySelector(targetId);

            if (target) {
                smoothScroll(target, 1000); // Define a duração (1000ms = 1 segundo)
            }
        });
    });

 // Garante que a página volte ao topo ao recarregar
    window.addEventListener("beforeunload", function () {
        window.scrollTo(0, 0); // Move o scroll para o topo da página
    });

