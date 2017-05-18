function Level(levelConfiguration, board) {
    this.number = levelConfiguration.levelNumber;
    this.squaresToFill = board.totalNumberSquares();
    this.filledSquares = 0;
    this.movements = [];
    this.pinSelected = false;
    this.images = levelConfiguration.imagesFilesNames;
    this.board = board;
}

