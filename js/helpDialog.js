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
		"Whenever you click on a square, it will change to the first available color of alien. If you click it again it will change to a different color, but ONLY if it doesn't cause there to be three of the same color in a row, column, or diagonal.<br/><br/> When you click on a square, if that square would have caused three in a row, then a different color alien will appear, unless there is no valid color available. If there is no valid move, the square will shake.";

	const elementArray = [heading, hint];
	elementArray.forEach((element) => helpDialog.appendChild(element));

	return helpDialog;
});
