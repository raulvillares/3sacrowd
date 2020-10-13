/*global
level
*/

define(["js/properties", "js/sound", "js/squareImages", "js/info"], (properties, sound, squareImages, info) => {

    function createMedalDiv(){
        const medalDiv = document.createElement("div");
        medalDiv.id = "medalDiv";
        const header = document.getElementById("level");
        header.insertBefore(medalDiv, header.childNodes[0]);
        medalDiv.setAttribute("style","margin-bottom:3rem;")
    }

    function createMedal(title){
        const medal = document.createElement("div");
        const img = document.createElement("img");
        const titleSpan = document.createElement("span");

        medal.className = "medals";
        img.className = "medal-img";
        titleSpan.innerText = title;

        medal.appendChild(img);
        medal.appendChild(titleSpan);
        return medal;
    }

    function setMedalState(medal, state){
        const img = medal.getElementsByClassName("medal-img")[0];
        img.setAttribute("src", state);
    }

    function populateMedals(){
        const medals = [];
        const timeMedal = createMedal("Speed Demon!");
        const moveMedal = createMedal("Efficient!");
        const perfectMoves = createMedal("No Looking Back!");
        medals.push(timeMedal, moveMedal, perfectMoves);
        return medals;
    }

    function imageMedals(medal){
        setMedalState(medal, properties.MEDAL_OFF);
    }

    function Board() {
        this.squares = [];
    }

    Board.prototype.addRow = function(row) {
        this.squares.push(row);
    };

    Board.prototype.numberChangeableSquares = function() {
        let count = 0;
        this.squares.forEach(row => {
            row.forEach(square => {
                if (square.changeable) {++count; }
            });
        });
        return count;
    };

    Board.prototype.numberFilledSquares = function() {
        let count = 0;
        this.squares.forEach(row => {
            row.forEach(square => {
                if ((square.changeable) && (square.currentImage !== properties.EMPTY)) {++count; }
            });
        });
        return count;
    };

    Board.prototype.createElement = function() {
        function createBoardElement() {
            const boardElement = document.createElement("div");
            boardElement.className = "board";
            return boardElement;
        }

        function createRowElement() {
            const rowElement = document.createElement("div");
            rowElement.className = "row";
            return rowElement;
        }

        function createSquareElement(square) {
            function createSquareImageElement(square) {
                const squareImageElement = document.createElement("img");
                squareImageElement.className = "squareImage unpinned";
                squareImageElement.id = square.generateImageId();
                squareImageElement.src = squareImages.generateImagePath(square.currentImage);
                squareImageElement.draggable = false;
                squareImageElement.setAttribute("isAnimating", "no");
                return squareImageElement;
            }

            const squareElement = document.createElement("div");
            squareElement.className = "square";
            squareElement.appendChild(createSquareImageElement(square));
            return squareElement;
        }

        const boardElement = createBoardElement();
        boardElement.onclick = this.clicked; // on click call Board.clicked.
        boardElement.onmouseover = this.mouseover;  
        boardElement.onmouseout = this.mouseout;

        this.squares.forEach(row => {
            const rowElement = createRowElement();
            boardElement.appendChild(rowElement);
            row.forEach(square => {
                const squareElement = createSquareElement(square);
                rowElement.appendChild(squareElement);
            });
        });
        return boardElement;
    };

    Board.prototype.clicked = event => {
        if (level.filledSquares() < level.squaresToFill) {
            if (event.target.className.startsWith("squareImage")) {
                if (level.pinSelected) {
                    level.board.pinSquare(event.target.id);
                } else {
                    level.board.turnImage(event.target.id);
                }
            }
        }
    };
    function pinSelectedAndPinnable(mouseOveredSquare){
        if(level.pinSelected && !mouseOveredSquare.pinnable()){
            return true;
        }
        return false;
    }
    function isInteractiveSquare(mouseOveredSquare){    
        if((pinSelectedAndPinnable(mouseOveredSquare))||(mouseOveredSquare.pinned ||!mouseOveredSquare.changeable)){   
                    return false;   
                }   
        return true;    
    }   

    Board.prototype.mouseover = event => {    
        if (level.filledSquares() < level.squaresToFill) {  
            if (event.target.className.startsWith("squareImage")) { 
                const squarePosition = squareImages.getPosition(event.target.id); 
                let mouseOveredSquare = level.board.squares[squarePosition[0]][squarePosition[1]];  
                if(!isInteractiveSquare(mouseOveredSquare)){    
                    return; 
                }   
                event.target.style.transform = "scale(1.16)";   
            }   
        }   
    };  
    
    Board.prototype.mouseout = event => { 
        if (level.filledSquares() < level.squaresToFill) {  
            if (event.target.className.startsWith("squareImage")) { 
                const squarePosition = squareImages.getPosition(event.target.id); 
                let mouseOveredSquare = level.board.squares[squarePosition[0]][squarePosition[1]];  
                event.target.style.transform = "scale(1)";  
            }   
        }   
    };

    Board.prototype.pinSquare = squareId => {
        const squarePosition = squareImages.getPosition(squareId);
        let clickedSquare = level.board.squares[squarePosition[0]][squarePosition[1]];
        if (clickedSquare.pinned) {
            clickedSquare.unpin();
        } else {
            clickedSquare.pin();
        }
    };

    Board.prototype.validImage = (imageValue, position) => {

        function threeEquasValuesAdjacentAnywhere() {

            function threeEqualValuesAdjacent(offsetDirection1, offsetDirection2) {

                function validPositionAndContainsValue(checkedPosition) {

                    function validPosition(checkedPosition) {
                        return ((checkedPosition[0] >= 0) &&
                            (checkedPosition[1] >= 0) &&
                            (checkedPosition[0] <= level.board.squares.length - 1) &&
                            (checkedPosition[1] <= level.board.squares[0].length - 1)
                        );
                    }

                    function adjacentImageValue(checkedPosition) {
                        return level.board.squares[checkedPosition[0]][checkedPosition[1]].currentImage;
                    }

                    return validPosition(checkedPosition) && (squareImages.imageValuesEquivalent(imageValue, adjacentImageValue(checkedPosition)));
                }

                function threeValuesAdjacent(firstAdjacentDirection1ContainsValue, secondAdjacentDirection1ContainsValue, firstAdjacentDirection2ContainsValue, secondAdjacentDirection2ContainsValue) {
                    return (
                        (firstAdjacentDirection1ContainsValue && secondAdjacentDirection1ContainsValue) ||
                        (firstAdjacentDirection2ContainsValue && secondAdjacentDirection2ContainsValue) ||
                        (firstAdjacentDirection1ContainsValue && firstAdjacentDirection2ContainsValue)
                    );
                }

                let firstAdjacentDirection1ContainsValue = validPositionAndContainsValue([position[0] + offsetDirection1[0], position[1] + offsetDirection1[1]]);
                let secondAdjacentDirection1ContainsValue = validPositionAndContainsValue([position[0] + (offsetDirection1[0] * 2), position[1] + (offsetDirection1[1] * 2)]);
                let firstAdjacentDirection2ContainsValue = validPositionAndContainsValue([position[0] + offsetDirection2[0], position[1] + offsetDirection2[1]]);
                let secondAdjacentDirection2ContainsValue = validPositionAndContainsValue([position[0] + (offsetDirection2[0] * 2), position[1] + (offsetDirection2[1] * 2)]);
                return threeValuesAdjacent(firstAdjacentDirection1ContainsValue, secondAdjacentDirection1ContainsValue, firstAdjacentDirection2ContainsValue, secondAdjacentDirection2ContainsValue);
            }

            function threeEqualValuesAdjacentVertically() {
                return threeEqualValuesAdjacent([-1, 0], [1, 0]);
            }

            function threeEqualValuesAdjacentHorizontally() {
                return threeEqualValuesAdjacent([0, -1], [0, 1]);
            }

            function threeEqualValuesAdjacentDiagonally1() {
                return threeEqualValuesAdjacent([-1, -1], [1, 1]);
            }

            function threeEqualValuesAdjacentDiagonally2() {
                return threeEqualValuesAdjacent([-1, 1], [1, -1]);
            }

            return threeEqualValuesAdjacentVertically(imageValue, position) ||
                threeEqualValuesAdjacentHorizontally(imageValue, position) ||
                threeEqualValuesAdjacentDiagonally1(imageValue, position) ||
                threeEqualValuesAdjacentDiagonally2(imageValue, position);
        }

        return !threeEquasValuesAdjacentAnywhere();

    };

    Board.prototype.turnImage = function(squareId) {
        const squarePosition = squareImages.getPosition(squareId);
        let clickedSquare = this.squares[squarePosition[0]][squarePosition[1]];
        const initialImage = clickedSquare.currentImage;
        if ((!clickedSquare.pinned) && (clickedSquare.changeable)) {
            let imageBeingChecked = squareImages.nextImage(clickedSquare.currentImage);
            let validImageFound = false;
            while (!validImageFound) {
                if ((imageBeingChecked === properties.EMPTY) || (this.validImage(imageBeingChecked, squarePosition))) {
                    info.addMovement();
                    if(imageBeingChecked === initialImage && initialImage === properties.EMPTY) {
                        clickedSquare.animateBadClick()
                    }
                    clickedSquare.change(imageBeingChecked);
                    validImageFound = true;
                    if (imageBeingChecked !== properties.EMPTY) {
                        level.addMovement(squarePosition);
                    } else {
                        level.removeMovement(squarePosition);
                    }
                    if (level.filledSquares() === level.squaresToFill) {
                        document.getElementById("headerImage").setAttribute("src", properties.COMPLETED_FULL_PATH );
                        info.stop();
                        sound.play(sound.COMPLETED);
                        const timeMedal = info.medalTime();
                        const movementMedal = info.movementTotal();
                        createMedalDiv();
                        const medals = populateMedals();
                        medals.forEach(imageMedals);

                        if(timeMedal <= level.maxTimeAchievement){
                            setMedalState(medals[0], properties.MEDAL_ON);
                        }
                        if(movementMedal <= level.maxMovementsAchievement){
                          setMedalState(medals[1], properties.MEDAL_ON);

                        }
                        if(level.perfectMoves){
                          setMedalState(medals[2], properties.MEDAL_ON);
                        }

                        medals.forEach(medal => {
                            const winningDiv = document.getElementById("medalDiv");
                            winningDiv.appendChild(medal);
                        });
                    }
                } else {
                    imageBeingChecked = squareImages.nextImage(imageBeingChecked);
                }
            }
        } else {
            sound.play(sound.FORBIDDEN);
        }
    };

    return {
        createEmptyBoard() {
            return new Board();
        }
    };

});
