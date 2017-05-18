var undo = function(event) {
    if(level.movements.length > 0) {
        var positionLastMovement = level.movements.pop();
        var squareLastMovement = level.board.squares[positionLastMovement[0]][positionLastMovement[1]];
        if(squareLastMovement.pinned) squareLastMovement.unpin();
        squareLastMovement.changeImage(EMPTY);
        --level.filledSquares;
    }
}

var pin = function(event) {
    if(level.pinSelected) {
        document.getElementById("pin").src = BUTTONS_IMAGES_FOLDER+"pin"+BUTTONS_IMAGES_EXTENSION;
        level.pinSelected = false;
    } else {
        document.getElementById("pin").src = BUTTONS_IMAGES_FOLDER+"pin_selected"+BUTTONS_IMAGES_EXTENSION;
        level.pinSelected = true;
    }
}

function createButtons() {
    function createButton(id, description) {
        var button = document.createElement("img");
        button.className = "button";
        button.id = id;
        button.width = 53;
        button.height = 53;
        button.src = BUTTONS_IMAGES_FOLDER+id+BUTTONS_IMAGES_EXTENSION;
        button.title = description;    
        return button;        
    }

    var buttonsElement = document.createElement("div");
    buttonsElement.className = "buttons";
    var imageButtonsElement = document.createElement("div");
    imageButtonsElement.className = "imageButtons";
    imageButtonsElement.appendChild(createButton("previous", "Previous level"));
    var undoButton = createButton("undo", "Undo movement");
    undoButton.addEventListener("click", undo);
    imageButtonsElement.appendChild(undoButton);
    imageButtonsElement.appendChild(createButton("restart", "Restart level"));
    var pinButton = createButton("pin", "Pin Square");
    pinButton.addEventListener("click", pin);
    imageButtonsElement.appendChild(pinButton);
    imageButtonsElement.appendChild(createButton("next", "next level"));
    buttonsElement.appendChild(imageButtonsElement);
    return buttonsElement;
}