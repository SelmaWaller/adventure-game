let choice = document.getElementsByTagName('li');
let preview = document.getElementById('preview');
let placeholder = document.getElementById('placeholder');
let continueBtn = document.getElementById('continueBtn');
let imgArray = document.getElementsByClassName('previewImg');
let infoText = document.getElementById('infoText');

const adventures = [`Enemies in a Faraway Galaxy`, `Prehistoric Rumbles`, 
`Medieval Struggles`, `In a World of Goblins and Unicorns`];
const adventurer = [`Ginro`, `Murodan`, `Hugo`, `Yggred`];
const companion = [`Z-013`, `Ferguson`, `Franz`, `Jenny`];
const equipment = [`Laser gun, anti-gravity boots`,
`1 pepperspray, 2 waterproof suits, 3 petri dishes`,
`Bow, 3 titanium arrows`, `2 health potions, 1 sleep potion`];

let imgStyles = () => {
    document.getElementById('information').style = 'animation: gradient 10s infinite ease-in-out, showRight 350ms ease-out; transform: translateX(0);';
    document.getElementById('storyBox').style.opacity = '1';
    infoText.style.display = 'block';
    for(const element of imgArray) {
        element.style.display = 'none';
    }
}

let switchImg = () => {
    if (preview.style.display == 'block') {
        preview.style.display = 'none';
        infoText.style.display = 'none';
    }
    placeholder.style = 'animation: hideLeft 0.4s ease;';
    setTimeout(() => {
        preview.style = 'display: block; z-index: 1';
        infoText.style = 'display: block; animation: enteringGame 300ms ease;';
        placeholder.style.display = 'none';
    }, 0);
}

export default {choice, preview, placeholder, imgArray,
    imgStyles, switchImg, infoText, adventures, adventurer, 
    companion, equipment, continueBtn}