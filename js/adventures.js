import setup from './charinfo.js';

for (let i = 0; i <= 3; i++) {
    setup.choice[i].innerHTML = setup.adventures[i];

    setTimeout(() => {
        setup.choice[i].onclick = () => {
            localStorage.setItem('adventure', setup.choice[i].innerHTML);
            let chosenAdventure = localStorage.getItem('adventure');
            document.getElementById('adventure').innerHTML = chosenAdventure;

            let fitScreen = (mobile) => {
                if (mobile.matches) {
                    setup.preview.style.display = 'none';
                    setup.placeholder.style.display = 'none';
                } else {
                    setup.placeholder.style.display = 'block';
                    setup.preview.style.display = 'block';
                }
            }

            let mobile = window.matchMedia('(max-width: 1200px)');
            mobile.addListener(fitScreen);

            window.onload = () => {
                window.fitScreen = fitScreen(mobile);
            }

            setup.imgStyles();

            if (chosenAdventure) {
                localStorage.setItem('adventurer', setup.adventurer[i]);
                localStorage.setItem('companion', setup.companion[i]);
                localStorage.setItem('equipment', setup.equipment[i]);
                localStorage.setItem('prevImg', setup.imgArray[i].id);
                document.getElementById('adventurer').innerHTML = localStorage.getItem('adventurer');
                document.getElementById('companion').innerHTML = localStorage.getItem('companion');
                document.getElementById('equipment').innerHTML = localStorage.getItem('equipment');
                document.getElementById(localStorage.getItem('prevImg')).style.display = 'flex';
            }

            setup.switchImg();

            if (setup.choice[i].innerHTML == setup.adventures[0]) {
                setup.continueBtn.innerHTML = '<span>Continue &#187;</span>';
                setup.continueBtn.style = 'animation: continue 2s infinite ease';
                setup.continueBtn.disabled = false;
            } else {
                setup.continueBtn.innerHTML = 'Not yet available!';
                setup.continueBtn.style = 'animation: fadeIn 1.5s ease;';
                setup.continueBtn.disabled = true;
            }

            setup.continueBtn.onclick = () => {
                document.getElementById('transition').style.display = 'block';
                setTimeout(() => {
                    window.location = '../' + localStorage.getItem('adventure').split(' ').join('-');
                }, 1000)
            };
        };
    }, 1000);
}