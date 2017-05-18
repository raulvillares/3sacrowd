function loadLevel(levelNumber) {
    var levelConfiguration = levels[levelNumber-1];
    clear();
    loadHeader();
    document.body.style.backgroundImage = "url('"+BACKGROUND_IMAGES_FOLDER+levelConfiguration.backgroundImage+BACKGROUND_IMAGES_EXTENSION+"')";
    level = new Level(levelConfiguration, generateBoard(levelConfiguration));
    document.getElementById("level").appendChild(level.board.createElement());
    document.getElementById("level").appendChild(createButtons());
    return level;
}

    function clear() {
        clearHeader();
        clearLevel();
    }

        function clearLevel() {
            clearElement("level");
        }

        function clearHeader() {
            clearElement("headerDiv");
        }    

            function clearElement(elementName) {
                var element = document.getElementById(elementName);
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }        
            }    

    function loadHeader() {
        var headerImage = document.createElement("img");
        headerImage.id = "headerImage";
        headerImage.src = LOGO_FULL_PATH;
        document.getElementById("headerDiv").appendChild(headerImage);        
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