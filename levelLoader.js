function loadLevel(levelNumber) {
    var levelConfiguration = levels[levelNumber-1];
    document.body.style.backgroundImage = "url('"+BACKGROUND_IMAGES_FOLDER+levelConfiguration.backgroundImage+BACKGROUND_IMAGES_EXTENSION+"')";
    var levelBoard = generateBoard(levelConfiguration);
    board = levelBoard;
    document.getElementById("level").appendChild(levelBoard.createElement());
    document.getElementById("level").appendChild(createButtons());
    return new Level(levelBoard);
}

    function generateBoard(levelConfiguration) {
        var levelBoard = new Board();
        levelBoard.squares = [];
        levelConfiguration.initialSquares.forEach(function(row, rowIndex) {
            var rowSquares = [];
            row.forEach(function(squareType, columnIndex) {
                rowSquares.push(new Square(squareType, rowIndex, columnIndex));
            });
            levelBoard.squares.push(rowSquares);
        });
        return levelBoard;
    }