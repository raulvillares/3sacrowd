const test = require("tape");
const requirejs = require("requirejs");

test("levels.js tests", (assert) => {
	requirejs(
		["./require-config.js", "./js/levels.js"],
		function (config, levels) {
			assert.notEqual(null, levels);
			let levelCounter = 1;

			while (levels.getLevelData(levelCounter)) {
				const currentLevel = levels.getLevelData(levelCounter);

				// levelNumber
				assert.ok(currentLevel.hasOwnProperty("levelNumber"));
				assert.equal(typeof currentLevel.levelNumber, "number");

				// backGroundImage
				assert.ok(currentLevel.hasOwnProperty("backgroundImage"));
				assert.equal(typeof currentLevel.backgroundImage, "string");

				// imagesFilesNames
				assert.ok(currentLevel.hasOwnProperty("imagesFilesNames"));
				assert.equal(currentLevel.imagesFilesNames.length, 6);

				// initialSquares
				assert.ok(currentLevel.hasOwnProperty("initialSquares"));
				assert.ok(Array.isArray(currentLevel.initialSquares));
				// Check for regularity of board (all rows evenly sized)
				let isRegular = isBoardRegular(currentLevel.initialSquares);
				assert.ok(isRegular);
				// If board is regular, check there's only one solution
				if (isRegular) {
					let solutions = getAllSolutions(currentLevel.initialSquares);
					assert.equal(solutions.length, 1);
					// Uncomment the following to sneak peek the solution
					// console.log(solutions);
				}

				// maxTimeAchievement
				assert.ok(currentLevel.hasOwnProperty("maxTimeAchievement"));
				assert.equal(typeof currentLevel.maxTimeAchievement, "number");

				// maxMovementsAchievement
				assert.ok(currentLevel.hasOwnProperty("maxMovementsAchievement"));
				assert.equal(typeof currentLevel.maxMovementsAchievement, "number");

				levelCounter++;
			}
			assert.end();
		}
	);
});

function isBoardRegular(board) {
	let isBoardRegular = true;
	let rowLength = null;
	for (let boardRow of board) {
		if (!Array.isArray(boardRow)) {
			isBoardRegular = false;
		} else {
			// is an array
			if (rowLength === null) {
				// first row
				rowLength = boardRow.length;
			} else {
				//subsequent rows
				if (boardRow.length !== rowLength) {
					isBoardRegular = false;
				}
			}
		}
	}
	return isBoardRegular;
}

function getAllSolutions(board) {
	// build board
	let { workBoard, emptyCount } = prepareBoard(board);
	const size = workBoard[0].length;
	let moves = [];
	let solutions = [];
	let deadEnds = [];

	const solveBoard = () => {
		let guess = { surrounding: 0 };
		let i = 0;
		while (i < size * size && moves.length !== emptyCount) {
			let rownum = Math.floor(i / size);
			let colnum = i % size;
			if (workBoard[rownum][colnum] === 0) {
				// only check if it hasn't been played on
				let { cantPlay, possibleGuess } = checkPlay(workBoard, rownum, colnum);
				if (cantPlay.length === 2) {
					// console.log("DEAD END");
					// tracks dead ends. could be useful for determining difficulty
					deadEnds.push(JSON.parse(JSON.stringify(workBoard)));
					return;
				} else if (cantPlay.length === 1) {
					makePlay(workBoard, moves, rownum, colnum, false, cantPlay);
					i = 0; // reset to top of board
					guess = { surrounding: 0 }; // reset guesses
				} else {
					if (possibleGuess.surrounding >= guess.surrounding) {
						guess = possibleGuess;
					}
					i++;
				}
			} else {
				// must increment when element is not blank
				i++;
			}
		}
		// processing after it's completed all deterministic plays
		// console.log("FINISHED A PASS");
		if (moves.length === emptyCount) {
			// Return if it's been solved
			solutions.push(JSON.parse(JSON.stringify(workBoard)));
			// console.log("FOUND SOLUTION");
		} else {
			// Continue to guessing if not yet solved
			makePlay(
				workBoard,
				moves,
				guess.position[0],
				guess.position[1],
				true,
				guess.playType
			);
			solveBoard(); // proceed having made a guess
			// console.log("exiting first guess recursion");

			// go back and guess again, trying to find other possibilities
			// clear plays, including the last guess
			let { nextPlayType, nextPosition } = rollbackToLastGuess(
				workBoard,
				moves
			);
			makePlay(
				workBoard,
				moves,
				nextPosition[0],
				nextPosition[1],
				true,
				nextPlayType
			);
			solveBoard();
			rollbackToLastGuess(workBoard, moves);
			// console.log("exiting second guess recursion");
		}
	};

	solveBoard();
	return solutions;
}

function prepareBoard(board) {
	let workBoard = [],
		emptyCount = 0,
		mappedValue;
	for (let r = 0; r < board[0].length; r++) {
		workBoard.push([]);
		for (let c = 0; c < board[0].length; c++) {
			if (board[r][c] !== 3) {
				mappedValue = board[r][c] % 3;
			} else {
				mappedValue = 9;
			}
			workBoard[r][c] = mappedValue;
			if (workBoard[r][c] === 0) {
				emptyCount++;
			}
		}
	}
	return { workBoard, emptyCount };
}

