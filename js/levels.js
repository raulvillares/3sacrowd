define(["js/properties"], function(properties) {

    const level1 = {
        "levelNumber": 1,
        "backgroundImage": "colored_land",
        "imagesFilesNames": [
            "empty",
            "blue",
            "pink",
            "metal",
            "blueFixed",
            "pinkFixed"
        ],
        "initialSquares": [
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_TAC, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC]
        ],
        "maxTimeAchievement": 60,
        "maxMovementsAchievement": 30
    };

    const level2 = {
        "levelNumber": 2,
        "backgroundImage": "blue_desert",
        "imagesFilesNames": [
            "empty",
            "yellow",
            "green",
            "box",
            "yellowFixed",
            "greenFixed"
        ],
        "initialSquares": [
            [properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.FIXED_TIC],
            [properties.FIXED_TAC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY]
        ],
        "maxTimeAchievement": 120,
        "maxMovementsAchievement": 40
    };

    const level3 = {
        "levelNumber": 3,
        "backgroundImage": "uncolored_castle",
        "imagesFilesNames": [
            "empty",
            "ghost",
            "blackandwhite",
            "castle",
            "ghostFixed",
            "blackandwhiteFixed"
        ],
        "initialSquares": [
            [properties.EMPTY, properties.FIXED_TIC, properties.FIXED_TIC, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
            [properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 120,
        "maxMovementsAchievement": 40
    };

    const level4 = {
        "levelNumber": 4,
        "backgroundImage": "colored_forest",
        "imagesFilesNames": [
            "empty",
            "garnet",
            "orange",
            "wood",
            "garnetFixed",
            "orangeFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC],
            [properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 120,
        "maxMovementsAchievement": 40
    };

    const level5 = {
        "levelNumber": 5,
        "backgroundImage": "uncolored_desert",
        "imagesFilesNames": [
            "empty",
            "minty",
            "paleYellow",
            "brick",
            "mintyFixed",
            "paleyellowFixed"
        ],
        "initialSquares": [
            [properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TAC],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_EMPTY, properties.FIXED_TIC, properties.FIXED_TIC, properties.EMPTY, properties.FIXED_TAC]
        ],
        "maxTimeAchievement": 120,
        "maxMovementsAchievement": 40
    };

    const level6 = {
        "levelNumber": 6,
        "backgroundImage": "canvas_colored_talltrees",
        "imagesFilesNames": [
            "canvasEmpty",
            "canvasBlue",
            "canvasPink",
            "canvasWood",
            "canvasBlueFixed",
            "canvasPinkFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TIC, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TAC],
            [properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 120,
        "maxMovementsAchievement": 40
    };

    const level7 = {
        "levelNumber": 7,
        "backgroundImage": "colored_forest",
        "imagesFilesNames": [
            "empty",
            "garnet",
            "orange",
            "wood",
            "garnetFixed",
            "orangeFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TAC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.FIXED_TAC],
            [properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 300,
        "maxMovementsAchievement": 50
    };

    const level8 = {
        "levelNumber": 8,
        "backgroundImage": "colored_shroom",
        "imagesFilesNames": [
            "empty",
            "orange",
            "minty",
            "wood",
            "orangeFixed",
            "mintyFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TAC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TAC]
        ],
        "maxTimeAchievement": 300,
        "maxMovementsAchievement": 50
    };

    const level9 = {
        "levelNumber": 9,
        "backgroundImage": "uncolored_peaks",
        "imagesFilesNames": [
            "empty",
            "red",
            "paleYellow",
            "stone",
            "redFixed",
            "paleyellowFixed"
        ],
        "initialSquares": [
            [properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC],
            [properties.EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.FIXED_TAC]
        ],
        "maxTimeAchievement": 300,
        "maxMovementsAchievement": 50
    };

    const level10 = {
        "levelNumber": 10,
        "backgroundImage": "blue_land",
        "imagesFilesNames": [
            "empty",
            "lime",
            "ghost",
            "metal",
            "limeFixed",
            "ghostFixed"
        ],
        "initialSquares": [
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY],
            [properties.FIXED_TAC, properties.FIXED_EMPTY, properties.FIXED_TAC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC]
        ],
        "maxTimeAchievement": 300,
        "maxMovementsAchievement": 50
    };

    const level11 = {
        "levelNumber": 11,
        "backgroundImage": "blue_shroom",
        "imagesFilesNames": [
            "empty",
            "purple",
            "blue",
            "brick",
            "purpleFixed",
            "blueFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 300,
        "maxMovementsAchievement": 50
    };

    const level12 = {
        "levelNumber": 12,
        "backgroundImage": "colored_talltrees",
        "imagesFilesNames": [
            "empty",
            "pink2",
            "pistachio",
            "metal",
            "pink2Fixed",
            "pistachioFixed"
        ],
        "initialSquares": [
            [properties.EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TAC],
            [properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 300,
        "maxMovementsAchievement": 50
    };

    const level13 = {
        "levelNumber": 13,
        "backgroundImage": "uncolored_plain",
        "imagesFilesNames": [
            "empty",
            "canvasBlue",
            "greyblue",
            "castle",
            "canvasBlueFixed",
            "greyblueFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY],
            [properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TAC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 300,
        "maxMovementsAchievement": 50
    };

    const level14 = {
        "levelNumber": 14,
        "backgroundImage": "colored_forest",
        "imagesFilesNames": [
            "empty",
            "blackandwhite",
            "orange",
            "wood",
            "blackandwhiteFixed",
            "orangeFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 300,
        "maxMovementsAchievement": 50
    };

    const level15 = {
        "levelNumber": 15,
        "backgroundImage": "colored_piramids",
        "imagesFilesNames": [
            "empty",
            "ghost",
            "green",
            "brick",
            "ghostFixed",
            "greenFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC],
            [properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_TAC, properties.EMPTY],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC]
        ],
        "maxTimeAchievement": 600,
        "maxMovementsAchievement": 60
    };

    const level16 = {
        "levelNumber": 16,
        "backgroundImage": "uncolored_hills",
        "imagesFilesNames": [
            "empty",
            "rainbow",
            "yellow",
            "stone",
            "rainbowFixed",
            "yellowFixed"
        ],
        "initialSquares": [
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_EMPTY, properties.FIXED_TIC, properties.EMPTY],
            [properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_TAC, properties.FIXED_TIC],
            [properties.EMPTY, properties.FIXED_TIC, properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 600,
        "maxMovementsAchievement": 60
    };
    const level17 = {
        "levelNumber": 17,
        "backgroundImage": "uncolored_talltrees",
        "imagesFilesNames": [
            "empty",
            "garnet",
            "greyblue",
            "metal",
            "garnetFixed",
            "greyblueFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TAC, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_TAC],
            [properties.FIXED_TAC, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY],
            [properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY]
        ],
        "maxTimeAchievement": 600,
        "maxMovementsAchievement": 60
    };

    const level18 = {
        "levelNumber": 18,
        "backgroundImage": "colored_desert",
        "imagesFilesNames": [
            "empty",
            "red",
            "lime",
            "metal2",
            "redFixed",
            "limeFixed"
        ],
        "initialSquares": [
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_TIC, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_TIC],
            [properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.FIXED_TIC, properties.EMPTY]
        ],
        "maxTimeAchievement": 600,
        "maxMovementsAchievement": 60
    };

    const level19 = {
        "levelNumber": 19,
        "backgroundImage": "colored_castle",
        "imagesFilesNames": [
            "empty",
            "pink2",
            "ghost",
            "wood",
            "pink2Fixed",
            "ghostFixed"
        ],
        "initialSquares": [
            [properties.EMPTY, properties.FIXED_TIC, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC],
            [properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.FIXED_EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TAC],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.FIXED_TAC, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY],
            [properties.EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC, properties.FIXED_EMPTY, properties.EMPTY, properties.EMPTY, properties.FIXED_TIC]
        ],
        "maxTimeAchievement": 600,
        "maxMovementsAchievement": 60
    };

    const levels = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11, level12, level13, level14, level15, level16, level17, level18, level19];

    return {
        getLevelData(levelNumber) {
            return levels[levelNumber - 1];
        }
    };

});