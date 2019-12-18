import id from './ids.js';
import story from './story.js';

document.getElementById('adventure').innerHTML = localStorage.getItem('adventure');
document.getElementById('adventurer').innerHTML = localStorage.getItem('adventurer');
document.getElementById('companion').innerHTML = localStorage.getItem('companion');
document.getElementById('equipment').innerHTML = localStorage.getItem('equipment');

id.title.innerHTML = story.card1.line;

window.onload = () => {
    localStorage.removeItem('answer');
}
let adventures = () => {
    window.location = '../';
}
id.tryAgain.onclick = () => {
    localStorage.removeItem('answer');
    window.location.reload();
}
id.leaveAdventure.onclick = () => {
    adventures();
}
id.newAdventure.onclick = () => {
    adventures();
}

for (let i = 0; i <= 1; i++) {
    id.choice[i].innerHTML = story.card1[i + 1];

    id.choice[i].onclick = () => {
        let fitScreen = (mobile) => {
            if (mobile.matches) {
                id.placeholder.style.display = 'none';
            }else {
                id.placeholder.style.display = 'block';
            }
        }
        
        let mobile = window.matchMedia('(max-width: 1200px)');
        mobile.addListener(fitScreen);

        window.onload = () => {
            window.fitScreen = fitScreen(mobile);
        }

        localStorage.setItem('answer', id.choice[i].innerHTML);
        let storedAnswer = localStorage.getItem('answer');
        placeholder.style = 'animation: showPrev 0.7s ease;';

        setTimeout(() => {
            placeholder.style = 'display: block;';
        }, 690);

        console.log(storedAnswer);

        //question 2a
        if (storedAnswer == story.card1[1]) {
            id.title.innerHTML = story.card2_1.line;
            id.handle.style = 'animation: handle 2s infinite; animation-delay: 1s';
            id.lock.style = 'animation: lock 2s infinite; animation-delay: 1s';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card2_1[i + 1];
            }
        }

        //question 2b 
        if (storedAnswer == story.card1[2]) {
            id.title.innerHTML = story.card2_2.line;
            id.zoie.style.display = 'flex';
            id.room.style.display = 'none';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card2_2[i + 1];
            }
        }

        //question 3
        function cardNumber3() {
            id.title.innerHTML = story.card3.line;
            id.room.style.display = 'flex';
            id.zoie.style.display = 'none';
            id.handle.style.animation = 'none';
            id.lock.style.animation = 'none';
            id.creature.style = 'display: block';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card3[i + 1];
            }
        }

        if (storedAnswer == story.card2_1[i + 1] ||
            storedAnswer == story.card2_2[i + 1]) {
            cardNumber3();
        }

        //question 4a
        if (storedAnswer == story.card3[1]) {
            id.title.innerHTML = story.card4_1.line;
            id.zoie.style.display = 'none';
            id.gun.style.display = 'flex';
            id.room.style.display = 'none';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card4_1[i + 1];
            }
        }

        //question 4b
        if (storedAnswer == story.card3[2]) {
            id.title.innerHTML = story.card4_2.line;
            id.boots.style.display = 'flex';
            id.room.style.display = 'none';
            id.zoie.style.display = 'none';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card4_2[i + 1];
            }
        }

        //question 5a-a
        if (storedAnswer == story.card4_1[1]) {
            id.title.innerHTML = story.card5_1_1.line;
            id.gun.style.display = 'none';
            id.ginro.style.display = 'block';
            id.ginroEye1.style = 'background-size: 105%; background-position: -20px -2px;';
            id.ginroEye2.style = 'background-size: 105%; background-position: 19px -2px;';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card5_1_1[i + 1];
            }
        }

        //question 5a-b
        if (storedAnswer == story.card4_1[2]) {
            id.title.innerHTML = story.card5_1_2.line;
            id.gun.style.display = 'none';
            id.ginro.style.display = 'flex';
            id.ginroContainer.style = 'animation: stance 2s infinite;';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card5_1_2[i + 1];
            }
        }

        //question 5b-a
        if (storedAnswer == story.card4_2[1]) {
            id.title.innerHTML = story.card5_2_1.line;
            id.boots.style.display = 'none';
            id.alien.style.display = 'block';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card5_2_1[i + 1];
            }
        }

        //question 5b-b
        if (storedAnswer == story.card4_2[2]) {
            id.title.innerHTML = story.card5_2_2.line;
            id.boots.style.display = 'none';
            id.zoie.style.display = 'flex';
            id.zoieContainer.style = 'animation: stance 2s infinite;';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card5_2_2[i + 1];
                id.eyes[i].style = 'transform: rotate(0deg); animation: none;';
            }
        }

        //question 6a-a
        if (storedAnswer == story.card5_1_1[1]) {
            id.title.innerHTML = story.card6_1_1.line;
            id.darkness.style.display = 'flex';
            id.alien.style.display = 'none';
            id.ginro.style.display = 'none';
            for (let i = 0; i <= 1; i++) {
                id.playAgain[i].style.display = 'block';
                id.choice[i].innerHTML = story.card6_1_1[i + 1];
            }
        }

        if (storedAnswer == story.card6_1_1[i + 1] || storedAnswer == story.card6_2_1[i + 1] || storedAnswer == story.card6_2_2[i + 1] || storedAnswer == story.card7[2] || storedAnswer == story.card8[2] || storedAnswer == story.card9[2] || storedAnswer == story.card11[i + 1]) {
            id.placeholder.style.animation = 'none';
        }

        //question 6a-b 
        if (storedAnswer == story.card5_1_1[2]) {
            id.title.innerHTML = story.card6_1_2.line;
            id.ginro.style.display = 'none';
            id.closeup.style.display = 'flex';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card6_1_2[i + 1];
            }
        }

        //question 6b-a
        if (storedAnswer == story.card5_1_2[i + 1] || storedAnswer == story.card5_2_1[i + 1]) {
            id.title.innerHTML = story.card6_2_1.line;
            id.darkness.style.display = 'flex';
            id.spaceant.style.display = 'flex';
            id.ginro.style.display = 'none';
            id.alien.style.display = 'none';
            for (let i = 0; i <= 1; i++) {
                id.playAgain[i].style.display = 'block';
                id.choice[i].innerHTML = story.card6_2_1[i + 1];
            }
        }

        //question 6b-b
        if (storedAnswer == story.card5_2_2[i + 1]) {
            id.title.innerHTML = story.card6_2_2.line;
            id.zoie.style.display = 'none';
            id.darkness.style.display = 'flex';
            for (let i = 0; i <= 1; i++) {
                id.playAgain[i].style.display = 'block';
                id.choice[i].innerHTML = story.card6_2_2[i + 1];
            }
        }

        //question 7
        if (storedAnswer == story.card6_1_2[i + 1]) {
            id.title.innerHTML = story.card7.line;
            id.closeup.style.display = 'none';
            id.shuttle.style.display = 'flex';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card7[i + 1];
            }
        }

        //question 8
        if (storedAnswer == story.card7[i + 1]) {
            id.title.innerHTML = story.card8.line;
            id.shuttle.style.display = 'none';
            id.insideShuttle.style.display = 'flex';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card8[i + 1];
            }
        }

        //question 9
        if (storedAnswer == story.card8[i + 1]) {
            id.title.innerHTML = story.card9.line;
            id.insideShuttle.style.display = 'none';
            id.spacestation.style.display = 'flex';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card9[i + 1];
            }
        }

        //question 10
        if (storedAnswer == story.card9[i + 1]) {
            id.title.innerHTML = story.card10.line;
            id.spacestation.style.display = 'none';
            id.stationCrash.style.display = 'flex';
            for (let i = 0; i <= 1; i++) {
                id.choice[i].innerHTML = story.card10[i + 1];
            }
        }

        //question 11 
        if (storedAnswer == story.card10[i + 1]) {
            id.title.innerHTML = story.card11.line;
            id.stationCrash.style.display = 'none';
            id.home.style.display = 'flex';
            for (let i = 0; i <= 1; i++) {
                id.playAgain[i].style.display = 'block';
                id.playAgain[0].innerHTML = `<span>&nbsp; Play again</span>`
                id.choice[i].innerHTML = story.card11[i + 1];
            }
        }
    }
}