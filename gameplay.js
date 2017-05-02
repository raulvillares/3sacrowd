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
    function createBoardElement() {
        var boardElement = document.createElement("div");
        boardElement.className = "board";
        return boardElement;
    }

    function createRowElement() {
        var rowElement = document.createElement("div");
        rowElement.className = "row";
        return rowElement;
    }

    function createSquareElement(imageIndex) {
        function createSquareImageElement(square) {
            var squareImageElement = document.createElement("img");
            squareImageElement.className = "squareImage";
            squareImageElement.src = IMAGES_FOLDER+images[imageIndex]+IMAGES_EXTENSION;    
            return squareImageElement;        
        }

        var squareElement = document.createElement("div");
        squareElement.className = "square";
        squareElement.appendChild(createSquareImageElement(this.currentImage));
        return squareElement;
    }

    var boardElement = createBoardElement();
    this.squares.forEach(function(row) {
        var rowElement = createRowElement();
        boardElement.appendChild(rowElement);
        row.forEach(function(square) {
            var squareElement = createSquareElement(square.currentImage);
            rowElement.appendChild(squareElement);
        });
    });
    return boardElement;
}

var board = new Board();
var divLevel = document.getElementById("level");
level.appendChild(board.createElement());
