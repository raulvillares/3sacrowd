define(['js/board', 'js/level'], function(boardModule, levelModule) {
    return {

        loadLevel: function(levelNumber) {
            function clear() {
                function clearElement(elementName) {
                    var element = document.getElementById(elementName);
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }        
                }  

                function clearLevel() {
                    clearElement("level");
                }

                function clearHeader() {
                    clearElement("headerDiv");
                }    

                clearHeader();
                clearLevel();
            }

            function loadHeader() {
                var headerImage = document.createElement("img");
                headerImage.id = "headerImage";
                headerImage.src = LOGO_FULL_PATH;
                document.getElementById("headerDiv").appendChild(headerImage);        
            }

            function generateBoard(levelConfiguration) {

                let levelBoard = boardModule.createEmptyBoard();

                levelConfiguration.initialSquares.forEach(function(row, rowIndex) {
                    var rowSquares = [];
                    row.forEach(function(squareType, columnIndex) {
                        rowSquares.push(new Square(squareType, rowIndex, columnIndex));
                    });
                    levelBoard.addRow(rowSquares);
                });

                return levelBoard;
            }       

            var levelConfiguration = levels[levelNumber-1];
            clear();
            loadHeader();
            document.body.style.backgroundImage = "url('"+BACKGROUND_IMAGES_FOLDER+levelConfiguration.backgroundImage+BACKGROUND_IMAGES_EXTENSION+"')";
            level = levelModule.createLevel(levelConfiguration, generateBoard(levelConfiguration));
            document.getElementById("level").appendChild(level.board.createElement());
            document.getElementById("level").appendChild(createButtons());
            return level;
        }
    }
});