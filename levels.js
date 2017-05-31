var level1 = {
  "levelNumber" : 1,
  "backgroundImage" : "colored_land",
  "imagesFilesNames" :
    [
      "empty",
      "blue",
      "pink",
      "metal",
      "blueFixed",
      "pinkFixed"
    ],
  "initialSquares": 
      [
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, FIXED_TAC, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, FIXED_TAC, FIXED_EMPTY, EMPTY, FIXED_TIC],
        [EMPTY, EMPTY, EMPTY, EMPTY, FIXED_TIC]
      ]
};

var level2 = {
  "levelNumber" : 2,
  "backgroundImage" : "blue_desert",
  "imagesFilesNames" :
  [
      "empty",
      "yellow",
      "green",
      "box",
      "yellowFixed",
      "greenFixed"
	],
  "initialSquares": 
      [
        [EMPTY, EMPTY, FIXED_TIC, EMPTY, FIXED_TIC],
        [FIXED_TAC, EMPTY, FIXED_EMPTY, EMPTY, EMPTY],
        [EMPTY, FIXED_TAC, EMPTY, FIXED_EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, FIXED_TAC, EMPTY]
      ]
};

var level3 = {
  "levelNumber" : 3,
  "backgroundImage" : "uncolored_castle",
  "imagesFilesNames" : 
	  [
      "empty",
      "ghost",
      "blackandwhite",
      "castle",
      "ghostFixed",
      "blackandwhiteFixed"
    ],
  "initialSquares" :
	  [
        [EMPTY, FIXED_TIC, FIXED_TIC, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, FIXED_EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY, FIXED_EMPTY],
        [FIXED_TAC, EMPTY, FIXED_TAC, EMPTY, EMPTY]
    ]
};

var level4 = {
  "levelNumber" : 4,
  "backgroundImage" : "colored_forest",
  "imagesFilesNames" :
  [
    "empty",
    "garnet",
    "orange",
    "wood",
    "garnetFixed",
    "orangeFixed"
  ],
  "initialSquares" :
  [
      [FIXED_TIC, EMPTY, EMPTY, EMPTY, FIXED_TAC],
      [FIXED_TIC, FIXED_EMPTY, EMPTY, EMPTY, FIXED_EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, FIXED_EMPTY],
      [FIXED_TIC, EMPTY, EMPTY, EMPTY, EMPTY]
  ]
};

var level5 = {
  "levelNumber" : 5,
  "backgroundImage" : "uncolored_desert",
  "imagesFilesNames" :
  [
    "empty",
    "minty",
    "paleyellow",
    "brick",
    "mintyfixed",
    "paleyellowfixed"
  ],
  "initialSquares" :
  [
      [EMPTY, EMPTY, FIXED_TAC, EMPTY, FIXED_TAC],
      [EMPTY, EMPTY, EMPTY, FIXED_EMPTY, EMPTY],
      [EMPTY, FIXED_EMPTY, EMPTY, EMPTY, EMPTY],
      [FIXED_TAC, EMPTY, EMPTY, EMPTY, EMPTY],
      [FIXED_EMPTY, FIXED_TIC, FIXED_TIC, EMPTY, FIXED_TAC]
  ]
};

var level6 = {
  "levelNumber" : 6,
  "backgroundImage" : "canvas_colored_talltrees",
  "imagesFilesNames" :
  [
    "canvasEmpty",
    "canvasBlue",
    "canvasPink",
    "canvasWood",
    "canvasBlueFixed",
    "canvasPinkFixed"
  ],
  "initialSquares" :
  [
      [FIXED_TIC, EMPTY, FIXED_TAC, EMPTY, FIXED_TAC],
      [EMPTY, FIXED_EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [FIXED_TAC, EMPTY, EMPTY, EMPTY, FIXED_TIC],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
  ]
};

var level7 = {
  "levelNumber" : 7,
  "backgroundImage" : "colored_forest",
  "imagesFilesNames" :
  [
    "empty",
    "garnet",
    "orange",
    "wood",
    "garnetFixed",
    "orangeFixed"
  ],
  "initialSquares" :
  [
      [FIXED_TAC, EMPTY, FIXED_EMPTY, EMPTY, FIXED_TAC, FIXED_TAC],
      [EMPTY, FIXED_TIC, FIXED_EMPTY, EMPTY, EMPTY, FIXED_TIC],
      [EMPTY, FIXED_TIC, FIXED_EMPTY, EMPTY, EMPTY, FIXED_EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [FIXED_TIC, EMPTY, EMPTY, EMPTY, FIXED_EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
  ]
};

var levels = [level1, level2, level3, level4, level5, level6, level7];