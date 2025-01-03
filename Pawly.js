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

// Cookies animados
const container = document.getElementById("falling-cookies");

function createCookie() {
    const cookie = document.createElement("div");
    cookie.classList.add("cookie");
    const randomPosition = Math.random() * window.innerWidth;
    cookie.style.left = `${randomPosition}px`;
    container.appendChild(cookie);
    setTimeout(() => {
        if (cookie.parentNode) cookie.remove();
    }, 5000);
}

function startFallingCookies() {
    setInterval(() => {
        createCookie();
    }, Math.random() * 2000 + 1000);
}

startFallingCookies();
