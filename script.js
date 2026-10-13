const scenes = Array.from(document.querySelectorAll(".scene"));

function showScene(id) {
  scenes.forEach((scene) => {
    scene.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

document.getElementById("startBtn").addEventListener("click", () => {
  showScene("heartScene");
});

const nextScenes = [
  "roseScene",
  "memories",
  "bookScene",
  "framesScene",
  "envelopeScene",
  "letterScene",
  "voiceScene"
];

document.querySelectorAll(".nextBtn").forEach((button, index) => {
  button.addEventListener("click", () => {
    showScene(nextScenes[index]);
  });
});

document.getElementById("replayBtn").addEventListener("click", () => {
  showScene("intro");
});
