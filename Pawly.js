const title = document.getElementById("interactive-title");
const vibrantColors = ["#FF5733", "#28B463", "#3498DB", "#9B59B6", "#FFD700"];

title.addEventListener("mouseover", () => {
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    title.style.color = randomColor;
    title.style.transform = "scale(1.8)";
    title.style.textShadow = `0 0 20px ${randomColor}`;
});

title.addEventListener("mouseout", () => {
    title.style.color = "#FFFFFF";
    title.style.transform = "scale(1)";
    title.style.textShadow = "none";
});

const container = document.getElementById("falling-cookies");

function createCookie() {
    const cookie = document.createElement("div");
    cookie.classList.add("cookie");
    const randomPosition = Math.random() * window.innerWidth;
    const fallDuration = Math.random() * 5 + 3;
    const spinDuration = Math.random() * 3 + 2;
    cookie.style.left = `${randomPosition}px`;
    cookie.style.animationDuration = `${fallDuration}s, ${spinDuration}s`;
    container.appendChild(cookie);
    setTimeout(() => {
        if (cookie.parentNode) cookie.remove();
    }, fallDuration * 1000);
}

function startFallingCookies() {
    setInterval(() => {
        createCookie();
    }, Math.random() * 2000 + 1000);
}

startFallingCookies();
