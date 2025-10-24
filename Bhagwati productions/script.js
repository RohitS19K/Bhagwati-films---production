
// ----- GSAP Scroll Animations -----
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.animated').forEach((el) => {
  gsap.fromTo(el,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
});

// Hero parallax
gsap.to('.hero h1', {
  yPercent: -20,
  scrollTrigger: { trigger: '.hero', start: 'top top', scrub: true }
});

// Magnetic cursor
const cursor = document.querySelector('.custom-cursor');
document.querySelectorAll('a, .service-card, .site-card').forEach(el => {
  el.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1.6)`;
  });
  el.addEventListener('mouseleave', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
  });
});

// Optional: Barba.js fade transition between pages
barba.init({
  transitions: [{
    name: 'fade',
    leave(data) {
      return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
    },
    enter(data) {
      return gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
    }
  }]
});



