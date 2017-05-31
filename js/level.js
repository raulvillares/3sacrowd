define(function() {

    function Level(levelConfiguration, board) {
        this.number = levelConfiguration.levelNumber;
        this.squaresToFill = board.numberChangeableSquares();
        this.filledSquares = 0;
        this.movements = [];
        this.pinSelected = false;
        this.images = levelConfiguration.imagesFilesNames;
        this.board = board;
    }

    return {
        createLevel: function(levelConfiguration, board) {
            return new Level(levelConfiguration, board);
        }
    }
});  