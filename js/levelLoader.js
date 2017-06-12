/*global
level
*/

define(
    ["js/properties", "js/board", "js/level", "js/levels", "js/square", "js/buttons", "js/info"],
    function(properties, boardModule, levelModule, levelsData, square, buttons, info) {

        const loadFunction = function(levelNumber) {
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
                headerImage.src = properties.LOGO_FULL_PATH;
                document.getElementById("headerDiv").appendChild(headerImage);
            }

            function generateBoard(levelConfiguration) {

                let levelBoard = boardModule.createEmptyBoard();

                levelConfiguration.initialSquares.forEach(function(row, rowIndex) {
                    var rowSquares = [];
                    row.forEach(function(squareType, columnIndex) {
                        rowSquares.push(square.create(squareType, rowIndex, columnIndex));
                    });
                    levelBoard.addRow(rowSquares);
                });

                return levelBoard;
            }

            let levelConfiguration = levelsData.getLevelData(levelNumber);
            clear();
            loadHeader();
            document.body.style.backgroundImage = "url('" + properties.BACKGROUND_IMAGES_FOLDER + levelConfiguration.backgroundImage + properties.BACKGROUND_IMAGES_EXTENSION + "')";
            level = levelModule.createLevel(levelConfiguration, generateBoard(levelConfiguration));
            document.getElementById("level").appendChild(level.board.createElement());
            document.getElementById("level").appendChild(info.generateInfo(levelNumber, properties.NUMBER_OF_LEVELS));
            document.getElementById("level").appendChild(buttons.createButtons());
            return level;
        };

        return {
            loadLevel(levelNumber) {
                buttons.setLoadLevel(loadFunction);
                loadFunction(levelNumber);
            }
        };
    });