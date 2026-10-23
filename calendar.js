
const photo = document.getElementById("dvd-photo");

let x = Math.random() * Math.max(0, window.innerWidth - 160);
let y = Math.random() * Math.max(0, window.innerHeight - 160);

// Random starting direction and speed
let speedX = (Math.random() * 2 + 2) *
    (Math.random() < 0.5 ? -1 : 1);

let speedY = (Math.random() * 2 + 2) *
    (Math.random() < 0.5 ? -1 : 1);

function movePhoto() {
    const maxX = window.innerWidth - photo.offsetWidth;
    const maxY = window.innerHeight - photo.offsetHeight;

    x += speedX;
    y += speedY;

    // Bounce from left and right edges
    if (x <= 0) {
        x = 0;
        speedX = Math.abs(speedX);
    } else if (x >= maxX) {
        x = maxX;
        speedX = -Math.abs(speedX);
    }

    // Bounce from top and bottom edges
    if (y <= 0) {
        y = 0;
        speedY = Math.abs(speedY);
    } else if (y >= maxY) {
        y = maxY;
        speedY = -Math.abs(speedY);
    }

    // Occasionally vary the speed slightly
    if (Math.random() < 0.008) {
        speedX = Math.sign(speedX) *
            (2 + Math.random() * 2);

        speedY = Math.sign(speedY) *
            (2 + Math.random() * 2);
    }

    photo.style.left = `${x}px`;
    photo.style.top = `${y}px`;

    requestAnimationFrame(movePhoto);
}

// Wait for the image to load before measuring it
if (photo.complete) {
    movePhoto();
} else {
    photo.addEventListener("load", movePhoto, { once: true });
}

// Keep the photo within the screen after resizing
window.addEventListener("resize", () => {
    x = Math.min(x, window.innerWidth - photo.offsetWidth);
    y = Math.min(y, window.innerHeight - photo.offsetHeight);

    x = Math.max(0, x);
    y = Math.max(0, y);
});
