const img1 = document.querySelector('#img1')

gsap.to('.videoHolder',{
  scrollTrigger: {
    trigger: "#main",
    start: 'top top',
    scrub: 2,
    pin: '#main',
  },
  width: '100%',
})
gsap.to('#img1',{
  scrollTrigger: {
    trigger: "#main",
    start: 'top top',
    scrub: 3,
  },
  left: '-600px',
  opacity: 0,

})

gsap.to('.holder1',{
  scrollTrigger: {
    trigger: "#main",
    start: 'top top',
    scrub: 3,
  },
  left: '-300px',
  opacity: 0,

})
gsap.to('#img6',{
  scrollTrigger: {
    trigger: "#main",
    start: 'top top',
    scrub: 3,
  },
  right: '-600px',
  opacity: 0,

})

gsap.to('.holder2',{
  scrollTrigger: {
    trigger: "#main",
    start: 'top top',
    scrub: 3,
  },
  right: '-300px',
  opacity: 0,

})