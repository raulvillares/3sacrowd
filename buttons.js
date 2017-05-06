function createButtons() {
    function createButton(id, description) {
        var button = document.createElement("img");
        button.className = "button";
        button.id = id;
        button.src = BUTTONS_IMAGES_FOLDER+id+BUTTONS_IMAGES_EXTENSION;
        button.title = description;    
        return button;        
    }

    var buttonsElement = document.createElement("div");
    buttonsElement.className = "buttons";
    var imageButtonsElement = document.createElement("div");
    imageButtonsElement.className = "imageButtons";
    imageButtonsElement.appendChild(createButton("previous", "Previous level"));
    imageButtonsElement.appendChild(createButton("undo", "Undo movement"));
    imageButtonsElement.appendChild(createButton("restart", "Restart level"));
    imageButtonsElement.appendChild(createButton("next", "next level"));
    buttonsElement.appendChild(imageButtonsElement);
    return buttonsElement;
}