const inVisibleWithCoordinates = function (reveal) {
    return function() {
      reveal.forEach(el => {
        const { top, bottom } = el.getBoundingClientRect();
        console.log(top, bottom);
        if (bottom < 0 || top > window.innerHeight) {
          el.classList.remove('reveal_active');
        } else {
          el.classList.add('reveal_active');
        }
        console.log(el, el.classList.contains('reveal_active'));
      });
    };
  }

const reveal = [...document.querySelectorAll('.reveal')];
const inVisible = inVisibleWithCoordinates(reveal);
  
document.addEventListener('scroll', inVisible);