const menu = document.querySelector('.overlay');

const openMenu = () => {
  document.body.classList.add('stop-scrolling');
  menu.style.display = 'block';
};

const closeMenu = () => {
  menu.style.display = 'none';
  document.body.classList.remove('stop-scrolling');
};

document.querySelector('.nav-btn').addEventListener('click', openMenu);
document.querySelector('.close-btn').addEventListener('click', closeMenu);

window.addEventListener('DOMContentLoaded', () => {
  const url = window.location.pathname;

  const homeLink = document.querySelector('.home-link');
  const aboutLink = document.querySelector('.about-link');

  if (url === '/index.html' || url === '/' || url === '/Kpop-Conference/index.html') {
    homeLink.classList.add('text-danger');
    aboutLink.classList.remove('text-danger');
  }
  if (url === '/about.html' || url === '/Kpop-Conference/about.html') {
    aboutLink.classList.add('text-danger');
    homeLink.classList.remove('text-danger');
  }

  const memberButton = document.querySelector('.more-btn');
  const memberExpanded = memberButton.getAttribute('aria-expanded');
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  function handleMediaChange(e) {
    const memberCard = document.querySelectorAll('.member-card');
    if (e.matches && memberExpanded !== true) {
      for (let i = 0; i < memberCard.length; i += 1) {
        if (i > 1) {
          memberCard[i].style.display = 'none';
          memberCard[i].setAttribute('data-visible', false);
        }
      }
    } else {
      for (let i = 0; i < memberCard.length; i += 1) {
        if (i > 1) {
          memberCard[i].style.display = 'flex';
          memberCard[i].setAttribute('data-visible', true);
        }
      }
    }
  }

  mediaQuery.addEventListener('change', handleMediaChange);

  handleMediaChange(mediaQuery);

  memberButton.addEventListener('click', () => {
    const memberExpanded = memberButton.getAttribute('aria-expanded');
    const memberCard = document.querySelectorAll('.member-card');
    if (memberExpanded === 'false') {
      for (let i = 0; i < memberCard.length; i += 1) {
        if (i > 1) {
          memberCard[i].style.display = 'flex';
          memberCard[i].setAttribute('data-visible', true);
        }
      }
      memberButton.setAttribute('aria-expanded', true);
      memberButton.innerHTML = '<span>LESS<i class="fas fa-angle-up text-danger"></i></span>';
    } else if (memberExpanded === 'true') {
      for (let i = 0; i < memberCard.length; i += 1) {
        if (i > 1) {
          memberCard[i].style.display = 'none';
          memberCard[i].setAttribute('data-visible', false);
        }
      }
      memberButton.setAttribute('aria-expanded', false);
      memberButton.innerHTML = '<span>MORE<i class="fas fa-angle-down text-danger"></i></span>';
    }
  });
});