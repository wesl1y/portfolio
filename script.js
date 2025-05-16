const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

function sendWhats(event) {
    event.preventDefault();
    const nome = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phone = '5582981739990';
    const text = `Olá, me chamo ${nome}, ${message}`;
    const msgFormat = encodeURIComponent(text);
    const url = `https://wa.me/${phone}?text=${msgFormat}`;
    window.open(url, '_blank');
}

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});