import test from "tape";
import { types } from "util";
import { NONAME } from "dns";
import { getHeapSpaceStatistics } from "v8";
const requirejs = require("requirejs");

test("levels.js tests", (assert) => {
  requirejs(["./require-config.js", "./js/levels.js"], function(
    config,
    levels
  ) {
    assert.notEqual(null, levels);
    let levelCounter = 1;

    const checkLevel = levels.getLevelData(1);
    let startBoard = checkLevel.initialSquares;

    // transformedBoard[0][4] = 2;
    // transformedBoard[1][4] = 2;
    const testBoard = [
      [1,0,0],
      [1,3,1],
      [2,2,0]];
    console.log(levelSolveable(testBoard));

    // 


    // while (levels.getLevelData(levelCounter)) {
    //   const currentLevel = levels.getLevelData(levelCounter);

    //   // levelNumber
    //   assert.ok(currentLevel.hasOwnProperty("levelNumber"));
    //   assert.equal("number", typeof currentLevel.levelNumber);

    //   // backGroundImage
    //   assert.ok(currentLevel.hasOwnProperty("backgroundImage"));
    //   assert.equal("string", typeof currentLevel.backgroundImage);

    //   // imagesFilesNames
    //   assert.ok(currentLevel.hasOwnProperty("imagesFilesNames"));
    //   assert.equal(6, currentLevel.imagesFilesNames.length);

    //   // initialSquares
    //   assert.ok(currentLevel.hasOwnProperty("initialSquares"));
    //   assert.ok(Array.isArray(currentLevel.initialSquares));
    //   let initialSquaresCheck = true;
    //   let rowLength = null;
    //   for (let boardRow of currentLevel.initialSquares) {
    //     if (!Array.isArray(boardRow)) {
    //       initialSquaresCheck = false;
    //     } else {
    //       // is an array
    //       if (rowLength === null) {
    //         // first row
    //         rowLength = boardRow.length;
    //       } else {
    //         //subsequent rows
    //         if (boardRow.length !== rowLength) {
    //           initialSquaresCheck = false;
    //         }
    //       }
    //     }
    //   }
    //   assert.ok(initialSquaresCheck);
    //   // maxTimeAchievement
    //   assert.ok(currentLevel.hasOwnProperty("maxTimeAchievement"));
    //   assert.equal("number", typeof currentLevel.maxTimeAchievement);

    //   // maxMovementsAchievement
    //   assert.ok(currentLevel.hasOwnProperty("maxMovementsAchievement"));
    //   assert.equal("number", typeof currentLevel.maxMovementsAchievement);

    //   levelCounter++;
    // }
    assert.end();
  });
});

function levelSolveable (board) {
  // build board
  let {workBoard, emptyCount} = prepareBoard(board);
  const size = workBoard[0].length;
  console.log(workBoard, emptyCount);
  let moves = [];
  // let solutions = [];
  let solveable = false; 
// check count of empty cells (for check)
  const solveBoard = () => {
    let guess = {surrounding: 0};
    let i = 0;
    while (i < size * size && moves.length !== emptyCount) {
      let rownum = Math.floor(i / size);
      let colnum = i % size;
      if (workBoard[rownum][colnum] === 0) { // only check if it hasn't been played on}
        let {cantPlay, possibleGuess} = checkPlay(workBoard,rownum,colnum);
        if (cantPlay.length === 2) {
          return false;
        } else if (cantPlay.length === 1) {
          makePlay(workBoard, moves, rownum, colnum, false, cantPlay);
          i = 0;  // reset to top of board
        } else {
          console.log("possible guess found", possibleGuess);
          if (possibleGuess.surrounding >= guess.surrounding) {
            guess = possibleGuess;
          }
          i++;
        }
      } else { // must increment when element is not blank
        i++;
      }
    }
    // processing after it's made a full pass
    console.log("board after a pass", workBoard);
    console.log("moves after a pass", moves, moves.length, emptyCount);
    console.log("guess status", guess);
    if (moves.length === emptyCount) {
      return true;
    } else {
      if (guess !== null) {
        makePlay(workBoard, 
          moves, 
          guess.position[0],guess.position[1], 
          true, guess.playType);
        let pathBad = solveBoard();
        if (pathBad) {
          let {nextPlayType, nextPosition} = rollbackToLastGuess(workBoard, moves);
          makePlay(workBoard, 
            moves, 
            nextPosition[0],nextPosition[1], 
            true, nextPlayType);
          return solveBoard();
        }
      }
    }
  }

  return solveBoard();
}

function rollbackToLastGuess(board, moves) {
  let nextPosition, nextPlayType;
  for (let i = moves.length - 1; i >= 0; i--) {
    if (!moves[i].isGuess) {
      board [moves[i].position[0]] [moves[i].position[1]] = 0;
      moves.pop();
    } else {
      board [moves[i].position[0]] [moves[i].position[1]] = 0;
      nextPlayType = moves[i].playType === 1 ? 2 : 1;
      nextPosition = moves[i].position;
      moves.pop();
      break;
    }
  }
  return {nextPlayType, nextPosition}
}

