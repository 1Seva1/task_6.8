const trafficLightEl = document.querySelector('#allLight');
let checkLight = document.querySelectorAll('#trafficLight');

trafficLightEl.addEventListener('click', makeGreen)
function makeGreen() {
    checkLight[0].style.background = ('green');
    checkLight[1].style.background = ('black');
    checkLight[2].style.background = ('black');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}
function makeYellow() {
    checkLight[0].style.background = ('black');
    checkLight[1].style.background = ('yellow');
    checkLight[2].style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}
function makeRed() {
    checkLight[0].style.background = ('black');
    checkLight[1].style.background = ('black');
    checkLight[2].style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}
