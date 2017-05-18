function loadLevel(levelNumber) {
    var levelConfiguration = levels[levelNumber-1];
    clearLevel();
    document.body.style.backgroundImage = "url('"+BACKGROUND_IMAGES_FOLDER+levelConfiguration.backgroundImage+BACKGROUND_IMAGES_EXTENSION+"')";
    level = new Level(levelConfiguration, generateBoard(levelConfiguration));
    document.getElementById("level").appendChild(level.board.createElement());
    document.getElementById("level").appendChild(createButtons());
    return level;
}

    function clearLevel() {
        var levelElement = document.getElementById("level");
        while (levelElement.firstChild) {
            levelElement.removeChild(levelElement.firstChild);
        }        
    }

    function generateBoard(levelConfiguration) {
        var levelBoard = new Board();
        levelConfiguration.initialSquares.forEach(function(row, rowIndex) {
            var rowSquares = [];
            row.forEach(function(squareType, columnIndex) {
                rowSquares.push(new Square(squareType, rowIndex, columnIndex));
            });
            levelBoard.squares.push(rowSquares);
        });
        return levelBoard;
    }