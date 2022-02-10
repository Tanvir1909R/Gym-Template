const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector(".nav_logo");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
});

// animation

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-join',{
  duration:0.6,
  opacity:0,
  y:-150,
  stagger:0.3
});

gsap.from('.animeSer',{
  scrollTrigger:'.animeSer',
  duration:0.5,
  opacity:0,
  x:-150,
  stagger:0.12
});
gsap.from('.animeMemCard',{
  scrollTrigger:'.animeMemCard',
  duration:1,
  opacity:0,
  y:-150,
  stagger:0.2
});
gsap.from('.animeTeam',{
  scrollTrigger:'.animeTeam',
  duration:1.6,
  opacity:0,
  y:-150,
  stagger:0.2,
  delay:0.5
});
gsap.from('.animeEmail',{
  scrollTrigger:'.animeEmail',
  duration:1,
  opacity:0,
  x:-150,
  stagger:0.2,
  delay:0.2
});

