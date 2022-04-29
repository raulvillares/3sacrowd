const difficultyLevel = sessionStorage.getItem("difficultyLevel");

require(["js/levelLoader"], (loader) => {
	const level = loader.loadLevel(1, difficultyLevel);
});