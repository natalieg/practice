
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let aniDiv = document.getElementById("animation");
let aniDiv2 = document.getElementById("animation2");


function toggleColor() {
    button1.classList.toggle("blue");
    button1.classList.toggle("red");
    button2.classList.toggle("green");

    animation.classList.toggle("animation")
    animation2.classList.toggle("animation")
}

button1.addEventListener('click', function () {
    toggleColor();
});