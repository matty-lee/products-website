import './sublinks.js';
import './banner.js';

const gearSquare = [...document.querySelectorAll('.gear-square')];

gearSquare.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.firstElementChild.style = 'transform: scale(1.1)';
  });
  square.addEventListener('mouseout', () => {
     square.firstElementChild.style = 'transform: scale(1)';
  });
});
