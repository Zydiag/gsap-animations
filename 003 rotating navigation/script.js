let active = 3;

let miniCircles = document.querySelectorAll('.miniCircle');
let sec = document.querySelectorAll('.sec');

gsap.to(miniCircles[active - 1], {
  opacity: 0.7,
});
console.log(sec)
gsap.to(sec[active - 1], {
  opacity: 1,
});

const greyOut = () => {
  gsap.to(miniCircles, {
    opacity: 0.2,
  });
  gsap.to(sec,{
    opacity: 0.2,
  })
};
miniCircles.forEach((miniCircle, index) => {
  miniCircle.addEventListener('click', () => {
    gsap.to('#circle', {
      rotate: 15 * (3 - index - 1),
      duration: 1,
    });
    greyOut();
    console.log(this)
    gsap.to(miniCircle,{
      opacity: 0.7,
    })
    gsap.to(sec[index],{
      opacity: 1,
    })
  });
});

gsap.to('#circle', {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 1,
});
