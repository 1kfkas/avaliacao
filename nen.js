function nothing(){}

function playIntro() {
    playIntro = nothing;
    var audio = new Audio('sounds/nen.mp3');
    audio.play();
    audio.loop = true;
}

addEventListener("click", (event) => {
    playIntro();
})