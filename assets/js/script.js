var typed = new Typed("#typed", {
  strings: ["Welcome to my personal Website"],
  typeSpeed: 110,
  startDelay: 500,
  loop: true,
  loopCount: Infinity,
  backDelay: 1000,
});

let popup = document.querySelector(".popup"),
  a = document.querySelector(".btn-link");

a.addEventListener("click", openPop);

function openPop() {
  popup.style.display = "Block";
}

window.addEventListener("click", closePop);

function closePop(e) {
  if (e.target == popup) {
    popup.style.display = "none";
  }
}
