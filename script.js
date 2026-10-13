const scenes = Array.from(document.querySelectorAll(".scene"));

function showScene(id) {
  scenes.forEach((scene) => {
    scene.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

function replayArrowAnimation() {
  const arrow = document.getElementById("loveArrow");
  const glow = document.getElementById("hitGlow");
  const message = document.getElementById("hitMessage");

  if (!arrow || !glow || !message) return;

  arrow.style.animation = "none";
  glow.style.animation = "none";
  message.style.animation = "none";

  void arrow.offsetWidth;

  arrow.style.animation = "";
  glow.style.animation = "";
  message.style.animation = "";
}

document.getElementById("startBtn").addEventListener("click", () => {
  showScene("heartScene");
  replayArrowAnimation();
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

document.querySelectorAll("#heartScene .nextBtn, #roseScene .nextBtn, #memories .nextBtn, #bookScene .nextBtn, #framesScene .nextBtn, #envelopeScene .nextBtn, #letterScene .nextBtn").forEach((button, index) => {
  button.addEventListener("click", () => {
    showScene(nextScenes[index]);
  });
});

document.getElementById("replayBtn").addEventListener("click", () => {
  showScene("intro");
});

const voiceAudio = document.getElementById("voiceAudio");

if (voiceAudio) {
  voiceAudio.addEventListener("error", () => {
    console.log("Voice note file has not been added yet.");
  });
}
