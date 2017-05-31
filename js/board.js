define(function() {

    function Board() {
        this.squares = [];
    }

    Board.prototype.addRow = function(row) {
        this.squares.push(row);
    }

    Board.prototype.numberChangeableSquares = function() {
        var count = 0;
        this.squares.forEach(function(row) {
            row.forEach(function(square) {
                if(square.changeable) { ++count; }
            });
        });
        return count;
    };

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
                squareImageElement.style.border = "solid transparent"; 
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
    };
        
    return {
        createEmptyBoard: function() {
            return new Board();
        }
    }
});  