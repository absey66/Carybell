const messages = [
    "¿Estás segura, Cari? 🤨",
    "¿Pero segurísima? 😳",
    "Piénsalo bien, Carybell... 👀",
    "No seas mala 😢",
    "Mira que me voy a poner triste... 🥺",
    "Muy tristeeeee... 💔",
    "Si le das a 'Ño' otra vez, me desmayo 😵",
    "¿Así me pagas después de tanto amor? 😭",
    "Está bien... lo aceptaré... 😔",
    "Mentiraaaa, di que sí, Carybell. ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}