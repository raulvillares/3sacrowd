import test from "tape";
const requirejs = require("requirejs");

test("levels.js tests", (assert) => {
    requirejs(["./require-config.js", "./js/levels.js"], function(config, levels) {
        console.log(levels);
        assert.notEqual(null, levels);
        let levelCounter = 1;
        while (levels.getLevelData(levelCounter)) {
            const currentLevel = levels.getLevelData(levelCounter);
            assert.equal("number", typeof currentLevel.levelNumber);
            assert.equal("string", typeof currentLevel.backgroundImage);
            assert.equal(6, currentLevel.imagesFilesNames.length);
            let rowLengthCheck = true;
            let rowLength = null;
            for (let boardRow of currentLevel.initialSquares) {
                if (rowLength === null) {
                    rowLength = boardRow.length;
                } else {
                    if (boardRow.length !== rowLength) {
                        rowLengthCheck = false;
                    }
                }
            }
            assert.equal(true, rowLengthCheck);  
            assert.equal("number", typeof currentLevel.maxTimeAchievement);
            assert.equal("number", typeof currentLevel.maxMovementsAchievement);
            levelCounter ++;
        }
        assert.end();
    });
});