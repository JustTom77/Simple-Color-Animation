const colorBox = document.getElementById("color-box");
const button = document.getElementById("btn");

colorBox.style.animationPlayState = "paused";

button.addEventListener("click", () => {
  if (
    button.innerHTML === "Start" &&
    (colorBox.style.animationPlayState = "paused")
  ) {
    colorBox.style.animationPlayState = "running";
    button.innerHTML = "Pause";
  } else {
    colorBox.style.animationPlayState = "paused";
    button.innerHTML = "Start";
  }
});
