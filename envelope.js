function openLetter() {
    const page = document.querySelector(".envelope-page");
    const seal = document.querySelector(".seal");

    // Stop the normal popping animation
    seal.style.animation = "none";

    // Give the ball a quick pressed/pop effect
    seal.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.2)" },
            { transform: "scale(0.9)" },
            { transform: "scale(1.05)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 350,
            easing: "ease-out"
        }
    );

    // Fade the page out
    setTimeout(() => {
        page.classList.add("opening");
    }, 300);

    // Go to letter.html
    setTimeout(() => {
        window.location.href = "letter.html";
    }, 900);
}

function goHome() {
    window.location.href = "index.html";
}