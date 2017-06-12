define(["js/properties", "js/squareImages", "js/sound"], function(properties, squareImages, sound) {

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

    Square.prototype.change = function(imageId) {
        this.changeImage(imageId);
        this.playSound(imageId);
    };

    Square.prototype.changeImage = function(imageId) {
        if (this.changeable) {
            this.currentImage = imageId;
            document.getElementById(this.generateImageId()).src = squareImages.generateImagePath(this.currentImage);
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
            let element = document.getElementById(this.generateImageId());
            element.className = "squareImage pinned";
            sound.play(sound.PINNED);
        }
    };

    Square.prototype.unpin = function() {
        if (this.pinnable) {
            this.pinned = false;
            let element = document.getElementById(this.generateImageId());
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