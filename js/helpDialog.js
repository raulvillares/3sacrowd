/**
 * Creates a <div> Element with helpful hints, and returns it for appending to the "level" element
 */

define(() => {
	const helpDialog = document.createElement("div");
	helpDialog.id = "help-dialog";
	helpDialog.className = "help-dialog";

	const heading = document.createElement("h3");
	heading.className = "help-dialog__heading";
	heading.innerHTML = "Hint:";

	const hint = document.createElement("p");
	hint.className = "help-dialog__hint";
	hint.innerHTML =
		"The goal of the game is to fill all available squares with an alien, without having any three like aliens in a row, column, or diagonally. <br><br>To change the color of an existing alien, click it again and the alien's color will change unless no other color is valid.";

	const elementArray = [heading, hint];
	elementArray.forEach((element) => helpDialog.appendChild(element));

	return helpDialog;
});
