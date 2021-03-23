const back = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector(".gradient");

function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    back.textContent = body.style.background + ";";
}

// We either use an event listener or we can use the oninput attribute

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);


