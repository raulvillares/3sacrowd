define(function() {

    function Level(levelConfiguration, board) {
        this.number = levelConfiguration.levelNumber;
        this.squaresToFill = board.numberChangeableSquares();
        this.movements = [];
        this.pinSelected = false;
        this.perfectMoves = true;
        this.images = levelConfiguration.imagesFilesNames;
        this.board = board;
        this.filledSquares = function() {
            return this.board.numberFilledSquares();
        };
        this.maxTimeAchievement = levelConfiguration.maxTimeAchievement;
        this.maxMovementsAchievement = levelConfiguration.maxMovementsAchievement;
    }

    Level.prototype.addMovement = function(position) {
        if (this.indexOfMovement(position) === -1) {
            this.movements.push(position);
        }
    };

    Level.prototype.undoMovement = function() {
        if (this.hasMovements()) {
            return this.movements.pop();
        }
    };

    Level.prototype.indexOfMovement = function(position) {
        let index = -1;
        this.movements.forEach(function(p, i) {
            if ((p[0] === position[0]) && (p[1] === position[1])) {
                index = i;
            }
        });
        return index;
    };

    Level.prototype.removeMovement = function(positionToRemove) {
        let indexToRemove = this.indexOfMovement(positionToRemove);
        if (indexToRemove > -1) {
            this.movements.splice(indexToRemove, 1);
        }
    };

    Level.prototype.hasMovements = function() {
        return this.movements.length > 0;
    };

    return {
        createLevel(levelConfiguration, board) {
            return new Level(levelConfiguration, board);
        }
    };
});