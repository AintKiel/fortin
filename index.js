let currentSlide = 1;

let yesSize = 1;


function goToSlide(slideNumber) {

    const current = document.getElementById(`slide-${currentSlide}`);
    const next = document.getElementById(`slide-${slideNumber}`);

    if (!next) return;

    current.classList.remove("active");

    next.classList.add("active");

    currentSlide = slideNumber;
}


/* =========================
   NO THANKS BUTTON
========================= */

function makeYesBigger() {

    const yesButton = document.getElementById("yes-button");

    yesSize += 0.35;

    yesButton.style.transform = `scale(${yesSize})`;
}