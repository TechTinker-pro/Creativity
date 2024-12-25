let btn = document.querySelector('.btn');
const len = 200; 
function moveButton() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - len));
    const randomY = Math.floor(Math.random() * (window.innerHeight - len));
    btn.style.position = 'absolute';
    btn.style.top = `${randomY}px`;
    btn.style.left = `${randomX}px`;
}
btn.addEventListener('mouseover', moveButton);
