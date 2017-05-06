function Board() {
    this.squares = [];
    this.squares.push([new Square(EMPTY, 0, 0), new Square(EMPTY, 0, 1), new Square(EMPTY, 0, 2), new Square(EMPTY, 0, 3), new Square(EMPTY, 0, 4)]);
    this.squares.push([new Square(EMPTY, 1, 0), new Square(EMPTY, 1, 1), new Square(EMPTY, 1, 2), new Square(FIXED_TIC, 1, 3), new Square(EMPTY, 1, 4)]);
    this.squares.push([new Square(EMPTY, 2, 0), new Square(EMPTY, 2, 1), new Square(EMPTY, 2, 2), new Square(EMPTY, 2, 3), new Square(EMPTY,2, 4)]);
    this.squares.push([new Square(EMPTY, 3, 0), new Square(FIXED_TIC, 3, 1), new Square(FIXED_EMPTY, 3, 2), new Square(EMPTY, 3, 3), new Square(FIXED_TAC, 3, 4)]);
    this.squares.push([new Square(EMPTY, 4, 0), new Square(EMPTY, 4, 1), new Square(EMPTY, 4, 2), new Square(EMPTY, 4, 3), new Square(FIXED_TAC, 4, 4)]);
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
    if (filledSquares < squaresToFill) {
        if (event.target.className == 'squareImage') {
            var squarePosition = getPosition(event.target.id);
            clickedSquare = board.squares[squarePosition[0]][squarePosition[1]];
            let imageBeingChecked = nextImage(clickedSquare.currentImage);
            let validImageFound = false;
            while(!validImageFound) {
                if ((imageBeingChecked == EMPTY) || (board.validImage(imageBeingChecked, squarePosition))) {
                    clickedSquare.changeImage(imageBeingChecked);
                    validImageFound = true;
                    if (imageBeingChecked == EMPTY) --filledSquares; else ++filledSquares;
                    if (filledSquares == squaresToFill) console.log("COMPLETED");
                } else {
                    imageBeingChecked = nextImage(imageBeingChecked);
                }
            }
        }
    }
}

Board.prototype.validImage = function(imageValue, position) {

	return !threeEquasValuesAdjacentAnywhere();

    function threeEquasValuesAdjacentAnywhere() {
        return(
                threeEqualValuesAdjacentVertically(imageValue, position) ||
                threeEqualValuesAdjacentHorizontally(imageValue, position) ||
                threeEqualValuesAdjacentDiagonally1(imageValue, position) ||
                threeEqualValuesAdjacentDiagonally2(imageValue, position)
                );
    }

    function threeEqualValuesAdjacentVertically() {
        return threeEqualValuesAdjacent([-1, 0], [1, 0]);
    }

    function threeEqualValuesAdjacentHorizontally() {
        return threeEqualValuesAdjacent([0, -1], [0, 1]);
    }

    function threeEqualValuesAdjacentDiagonally1() {
        return threeEqualValuesAdjacent([-1, -1], [1, 1]);
    }

    function threeEqualValuesAdjacentDiagonally2() {
        return threeEqualValuesAdjacent([-1, 1], [1, -1]);
    }

    function threeEqualValuesAdjacent(offsetDirection1, offsetDirection2) {
        let firstAdjacentDirection1ContainsValue = validPositionAndContainsValue([position[0]+offsetDirection1[0], position[1]+offsetDirection1[1]]);
        let secondAdjacentDirection1ContainsValue = validPositionAndContainsValue([position[0]+(offsetDirection1[0]*2), position[1]+(offsetDirection1[1]*2)]);
        let firstAdjacentDirection2ContainsValue = validPositionAndContainsValue([position[0]+offsetDirection2[0], position[1]+offsetDirection2[1]]);
        let secondAdjacentDirection2ContainsValue = validPositionAndContainsValue([position[0]+(offsetDirection2[0]*2), position[1]+(offsetDirection2[1]*2)]);
        return threeValuesAdjacent(firstAdjacentDirection1ContainsValue, secondAdjacentDirection1ContainsValue, firstAdjacentDirection2ContainsValue, secondAdjacentDirection2ContainsValue);
    }

    function validPositionAndContainsValue(checkedPosition) {
        return validPosition(checkedPosition) && (imageValuesEquivalent(imageValue, adjacentImageValue(checkedPosition)));
    }

    function adjacentImageValue(checkedPosition) {
    	return board.squares[checkedPosition[0]][checkedPosition[1]].currentImage;
    }

    function validPosition(checkedPosition) {
        return (
                (checkedPosition[0] >= 0) &&
                (checkedPosition[1] >= 0) &&
                (checkedPosition[0] <= board.squares.length-1) &&
                (checkedPosition[1] <= board.squares[0].length-1)
                );
    }

    function threeValuesAdjacent(firstAdjacentDirection1ContainsValue, secondAdjacentDirection1ContainsValue, firstAdjacentDirection2ContainsValue, secondAdjacentDirection2ContainsValue) {
        return (
                (firstAdjacentDirection1ContainsValue && secondAdjacentDirection1ContainsValue) ||
                (firstAdjacentDirection2ContainsValue && secondAdjacentDirection2ContainsValue) ||
                (firstAdjacentDirection1ContainsValue && firstAdjacentDirection2ContainsValue)
                ); 
    }    
}