define(['js/properties', 'js/sound'], function(properties, sound) {

    let loadLevel;

    const undoMovement =  function(event) {
        if(level.movements.length > 0) {
            var positionLastMovement = level.movements.pop();
            var squareLastMovement = level.board.squares[positionLastMovement[0]][positionLastMovement[1]];
            if(squareLastMovement.pinned) { squareLastMovement.unpin(); }
            squareLastMovement.changeImage(properties.EMPTY);
            sound.play(sound.UNDO);
        }
    };

    const pinSquare = function(event) {
        if(level.pinSelected) {
            document.getElementById("pin").src = properties.BUTTONS_IMAGES_FOLDER+"pin"+properties.BUTTONS_IMAGES_EXTENSION;
            level.pinSelected = false;
        } else {
            document.getElementById("pin").src = properties.BUTTONS_IMAGES_FOLDER+"pin_selected"+properties.BUTTONS_IMAGES_EXTENSION;
            level.pinSelected = true;
        }
    };

    const restartLevel = function(event) {
        level = loadLevel(level.number);
    };

    const previousLevel = function(event) {
        if (level.number === 1) {
            document.getElementById("previous").diabled = true;
        } else {
            level = loadLevel(level.number-1);
        }
    };

    const nextLevel = function(event) {
        if(level.number <= properties.NUMBER_OF_LEVELS) {
            level = loadLevel(level.number+1);
        }
    };

    return {

        setLoadLevel: function setLoadLevel(loadFunction) {
            loadLevel = loadFunction;
        },

        createButtons: function createButtons() {
            const createButton = function(id, description) {
                var button = document.createElement("img");
                button.className = "button";
                button.id = id;
                button.width = 53;
                button.height = 53;
                button.src = properties.BUTTONS_IMAGES_FOLDER+id+properties.BUTTONS_IMAGES_EXTENSION;
                button.title = description;
                return button;
            }

            var buttonsElement = document.createElement("div");
            buttonsElement.className = "buttons";
            var imageButtonsElement = document.createElement("div");
            imageButtonsElement.className = "imageButtons";
            var undoButton = createButton("undo", "Undo movement");
            undoButton.addEventListener("click", undoMovement);
            var restartButton = createButton("restart", "Restart level");
            restartButton.addEventListener("click", restartLevel);
            var pinButton = createButton("pin", "Pin Square");
            pinButton.addEventListener("click", pinSquare);
            var previousButton = createButton("previous", "Previous level");
            previousButton.addEventListener("click", previousLevel);
            var nextButton = createButton("next", "Next level");
            nextButton.addEventListener("click", nextLevel);
            imageButtonsElement.appendChild(previousButton);
            imageButtonsElement.appendChild(undoButton);
            imageButtonsElement.appendChild(pinButton);
            imageButtonsElement.appendChild(restartButton);
            imageButtonsElement.appendChild(nextButton);
            buttonsElement.appendChild(imageButtonsElement);
            return buttonsElement;
        }

    }

});
