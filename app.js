function nothing(){}

function playIntro() {
    playIntro = nothing
    var audio = new Audio('sounds/intro.mp3')
    audio.play();

    var a = setTimeout(function(){
        fadeInAvaliacao();
    }, 1000);
    
    var b = setTimeout(function(){
        fadeOutAvaliacao();
    }, 3500);

    var c = setTimeout(function(){
        fadeInCreator();
    }, 4500);
    
    var d = setTimeout(function(){
        fadeOutCreator();
    }, 7000);

    var e = setTimeout(function(){
        fadeOutBlack();
    }, 7500);

    var f = setTimeout(function(){
        fadeInButton();
    }, 13000)
}

let blackScreen = 1;

addEventListener("click", event =>{
    playIntro();
})
/*
function fadeOutBlack(){
    
    blackScreen-=0.01;
    blackScreenElement.style.opacity(blackScreen);
}*/

function fadeOutBlack() {
    var blackScreenElement = document.getElementById("blackScreen")
    var fadeEffect = setInterval(function () {
        if (!blackScreenElement.style.opacity) {
            blackScreenElement.style.opacity = 1;
        }
        if (blackScreenElement.style.opacity > 0) {
            blackScreenElement.style.opacity -= 0.01;
        } else {
            blackScreenElement.remove();
            clearInterval(fadeEffect);
        }
    }, 50);
}

function fadeInAvaliacao() {
    document.querySelector('#avaliacao')
        .classList.add('fade');
}

function fadeOutAvaliacao() {
    document.querySelector('#avaliacao')
        .classList.remove('fade');
}

function fadeInCreator() {
    document.querySelector('#creator')
        .classList.add('fade');
}

function fadeOutCreator() {
    document.querySelector('#creator')
        .classList.remove('fade');
}

var pop = new Audio('sounds/pop.wav')

function fadeInButton(){
    pop.play();
    document.querySelector('#iniciar')
        .classList.add('fade');
}