const NUMBER_CHANGEABLE_IMAGES = 3;
const IMAGES_FOLDER = "./img/";
const IMAGES_EXTENSION = ".png";

const EMPTY = 0;
const TIC = 1;
const TAC = 2;
const FIXED_EMPTY = 3;
const FIXED_TIC = 4;
const FIXED_TAC = 5;

const images = ["empty", "blue", "pink", "box", "blueFixed", "pinkFixed"];

function Square(initialImage) {
    this.currentImage = initialImage;
    if(initialImage < NUMBER_CHANGEABLE_IMAGES)
        this.changeable = true; 
    else 
        this.changeable = false;  
}

Square.prototype.change = function() {
    if(this.changeable)
        this.currentImage = (this.currentImage+1) % NUMBER_CHANGEABLE_IMAGES;
}

Square.prototype.toString = function() {
    return images[this.currentImage];
}

function Board() {
    this.squares = [];
    this.squares.push([new Square(EMPTY), new Square(EMPTY), new Square(EMPTY), new Square(EMPTY), new Square(EMPTY)]);
    this.squares.push([new Square(EMPTY), new Square(EMPTY), new Square(EMPTY), new Square(FIXED_TIC), new Square(EMPTY)]);
    this.squares.push([new Square(EMPTY), new Square(EMPTY), new Square(EMPTY), new Square(EMPTY), new Square(EMPTY)]);
    this.squares.push([new Square(EMPTY), new Square(FIXED_TIC), new Square(FIXED_EMPTY), new Square(0), new Square(FIXED_TAC)]);
    this.squares.push([new Square(EMPTY), new Square(EMPTY), new Square(EMPTY), new Square(EMPTY), new Square(FIXED_TAC)]);
}

Board.prototype.createElement = function() {
    var elementBoard = document.createElement("div");
    elementBoard.className = "board";
    this.squares.forEach(function(row) {
        var elementRow = document.createElement("div");
        elementRow.className = "row";
        elementBoard.appendChild(elementRow);
        row.forEach(function(square) {
            var elementSquare = document.createElement("div");
            elementSquare.className = "square";
            var elementSquareImage = document.createElement("img");
            elementSquareImage.className = "squareImage";
            elementSquareImage.src = IMAGES_FOLDER+images[square.currentImage]+IMAGES_EXTENSION;
            elementSquare.appendChild(elementSquareImage);
            elementRow.appendChild(elementSquare);
        });
    });
    return elementBoard;
}

var board = new Board();
var divLevel = document.getElementById("level");
level.appendChild(board.createElement());
