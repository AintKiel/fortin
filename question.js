/* =================================
   QUESTION PAGE
================================= */


/* =================================
   YES BUTTON
================================= */

function answerYes() {

    // Change this to the next page you want
    window.location.href = "pass.html";

}


/* =================================
   OFC BUTTON
================================= */

function answerOfc() {

    // "ofc" also means yes,
    // so it goes to the same next page.

    window.location.href = "pass.html";

}


/* =================================
   EXTRA INTERACTION
================================= */

const buttons = document.querySelectorAll(".choice-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-5px) rotate(-1deg)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0) rotate(0deg)";

    });

});