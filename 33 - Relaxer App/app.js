const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
  text.innerHTML = "Breathe In!";
  container.className = "container grow";
  setTimeout(() => {
    text.innerHTML = "hold";

    setTimeout(() => {
      text.innerHTML = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

breathAnimation();

setInterval(breathAnimation, 7500);
