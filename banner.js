const banners = document.querySelectorAll('.banner');
const left = document.querySelector('.banner-left');
const right = document.querySelector('.banner-right');

banners.forEach((banner, index) => {
  banner.style.left = `${index * 100}%`;
});

let counter = 0;
const autoScroll = function () {
  counter++;
  scroll();
};

let interval = setInterval(autoScroll, 8000);

left.addEventListener('click', () => {
  clearInterval(interval);
  counter--;
  scroll();
  interval = setInterval(autoScroll, 8000);
  console.log(counter);
});

right.addEventListener('click', () => {
  clearInterval(interval);
  counter++;
  scroll();
  interval = setInterval(autoScroll, 8000);
});

function scroll() {
  if (counter > banners.length - 1) {
    counter = 0;
  } else if (counter < 0) {
    counter = banners.length - 1;
  }
  banners.forEach(function (banner) {
    banner.style.transform = `translateX(-${counter * 100}%)`;
  });
}
