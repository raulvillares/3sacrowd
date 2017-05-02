const NUMBER_CHANGEABLE_IMAGES = 3;
const IMAGES_FOLDER = "./img/";
const IMAGES_EXTENSION = ".png";
const IMAGE_ID = /^imageRow(\d+)Column(\d+)$/g

const EMPTY = 0;
const TIC = 1;
const TAC = 2;
const FIXED_EMPTY = 3;
const FIXED_TIC = 4;
const FIXED_TAC = 5;

const images = ["empty", "blue", "pink", "box", "blueFixed", "pinkFixed"];

function generateImagePath(imageIndex) {
    return IMAGES_FOLDER+images[imageIndex]+IMAGES_EXTENSION; 
}

function getPosition(imageId){
    var match;
    var position = [];
    while (match = IMAGE_ID.exec(imageId))
        position = [match[1], match[2]];
    return position;
}

function Square(initialImage, row, column) {
    this.currentImage = initialImage;
    this.row = row;
    this.column = column;
    if(initialImage < NUMBER_CHANGEABLE_IMAGES)
        this.changeable = true; 
    else 
        this.changeable = false;  
}

Square.prototype.change = function() {
    if(this.changeable) {
        this.currentImage = (this.currentImage+1) % NUMBER_CHANGEABLE_IMAGES;
        document.getElementById("imageRow"+this.row+"Column"+this.column).src = generateImagePath(this.currentImage); 
    }
}

Square.prototype.generateImageId = function() {
    return "imageRow"+this.row+"Column"+this.column;
}

Square.prototype.toString = function() {
    return images[this.currentImage];
}

function Board() {
    this.squares = [];
    this.squares.push([new Square(EMPTY, 0, 0), new Square(EMPTY, 0, 1), new Square(EMPTY, 0, 2), new Square(EMPTY, 0, 3), new Square(EMPTY, 0, 4)]);
    this.squares.push([new Square(EMPTY, 1, 0), new Square(EMPTY, 1, 1), new Square(EMPTY, 1, 2), new Square(FIXED_TIC, 1, 3), new Square(EMPTY, 1, 4)]);
    this.squares.push([new Square(EMPTY, 2, 0), new Square(EMPTY, 2, 1), new Square(EMPTY, 2, 2), new Square(EMPTY, 2, 3), new Square(EMPTY,2, 4)]);
    this.squares.push([new Square(EMPTY, 3, 0), new Square(FIXED_TIC, 3, 1), new Square(FIXED_EMPTY, 3, 2), new Square(EMPTY, 3, 3), new Square(FIXED_TAC, 3, 4)]);
    this.squares.push([new Square(EMPTY, 4, 0), new Square(EMPTY, 4, 1), new Square(EMPTY, 4, 2), new Square(EMPTY, 4, 2), new Square(FIXED_TAC, 4, 3)]);
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

    function createSquareElement(square) {
        function createSquareImageElement(square) {
            var squareImageElement = document.createElement("img");
            squareImageElement.className = "squareImage";
            squareImageElement.id = square.generateImageId();
            squareImageElement.src = generateImagePath(square.currentImage);    
            return squareImageElement;        
        }

        var squareElement = document.createElement("div");
        squareElement.className = "square";
        squareElement.appendChild(createSquareImageElement(square));
        return squareElement;
    }

    var boardElement = createBoardElement();
    boardElement.addEventListener("click", this.clicked);

    this.squares.forEach(function(row) {
        var rowElement = createRowElement();
        boardElement.appendChild(rowElement);
        row.forEach(function(square) {
            var squareElement = createSquareElement(square);
            rowElement.appendChild(squareElement);
        });
    });
    return boardElement;
}

Board.prototype.clicked = function(event) {
    var squarePosition = getPosition(event.target.id);
    clickedSquare = board.squares[squarePosition[0]][squarePosition[1]];
    clickedSquare.change();
}

var board = new Board();
var divLevel = document.getElementById("level");
divLevel.appendChild(board.createElement());
