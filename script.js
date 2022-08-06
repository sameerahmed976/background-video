const btn = document.querySelector(".btn");
const video = document.querySelector("#video");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause";
  } else {
    video.pause();
    btn.innerHTML = "play";
  }
});
