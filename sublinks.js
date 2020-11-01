// Submenu functionality

import sublinks from './data.js';

const links = [...document.querySelectorAll('.link')];
const submenu = document.querySelector('.submenu');
const headerImg = document.querySelector('.header-img');
const navbar = document.querySelector('.nav-bar');

links.forEach((link) => {
  link.addEventListener('mouseover', function (e) {
    const location = e.target.getBoundingClientRect();
    const top = location.top;
    const left = location.left;
    const center = (location.left + location.right) / 2;
    const linkTitle = e.target.textContent;
    const targetObject = sublinks.find(({ category }) => category == linkTitle);

    if (targetObject) {
      const { links } = targetObject;

      const returnedHTML = links
        .map((link) => {
          return `<a class="submenu-link" href="${link.url}">${link.label}</a>`;
        })
        .join('');

      submenu.innerHTML = returnedHTML;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
    }
  });
});

headerImg.addEventListener('mouseover', function () {
  submenu.classList.remove('show');
});

navbar.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link')) {
    submenu.classList.remove('show');
  }
});
