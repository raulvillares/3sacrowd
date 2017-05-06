function Square(initialImage, row, column) {
    this.currentImage = initialImage;
    this.row = row;
    this.column = column;
    if(initialImage < NUMBER_CHANGEABLE_IMAGES)
        this.changeable = true; 
    else 
        this.changeable = false;  
}

Square.prototype.nextImage = function() {
    if(this.changeable)
        return (this.currentImage+1) % NUMBER_CHANGEABLE_IMAGES;
    else
        return this.currentImage;
}

Square.prototype.changeImage = function(imageId) {
    if(this.changeable) {
        this.currentImage = imageId;
        document.getElementById("imageRow"+this.row+"Column"+this.column).src = generateImagePath(this.currentImage); 
    }
}

Square.prototype.generateImageId = function() {
    return "imageRow"+this.row+"Column"+this.column;
}

Square.prototype.toString = function() {
    return images[this.currentImage];
}