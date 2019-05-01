import test from "tape";
const requirejs = require("requirejs");

test("levels.js tests", (assert) => {
  requirejs(["./require-config.js", "./js/levels.js"], function(
    config,
    levels
  ) {
    assert.notEqual(null, levels);
    let levelCounter = 1;
    while (levels.getLevelData(levelCounter)) {
      const currentLevel = levels.getLevelData(levelCounter);

      // levelNumber
      assert.ok(currentLevel.hasOwnProperty("levelNumber"));
      assert.equal("number", typeof currentLevel.levelNumber);

      // backGroundImage
      assert.ok(currentLevel.hasOwnProperty("backgroundImage"));
      assert.equal("string", typeof currentLevel.backgroundImage);

      // imagesFilesNames
      assert.ok(currentLevel.hasOwnProperty("imagesFilesNames"));
      assert.equal(6, currentLevel.imagesFilesNames.length);

      // initialSquares
      assert.ok(currentLevel.hasOwnProperty("initialSquares"));
      assert.ok(Array.isArray(currentLevel.initialSquares));
      let initialSquaresCheck = true;
      let rowLength = null;
      for (let boardRow of currentLevel.initialSquares) {
        if (!Array.isArray(boardRow)) {
          initialSquaresCheck = false;
        } else {
          // is an array
          if (rowLength === null) {
            // first row
            rowLength = boardRow.length;
          } else {
            //subsequent rows
            if (boardRow.length !== rowLength) {
              initialSquaresCheck = false;
            }
          }
        }
      }
      assert.ok(initialSquaresCheck);
      // maxTimeAchievement
      assert.ok(currentLevel.hasOwnProperty("maxTimeAchievement"));
      assert.equal("number", typeof currentLevel.maxTimeAchievement);

      // maxMovementsAchievement
      assert.ok(currentLevel.hasOwnProperty("maxMovementsAchievement"));
      assert.equal("number", typeof currentLevel.maxMovementsAchievement);

      levelCounter++;
    }
    assert.end();
  });
});
