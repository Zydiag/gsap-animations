const tl = gsap.timeline();
tl.from("nav div", {
  y: -100,
  duration: 1,
  stagger: 0.5
});

tl.from('main h1',{
  scale: 0,
  duration: 1,
  stagger: 0.5
})
tl.from('main #scroll',{
  opacity: 0,
  scale: 0,
  stagger: 0.3,
})
tl.to('main #scroll',{
  y: 50,
  duration: 1,
  repeat: -1,
  yoyo: true,
})
