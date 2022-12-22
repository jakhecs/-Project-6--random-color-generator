const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const containerColorEl = document.createElement("div");
    containerColorEl.classList.add("container__color");
    containerEl.appendChild(containerColorEl);
}

const containerColorEls = document.querySelectorAll(".container__color");

generateColors();

function generateColors() {
    containerColorEls.forEach((containerColorEl)=>{
        const newColorCode = randomColor();
        containerColorEl.style.backgroundColor = "#" + newColorCode;
        containerColorEl.innerText = "#"+newColorCode;
    });
}


function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum,randomNum + 1);
    }
    return colorCode;
}