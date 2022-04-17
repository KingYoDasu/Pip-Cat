// References to DOM elements
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
const span = document.querySelector("span");

// The two images of the POP CAT
const openMouthImg = "./images/pip.jpeg";

// The two Popping sounds
const openMouthSound = new Audio("./sound/pip.wav");

// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mousedown", increment)

// Event Handers (Touch Screens)
btn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  openMouth();
});

btn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  increment();
});

// The functions which will perform the cool stuff
function openMouth() {
  popcat.src = openMouthImg;
  openMouthSound.play();
}

function increment() {
    span.innerHTML++;
}
