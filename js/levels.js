define(['js/properties'], function(properties) {

    const level1 = {
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
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_TAC, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC]
        ]
    };

    const level2 = {
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
            [properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.FIXED_TIC],
            [properties.FIXED_TAC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY]
        ]
    };

    const level3 = {
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
            [properties.EMPTY, properties.FIXED_TIC, properties.FIXED_TIC, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
            [properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY]
        ]
    };

    const level4 = {
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
        [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC],
        [properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
        [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
        [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
        [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
    ]
    };

    const level5 = {
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
        [properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TAC],
        [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
        [properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
        [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
        [properties.FIXED_EMPTY, properties.FIXED_TIC, properties.FIXED_TIC, properties.EMPTY, properties.FIXED_TAC]
    ]
    };

    const level6 = {
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
        [properties.FIXED_TIC, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TAC],
        [properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
        [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
        [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
        [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
    ]
    };

    const level7 = {
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
        [properties.FIXED_TAC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.FIXED_TAC],
        [properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
        [properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
        [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
        [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
        [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
    ]
    };

    const levels = [level1, level2, level3, level4, level5, level6, level7];

    return {
        getLevelData: function(levelNumber) {
            return levels[levelNumber-1];
        }
    }

});