function prepareBoard (board) {
  let workBoard = [], emptyCount = 0, mappedValue;
  for (let r = 0; r < board[0].length; r++) {
    workBoard.push([]);
    for (let c = 0; c < board[0].length; c++) {
      if(board[r][c]!== 3) {
        mappedValue = board[r][c] % 3
      } else {
        mappedValue = -1;
      }
      workBoard [r][c] = mappedValue;
      if (workBoard[r][c] === 0) {emptyCount++}
    }
  }
  return {workBoard, emptyCount};
}

function makePlay (board, moves, rownum, colnum, isGuess, playInfo) {
  let playType;
  if (isGuess === false) {
    playType = playInfo[0] === 1 ? 2 : 1;
  } else {
    playType = playInfo;
  }
  board[rownum][colnum] = playType;
  moves.push({position: [rownum, colnum], playType, isGuess});
}

// change board to 0,1,10 for different types

// recursive contents (takes current board state)
// did we break the rules?
// is full? > return true
// create list of open spaces
//   get number of adjacent squares and their types/counts
//   while doing, check for obviousPlays and make them
//     update board
//     do not add them to empty


// need record of plays: array of {location: [R,C], play: 1 or 10, guess: Bool}



//Checks


// while not full (count )
  // new empty candidate {}
  // loop through from top, looking for obvious plays, remembering guess candidates
    // check play of both
      // if none ok
        // roll back to last guess, change guess content (keep rolling back if already 2nd guess) and restart loop
      // if one ok
        // make play (update board and add to record of plays)
        // loop
      // if both ok
        // if bordering tile exists, remember as guess candidate {location:[], neighbors}
    //

function checkPlay (board, row, col) {
  const size = board[0].length;
  let cantPlay = [];
  let surrounding = [0,0,0];
  const patterns = [
    [[-1,size,1,size],[0,-1],[0,-2], false], // left (1<col)
    [[1,size,-1,size],[-1,0],[-2,0], false], // up (1<row)
    [[-1,size-2,-1,size],[1,0],[2,0], false], // down (row < size-2)
    [[-1,size,-1,size-2],[0,1],[0,2], false], // right (col < size-2)

    [[-1,size,0,size-1],[0,-1],[0,1], true], // leftRight (0<col<size-1)
    [[0,size-1,-1,size],[-1,0],[1,0], true], // upDown (0<row<size-1)
    [[0,size-1,0,size-1],[-1,-1],[1,1], true], // upLeftDownRight (0<row<size-1,0<col<size-1)
    [[0,size-1,0,size-1],[1,-1],[-1,1], true], // downLeftUpRight (0<row<size-1,0<col<size-1)

    [[1,size,1,size],[-1,-1],[-2,-2], false], // upLeft (1<row, 1<col)
    [[1,size,-1,size-2],[-1,1],[-2,2], false], // upRight (1<row, col < size-2)
    [[-1,size-2,1,size],[1,-1],[2,-2], false], // downLeft (row<size-2, 1<col)
    [[-1,size-2,-1,size-2],[1,1],[2,2], false] // downRight (row<size-2, col<size-2)
  ];
  
  for (let p of patterns) {
    if(
      p[0][0] < row &&
      row < p[0][1] &&
      p[0][2] < col &&
      col < p[0][3]
    ){
      checkTwoSquares(
        cantPlay, 
        board[row + p[1][0]] [col + p[1][1]],
        board[row + p[2][0]] [col + p[2][1]],
        surrounding,
        p[3]  // pass whether to check surrounding squares or not
      );
    }
  } 
  let possibleGuess;
  if (surrounding[1] >= surrounding[2]) {
     possibleGuess = {surrounding: surrounding[1], playType: 1, position: [row, col]};
  } else {
    possibleGuess = {surrounding: surrounding[2], playType: 2, position: [row, col]};
  }
  return {cantPlay, possibleGuess};
}

function checkTwoSquares (cantPlay, squareOne, squareTwo, surrounding, surroundingCheck) {
  if (squareOne === squareTwo) {
    if (cantPlay.indexOf(squareOne) === -1) {
      squareOne ? cantPlay.push(squareOne) : 0;
    }
  }
  if (surroundingCheck) {
    console.log("hecking surrounding");
    if (0 < squareOne && squareOne < 3) {
      surrounding[squareOne]++;
      console.log("found surrounding 1", surrounding[squareOne]);
    }
    if (0 < squareTwo && squareTwo < 3) {
      surrounding[squareTwo]++;
      console.log("found surrounding 2", surrounding[squareTwo]);
    }
  }
  return null;
}