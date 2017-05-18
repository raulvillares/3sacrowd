function Level(number, board) {
    this.number = number;
    this.squaresToFill = board.totalNumberSquares();
    this.filledSquares = 0;
    this.movements = [];
    this.pinSelected = false;
    this.board = board;
}

