let circle = document.getElementById('circle');
let frames = document.querySelectorAll('.frame');
let circleWidth = parseFloat(getComputedStyle(circle).width);
let circleHeight = parseFloat(getComputedStyle(circle).height);

const lerp = (a, b, t) => a * (1 - t) + b * t;

window.addEventListener('mousemove', (e) => {
  gsap.to(circle, {
    x: e.clientX - circleWidth / 2,
    // x: e.clientX,
    // y: e.clientY,
    y: e.clientY - circleHeight / 2,
    duration: 0.2,
    ease: Expo,
  });
});
frames.forEach((frame) => {
  frame.addEventListener('mousemove', (e) => {
    const dimensions = frame.getBoundingClientRect();

    let xStart = dimensions.x;
    let xEnd = dimensions.x + dimensions.width;

    let newRange = gsap.utils.mapRange(xStart, xEnd, 0, 1, e.clientX);
    console.log(newRange);
    gsap.to(circle, {
      scale: 8,
    });
    gsap.to(frame.children, {
      color: '#fff',
      duration: 0.4,
      y: '-5vw',
    });
    gsap.to(frame.children, {
      x: lerp(-50, 50, newRange),
      duration: 0.2,
    });
  });
  frame.addEventListener('mouseleave', (e) => {
    gsap.to(circle, {
      scale: 1,
    });
    gsap.to(frame.children, {
      color: '#000',
      y: '0',
      x: 0,
    });
  });
});
