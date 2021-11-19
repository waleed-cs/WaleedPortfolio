const progressBar = document.querySelector("#progressBar");
const body = document.querySelector("body");

const animateProgressBar = () => {
  let scrollDistance = -body.getBoundingClientRect().top;
  let progressWidth =
    (scrollDistance /
      (body.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  let percentValue = Math.floor(progressWidth);
  if (percentValue == 99) {
    percentValue = 100;
  }
  progressBar.style.width = percentValue + "%";
};

window.addEventListener("scroll", animateProgressBar);
