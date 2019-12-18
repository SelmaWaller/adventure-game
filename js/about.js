let content = document.getElementById('aboutContent');

let about = () => {
    content.style.display = 'flex';
}

document.getElementById('closeAbout').onclick = () => {
    content.style.display = 'none';
}