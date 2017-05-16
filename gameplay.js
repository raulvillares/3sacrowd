var squaresToFill = 20;
var filledSquares = 0;
this.movements = [];
var pinSelected = false;

document.body.style.backgroundImage = "url('"+BACKGROUND_IMAGES_FOLDER+"colored_land.png')";
var headerImage = document.createElement("img");
headerImage.id = "headerImage";
headerImage.src = LOGO_FULL_PATH;
document.getElementById("headerDiv").appendChild(headerImage);
var board = new Board();
document.getElementById("level").appendChild(board.createElement());
document.getElementById("level").appendChild(createButtons());