function makePlay(board, moves, rownum, colnum, isGuess, playInfo) {
	let playType;
	if (isGuess === false) {
		playType = playInfo[0] === 1 ? 2 : 1;
	} else {
		playType = playInfo;
	}
	board[rownum][colnum] = playType;
	let newMove = { position: [rownum, colnum], playType, isGuess };
	moves.push({ position: [rownum, colnum], playType, isGuess });
	// console.log("MAKING MOVE NUM", moves.length, "---", newMove);
}

function checkPlay(board, row, col) {
	const size = board[0].length;
	let cantPlay = [];
	const patterns = [
		// [info for position check],[first square to check],[second square]
		[
			[-1, size, 1, size],
			[0, -1],
			[0, -2],
		], // two squares to the left
		[
			[1, size, -1, size],
			[-1, 0],
			[-2, 0],
		], // two squares up
		[
			[-1, size - 2, -1, size],
			[1, 0],
			[2, 0],
		], // two squares down
		[
			[-1, size, -1, size - 2],
			[0, 1],
			[0, 2],
		], // two squares to the right

		[
			[-1, size, 0, size - 1],
			[0, -1],
			[0, 1],
		], // square left and right
		[
			[0, size - 1, -1, size],
			[-1, 0],
			[1, 0],
		], // square above and below
		[
			[0, size - 1, 0, size - 1],
			[-1, -1],
			[1, 1],
		], // square to upper-left, lower-right
		[
			[0, size - 1, 0, size - 1],
			[1, -1],
			[-1, 1],
		], // square to lower-left, upper-right

		[
			[1, size, 1, size],
			[-1, -1],
			[-2, -2],
		], // 2 squares up & left
		[
			[1, size, -1, size - 2],
			[-1, 1],
			[-2, 2],
		], // 2 squares up & right
		[
			[-1, size - 2, 1, size],
			[1, -1],
			[2, -2],
		], // 2 squares down & left
		[
			[-1, size - 2, -1, size - 2],
			[1, 1],
			[2, 2],
		], // 2 squares down & right
	];

	for (let p of patterns) {
		if (
			// checks position to see if the check can be performed (not too close to the edge)
			p[0][0] < row &&
			row < p[0][1] &&
			p[0][2] < col &&
			col < p[0][3]
		) {
			checkTwoSquares(
				// performs check for that specific pair
				cantPlay, // passes array as reference for update
				board[row + p[1][0]][col + p[1][1]],
				board[row + p[2][0]][col + p[2][1]]
			);
		}
	}

	// checks surrounding squares and creates a "smart guess"..?
	let surrounding = surroundingCheck(board, row, col);
	let possibleGuess = {};
	if (surrounding[1] >= surrounding[2]) {
		possibleGuess = {
			surrounding: surrounding[1],
			playType: 1,
			position: [row, col],
		};
	} else {
		possibleGuess = {
			surrounding: surrounding[2],
			playType: 2,
			position: [row, col],
		};
	}

	return { cantPlay, possibleGuess };
}

function checkTwoSquares(cantPlay, squareOne, squareTwo) {
	let checker = [1, 2];
	if (squareOne === squareTwo && checker.includes(squareOne)) {
		if (cantPlay.indexOf(squareOne) === -1) {
			squareOne ? cantPlay.push(squareOne) : 0; // modifies the calling method's cantPlay array directly
		}
	}
}

function surroundingCheck(board, rownum, colnum) {
	// set start/end row/col so the method doesn't go off the board
	let startRow = Math.max(rownum - 1, 0);
	let startCol = Math.max(colnum - 1, 0);
	let endRow = Math.min(rownum + 1, board[0].length - 1);
	let endCol = Math.min(colnum + 1, board[0].length - 1);
	let surroundingCheck = [0, 0, 0];
	for (let r = startRow; r <= endRow; r++) {
		for (let c = startCol; c <= endCol; c++) {
			if (board[r][c] > 0 && board[r][c] < 3) {
				// only counting 1s and 2s
				surroundingCheck[board[r][c]]++;
			}
		}
	}
	return surroundingCheck;
}

function rollbackToLastGuess(board, moves) {
	let nextPosition, nextPlayType;
	for (let i = moves.length - 1; i >= 0; i--) {
		if (!moves[i].isGuess) {
			board[moves[i].position[0]][moves[i].position[1]] = 0;
			let temp = moves.pop();
			// console.log(`Undoing: ${JSON.stringify(temp)}`);
		} else {
			board[moves[i].position[0]][moves[i].position[1]] = 0;
			nextPlayType = moves[i].playType === 1 ? 2 : 1;
			nextPosition = moves[i].position;
			let temp = moves.pop();
			// console.log(`Undoing: ${JSON.stringify(temp)}`);
			break;
		}
	}
	return { nextPlayType, nextPosition };
}
