const NUMBER_CHANGEABLE_IMAGES = 3;

const EMPTY = 0;
const TIC = 1;
const TAC = 2;
const FIXED_EMPTY = 3;
const FIXEX_TIC = 4;
const FIXED_TAC = 5;

const images = ["empty", "blue", "pink", "box", "blue_fixe", "pink_fixed"];
var board = [];

function Square(initialImage) {
    this.currentImage = initialImage;
}

Square.prototype.change = function() {
    this.currentImage = (this.currentImage+1) % NUMBER_CHANGEABLE_IMAGES;
}

Square.prototype.toString = function() {
    return images[this.currentImage];
}

var square1 = new Square(0);
console.log(square1.toString());
square1.change();
console.log(square1.toString());
square1.change();
console.log(square1.toString());
square1.change();
console.log(square1.toString());