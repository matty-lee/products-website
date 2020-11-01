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
