const messages = [
    "Sicura?",
    "Davvero Sicura??",
    "Tutto bene?",
    "Ti prego...",
    "Pensaci stronza!",
    "Se dici ancora di no mi arrabbio...",
    "Veramente tanto ...",
    "Tanto tanto...",
    "Va bene, mi arrendo 😢...",
    "Scherzo, accetta ti prego! ❤️"
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
