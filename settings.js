const hardDifficulty = document
  .getElementById("hard")
  .addEventListener("click", getDifficultyLevel);

function getDifficultyLevel(event) {
  const { id } = event.target;
  const div = document.getElementById(id);
  div.style.background = "rgba(132, 57, 57, 0.1)";
  sessionStorage.setItem("difficultyLevel", id);
}
