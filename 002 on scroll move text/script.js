gsap.to('#page1 h1',{
  transform: 'translateX(-55%)',
  fontWeight: '1',
  scrollTrigger: {
    trigger: '#page1',
    scroll: 'body',
    // markers: true,
    start: 'top',
    end: 'top -200%',
    scrub: 2,
    pin: true,
  }
})