define([], function() {
    return {
        generateInfo: function generateInfo(currentLevel, numberOfLevels) {
            let infoElement = document.createElement("div");
            infoElement.className = "info";
            infoElement.appendChild(document.createTextNode("Level " + currentLevel + "/" + numberOfLevels));
            return infoElement;
        }
    }
});