let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

document.querySelectorAll('nav a').forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-times');
        nav.classList.remove('active');
    }
});
