var squaresToFill = 20;
var filledSquares = 0;

document.body.style.backgroundImage = "url('"+BACKGROUND_IMAGES_FOLDER+"colored_land.png')";
var logoImage = document.createElement("img");
logoImage.src = LOGO_FULL_PATH;
document.getElementById("logo").appendChild(logoImage);
var board = new Board();
document.getElementById("level").appendChild(board.createElement());
