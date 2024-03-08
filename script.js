let tl = gsap.timeline();

tl.from("#nav, #nav img,#nav-links a, #btn button ", {
  y: -200,
  duration: 0.8,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#hero-Section h2", {
  y: 100,
  duration: 0.8,
  opacity: 0,
  stagger: 0.3,
});

tl.from("#hero-Section img", {
  y: 100,
  duration: 0.8,
  opacity: 0,
  stagger: 0.3,
});

tl.from("#scroll-btn", {
  opacity: 0,
});

tl.to("#scroll-btn", {
  y: 20,
  duration: 0.6,
  repeat: -1,
  yoyo: true,
});
