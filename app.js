document.querySelector(".source").addEventListener("click", function () {
  let audio = new Audio("assets/sound.mp3");
  audio.play();
  setTimeout(function () {
    document.querySelector(".img").style.display = "block";
  }, 340);
  setTimeout(function () {
    document.querySelector(".img").style.display = "none";
  }, 1550);
});