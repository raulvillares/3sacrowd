/*global
level
*/

define([
  "js/properties",
  "js/board",
  "js/level",
  "js/levels",
  "js/square",
  "js/buttons",
  "js/info",
], (
  properties,
  boardModule,
  levelModule,
  levelsData,
  square,
  buttons,
  info
) => {
  const loadFunction = (levelNumber) => {
    function clear() {
      function clearElement(elementName) {
        const element = document.getElementById(elementName);
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
      const headerImage = document.createElement("img");
      headerImage.id = "headerImage";
      headerImage.src = properties.LOGO_FULL_PATH;
      document.getElementById("headerDiv").appendChild(headerImage);
    }

    function generateBoard(levelConfiguration) {
      let levelBoard = boardModule.createEmptyBoard();

      levelConfiguration.initialSquares.forEach((row, rowIndex) => {
        const rowSquares = [];
        row.forEach((squareType, columnIndex) => {
          rowSquares.push(square.create(squareType, rowIndex, columnIndex));
        });
        levelBoard.addRow(rowSquares);
      });

      return levelBoard;
    }

    let levelConfiguration = levelsData.getLevelData(levelNumber);
    clear();
    loadHeader();
    document.body.style.backgroundImage = `url('${properties.BACKGROUND_IMAGES_FOLDER}${levelConfiguration.backgroundImage}${properties.BACKGROUND_IMAGES_EXTENSION}')`;
    level = levelModule.createLevel(
      levelConfiguration,
      generateBoard(levelConfiguration)
    );
    const levelElement = document.getElementById("level");
    levelElement.appendChild(
      level.board.createElement(level.board.squareHTMLElements)
    );
    levelElement.appendChild(
      info.generateInfo(levelNumber, properties.NUMBER_OF_LEVELS)
    );
    levelElement.appendChild(buttons.createButtons());
    return level;
  };

  return {
    loadLevel(levelNumber, difficultyLevel) {
      buttons.setLoadLevel(loadFunction);
      buttons.setDifficultyLevel(difficultyLevel);
      loadFunction(levelNumber);
    },
  };
});
