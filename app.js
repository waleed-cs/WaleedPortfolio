document.querySelector(".year").innerHTML = new Date().getFullYear();
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });
//goUp button

const goUp = document.querySelector(".goUp");
const aboutMeSection = document.querySelector("#aboutMe");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 200) {
    goUp.classList.add("show");
  } else {
    goUp.classList.remove("show");
  }

  if (this.scrollY >= 320) {
    aboutMeSection.classList.add("show");
  } else {
    aboutMeSection.classList.remove("show");
  }
});

goUp.addEventListener("click", () => {
  // goUp.style.
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//slider animation
tl.to(".slider", { y: "-150%", duration: 1, delay: 0.25 });

//text animation
tl.to(".hide span", { y: "0%", stagger: 0.25 });

//hand waving animation
tl.fromTo(
  "#arm",
  { rotation: "0deg" },
  { rotation: "-8.5deg", repeat: -1, yoyo: true, duration: 0.5 }
);

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  navLinks.forEach((link, index) => {
    if (link.style.animation == "") {
      link.style.animation = `navLinksFade .5s ease forwards ${
        index / 7 + 0.3
      }s`;
    } else {
      link.style.animation = "";
    }
  });
});
