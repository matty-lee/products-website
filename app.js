import sublinks from './data.js';

const banners = document.querySelectorAll('.banner');
const left = document.querySelector('.banner-left');
const right = document.querySelector('.banner-right');

banners.forEach((banner, index) => {
  banner.style.left = `${index * 100}%`;
});

let counter = 0;

// setInterval(() => {
//   counter++;
//   scroll();
// }, 5000);

left.addEventListener('click', () => {
  counter--;
  scroll();
});

right.addEventListener('click', () => {
  counter++;
  scroll();
});

function scroll() {
  if (counter > banners.length - 1) {
    counter = 0;
  } else if (counter < 0) {
    counter = banners.length - 1;
  }
  banners.forEach(function (banner) {
    banner.style.transform = `translate(-${counter * 100}%)`;
  });
}

// Submenu functionality

const links = [...document.querySelectorAll('.link')];
const submenu = document.querySelector('.submenu');
const headerImg = document.querySelector('.header-img');
const navbar = document.querySelector('.nav-bar');

console.log(headerImg);

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

      const returnedHTML = links.map((link) => {
        return `<a class="submenu-link" href="${link.url}">${link.label}</a>`;
      }).join('');

      console.log(returnedHTML);

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
