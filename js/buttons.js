/*global
level
*/

define(["js/properties", "js/sound", "js/info"], function(properties, sound, info) {

    let loadLevel;

    const undoMovement = function(event) {
        if (level.filledSquares() === level.squaresToFill) {
            document.getElementById("undo").disabled = true;
        } else if (level.hasMovements()) {
            var positionLastMovement = level.undoMovement();
            var squareLastMovement = level.board.squares[positionLastMovement[0]][positionLastMovement[1]];
            if (squareLastMovement.pinned) { squareLastMovement.unpin(); }
            squareLastMovement.changeImage(properties.EMPTY);
            sound.play(sound.UNDO);
            level.perfectMoves = false;
        }
    };

    const pinSquare = function(event) {
        if (level.pinSelected) {
            let squares = Array.prototype.slice.call(document.getElementsByClassName("square"));
            squares.forEach(function(squareElement) {
                squareElement.className = "square";
            });
            document.getElementById("pin").setAttribute("src", properties.BUTTONS_IMAGES_FOLDER + "pin" + properties.BUTTONS_IMAGES_EXTENSION);
            level.pinSelected = false;
        } else {
            let squares = Array.prototype.slice.call(document.getElementsByClassName("square"));
            squares.forEach(function(squareElement) {
                squareElement.className = "square pin";
            });
            document.getElementById("pin").setAttribute("src", properties.BUTTONS_IMAGES_FOLDER + "pin_selected" + properties.BUTTONS_IMAGES_EXTENSION); 
            level.pinSelected = true;
        }
    };

    const restartLevel = function(event) {
        info.stop();
        level = loadLevel(level.number);
    };

    const previousLevel = function(event) {
        if (level.number === 1) {
            document.getElementById("previous").disabled = true;
        } else {
            info.stop();
            level = loadLevel(level.number - 1);
        }
    };

    const nextLevel = function(event) {
        if (level.number === properties.NUMBER_OF_LEVELS) {
            document.getElementById("next").disabled = true;
        } else {
            info.stop();
            level = loadLevel(level.number + 1);
        }
    };

    return {

        setLoadLevel(loadFunction) {
            loadLevel = loadFunction;
        },

        createButtons() {
            const createButton = function(id, description) {
                var button = document.createElement("img");
                button.className = "button";
                button.id = id;
                button.width = 53;
                button.height = 53;
                button.setAttribute("src", properties.BUTTONS_IMAGES_FOLDER + id + properties.BUTTONS_IMAGES_EXTENSION);
                button.title = description;
                return button;
            };

            var buttonsElement = document.createElement("div");
            buttonsElement.className = "buttons";
            var imageButtonsElement = document.createElement("div");
            imageButtonsElement.className = "imageButtons";
            var undoButton = createButton("undo", "Undo movement");
            undoButton.onclick = undoMovement;
            var restartButton = createButton("restart", "Restart level");
            restartButton.onclick = restartLevel;
            var pinButton = createButton("pin", "Pin Square");
            pinButton.onclick = pinSquare;
            var previousButton = createButton("previous", "Previous level");
            previousButton.onclick = previousLevel;
            var nextButton = createButton("next", "Next level");
            nextButton.onclick = nextLevel;
            imageButtonsElement.appendChild(previousButton);
            imageButtonsElement.appendChild(undoButton);
            imageButtonsElement.appendChild(pinButton);
            imageButtonsElement.appendChild(restartButton);
            imageButtonsElement.appendChild(nextButton);
            buttonsElement.appendChild(imageButtonsElement);
            return buttonsElement;
        }

    };

});