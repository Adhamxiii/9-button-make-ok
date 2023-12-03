function press() {
  let btn = document.querySelector(".btn");
  btn.style.background = "url(../button2.png) top left no-repeat";
  setTimeout(() => {
    btn.style.background = "url(../button.png) top left no-repeat";
  }, 1000);

  setTimeout(() => {
    let txt = document.querySelector(".container");
    txt.style.display = "block";
    btn.style.display = "none";
  }, 2000);
}
