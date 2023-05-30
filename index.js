const menu = document.querySelector(".menu");

const openMenu = () => {
    menu.style.display = 'block';
}

const closeMenu = () => {
    menu.style.display = 'none';
}

document.querySelector('.nav-btn').addEventListener('click', openMenu);
document.querySelector('.close-btn').addEventListener('click', closeMenu);