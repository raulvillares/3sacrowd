define(["js/properties", "js/squareImages", "js/sound"], function(properties, squareImages, sound) {

    function animationCallBack()
    {
        this.classList.remove('bad-animation')
        this.setAttribute("isAnimating", "no")
        this.removeEventListener("animationend", animationCallBack)
    }

    function Square(initialImage, row, column) {
        this.currentImage = initialImage;
        this.row = row;
        this.column = column;
        if (initialImage < properties.NUMBER_CHANGEABLE_IMAGES) {
            this.changeable = true;
        } else {
            this.changeable = false;
        }
        this.pinned = false;
    }

    Square.prototype.nextImage = function() {
        if (this.changeable) {
            return (this.currentImage + 1) % properties.NUMBER_CHANGEABLE_IMAGES;
        } else {
            return this.currentImage;
        }
    };

    Square.prototype.animateBadClick = function() {
        const element =  document.getElementById(this.generateImageId())
        const isAnimatingState = element.getAttribute("isAnimating")

        if(isAnimatingState === "no") {
            element.setAttribute("isAnimating", "yes")
            element.addEventListener("animationend", animationCallBack)
            element.classList.add('bad-animation')
        }
    };

    Square.prototype.change = function(imageId) {
        this.changeImage(imageId);
        this.playSound(imageId);
    };

    Square.prototype.changeImage = function(imageId) {
        if (this.changeable) {
            this.currentImage = imageId;
            const element =  document.getElementById(this.generateImageId())
            element.src = squareImages.generateImagePath(this.currentImage);
        }
    };

    Square.prototype.generateImageId = function() {
        return "imageRow" + this.row + "Column" + this.column;
    };

    Square.prototype.pinnable = function() {
        return (this.currentImage === properties.TIC) || (this.currentImage === properties.TAC);
    };

    Square.prototype.pin = function() {
        if (this.pinnable()) {
            this.pinned = true;
            const element =  document.getElementById(this.generateImageId())
            element.className = "squareImage pinned";
            sound.play(sound.PINNED);
        }
    };

    Square.prototype.unpin = function() {
        if (this.pinnable) {
            this.pinned = false;
            const element =  document.getElementById(this.generateImageId())
            element.className = "squareImage unpinned";
            sound.play(sound.UNPINNED);
        }
    };

    Square.prototype.playSound = function(imageId) {
        sound.play(imageId);
    };

    return {
        create(initialImage, row, column) {
            return new Square(initialImage, row, column);
        }
    };
    
});