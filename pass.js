let enteredPasscode = "";

const correctPasscode = "0821";

const maxLength = 4;


function enterNumber(number) {

    // Don't allow more than 4 numbers
    if (enteredPasscode.length >= maxLength) {
        return;
    }

    enteredPasscode += number;

    updateDisplay();


    // Check automatically after 4 digits
    if (enteredPasscode.length === maxLength) {

        if (enteredPasscode === correctPasscode) {

            // Correct password
            window.location.href = "calendar.html";

        } else {

            // Wrong password
            window.location.href = "wrongpass2.html";
        }
    }
}


function updateDisplay() {

    const display =
        document.getElementById("passcode-display");

    const slots =
        display.querySelectorAll("span");


    slots.forEach((slot, index) => {

        if (index < enteredPasscode.length) {

            slot.textContent = "•";

        } else {

            slot.textContent = "_";

        }

    });
}


function clearPasscode() {

    enteredPasscode = "";

    updateDisplay();
}