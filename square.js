function Square(initialImage, row, column) {
    this.currentImage = initialImage;
    this.row = row;
    this.column = column;
    if(initialImage < NUMBER_CHANGEABLE_IMAGES) {
        this.changeable = true; 
    } else {
        this.changeable = false;  
    }
    this.pinned = false;
}

Square.prototype.nextImage = function() {
    if(this.changeable) {
        return (this.currentImage+1) % NUMBER_CHANGEABLE_IMAGES;
    } else {
        return this.currentImage;
    }
};

Square.prototype.change = function(imageId) {
    this.changeImage(imageId);
    this.playSound(imageId);
};

Square.prototype.changeImage = function(imageId) {
    if(this.changeable) {
        this.currentImage = imageId;
        document.getElementById(this.generateImageId()).src = generateImagePath(this.currentImage); 
    }
};

Square.prototype.generateImageId = function() {
    return "imageRow"+this.row+"Column"+this.column;
};

Square.prototype.pinnable = function() {
    return(this.currentImage == TIC) || (this.currentImage == TAC);
};

Square.prototype.pin = function() {
    if(this.pinnable()) {
        this.pinned = true;
        document.getElementById(this.generateImageId()).style.border = "dotted #000000";
        play(PINNED);
    }
};

Square.prototype.unpin = function() {
    if(this.pinnable) {
        this.pinned = false;
        document.getElementById(this.generateImageId()).style.border = "solid transparent";
        play(UNPINNED);
    }
};

Square.prototype.playSound = function(imageId) {
    play(imageId);
};