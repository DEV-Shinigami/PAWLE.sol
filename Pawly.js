// Seleção de elementos
const title = document.getElementById("interactive-title");
const vibrantColors = ["#FF5733", "#28B463", "#3498DB", "#9B59B6", "#FFD700"];

// Interatividade no título
if (title) {
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
}

// Função para trocar o idioma
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-en], [data-pt], [data-es], [data-fr]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`) || el.textContent;
    });
}

// Adiciona o evento de alteração no seletor de idioma
const languageSelector = document.querySelector('.language-selector select');
if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
        switchLanguage(e.target.value);
    });
}

// Função de scroll suave usando scrollIntoView
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Garante que a página volte ao topo ao recarregar
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

// Atualiza o ano no footer dinamicamente
const footerText = document.querySelector('footer p');
if (footerText) {
    footerText.textContent = `© ${new Date().getFullYear()} Pawly. All Rights Reserved.`;
}

// Adiciona classe ao rolar a página
window.addEventListener("scroll", () => {
    const header = document.getElementById("unique-header");
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("small");
        } else {
            header.classList.remove("small");
        }
    }
});

// Efeito parallax no background ao mover o mouse
let lastMouseX = 0, lastMouseY = 0;
document.addEventListener("mousemove", (e) => {
    const header = document.getElementById("unique-header");
    if (header) {
        const x = (e.clientX / window.innerWidth) * 10 - 5;
        const y = (e.clientY / window.innerHeight) * 10 - 5;

        if (Math.abs(x - lastMouseX) > 0.1 || Math.abs(y - lastMouseY) > 0.1) {
            header.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
            lastMouseX = x;
            lastMouseY = y;
        }
    }
});
