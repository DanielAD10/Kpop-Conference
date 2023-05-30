const menu = document.querySelector(".overlay");

const openMenu = () => {
    document.body.classList.add('stop-scrolling');
    menu.style.display = 'block';
}

const closeMenu = () => {
    menu.style.display = 'none';
    document.body.classList.remove('stop-scrolling');
}

document.querySelector('.nav-btn').addEventListener('click', openMenu);
document.querySelector('.close-btn').addEventListener('click', closeMenu);