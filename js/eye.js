// enable movement of eye in the logo
let body = document.querySelector("body");
let eye = document.querySelector(".eye");

body.addEventListener('mousemove', (event) => {
    let mouseX = eye.getBoundingClientRect().left;
    let mouseY = eye.getBoundingClientRect().top;

    mouseX = event.clientX - mouseX;
    mouseY = event.clientY - mouseY;

    let radians = Math.atan2(mouseX, mouseY);
    let rotationDegrees = -1 * radians * (180 / Math.PI) + 90;

    eye.style.transform = `rotate(${rotationDegrees}deg)`;
});