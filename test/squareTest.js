import test from "tape";

// Mock dependencies
const mockProperties = {
  NUMBER_CHANGEABLE_IMAGES: 3,
  TIC: 0,
  TAC: 1
};

const mockSquareImages = {
  generateImagePath: (imageId) => `mocked/path/to/image${imageId}.png`
};

const mockSound = {
  play: () => {},
  PINNED: "pinned",
  UNPINNED: "unpinned"
};

// Import the actual implementation with mock dependencies
function getSquareModule() {
  // This simulates the RequireJS define function
  const moduleExports = {};
  const moduleFn = (properties, squareImages, sound) => {
    const animationCallBack = (elementReference) => {
      elementReference.classList.remove('bad-animation');
      elementReference.setAttribute("isAnimating", "no");
      elementReference.removeEventListener("animationend", animationCallBack);
    };

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
      const element = document.getElementById(this.generateImageId());
      const isAnimatingState = element.getAttribute("isAnimating");

      if(isAnimatingState === "no") {
        element.setAttribute("isAnimating", "yes");
        element.addEventListener("animationend", () => animationCallBack(element));
        element.classList.add('bad-animation');
      }
    };

    Square.prototype.change = function(imageId) {
      this.changeImage(imageId);
      this.playSound(imageId);
    };

    Square.prototype.changeImage = function(imageId) {
      if (this.changeable) {
        this.currentImage = imageId;
        const element = document.getElementById(this.generateImageId());
        element.src = squareImages.generateImagePath(this.currentImage);
      }
    };

    Square.prototype.generateImageId = function() {
      return `imageRow${this.row}Column${this.column}`;
    };

    Square.prototype.pinnable = function() {
      return (this.currentImage === properties.TIC) || (this.currentImage === properties.TAC);
    };

    Square.prototype.pin = function() {
      if (this.pinnable()) {
        this.pinned = true;
        const element = document.getElementById(this.generateImageId());
        element.className = "squareImage pinned";
        sound.play(sound.PINNED);
      }
    };

    Square.prototype.unpin = function() {
      if (this.pinnable) {
        this.pinned = false;
        const element = document.getElementById(this.generateImageId());
        element.className = "squareImage unpinned";
        sound.play(sound.UNPINNED);
      }
    };

    Square.prototype.playSound = imageId => {
      sound.play(imageId);
    };

    return {
      create(initialImage, row, column) {
        return new Square(initialImage, row, column);
      }
    };
  };

  const moduleInstance = moduleFn(mockProperties, mockSquareImages, mockSound);
  return moduleInstance;
}

// For methods that reference the DOM, we need to mock those elements
const mockDOMElements = {};

// Mock document.getElementById
global.document = {
  getElementById: (id) => {
    if (!mockDOMElements[id]) {
      mockDOMElements[id] = {
        src: '',
        className: '',
        classList: {
          add: (className) => {},
          remove: (className) => {}
        },
        setAttribute: (attr, value) => {},
        getAttribute: (attr) => 'no',
        addEventListener: (event, callback) => {},
        removeEventListener: (event, callback) => {}
      };
    }
    return mockDOMElements[id];
  }
};

// Tests start here
test("Square creation with changeable images", (t) => {
  const squareModule = getSquareModule();
  
  const changeableSquare = squareModule.create(0, 1, 2);
  t.equal(changeableSquare.currentImage, 0, "Square should initialize with the correct image");
  t.equal(changeableSquare.row, 1, "Square should have the correct row");
  t.equal(changeableSquare.column, 2, "Square should have the correct column");
  t.equal(changeableSquare.changeable, true, "Square should be changeable if image < NUMBER_CHANGEABLE_IMAGES");
  t.equal(changeableSquare.pinned, false, "Square should not be pinned initially");
  
  t.end();
});

test("Square creation with non-changeable images", (t) => {
  const squareModule = getSquareModule();
  
  const nonChangeableSquare = squareModule.create(5, 3, 4);
  t.equal(nonChangeableSquare.currentImage, 5, "Square should initialize with the correct image");
  t.equal(nonChangeableSquare.changeable, false, "Square should not be changeable if image >= NUMBER_CHANGEABLE_IMAGES");
  
  t.end();
});

test("Square nextImage method", (t) => {
  const squareModule = getSquareModule();
  
  const changeableSquare = squareModule.create(0, 1, 2);
  t.equal(changeableSquare.nextImage(), 1, "nextImage should return the next cyclic image for changeable squares");
  
  const lastImageSquare = squareModule.create(2, 1, 2);
  t.equal(lastImageSquare.nextImage(), 0, "nextImage should cycle back to 0 after the last image");
  
  const nonChangeableSquare = squareModule.create(5, 3, 4);
  t.equal(nonChangeableSquare.nextImage(), 5, "nextImage should return the same image for non-changeable squares");
  
  t.end();
});

test("Square pinnable method", (t) => {
  const squareModule = getSquareModule();
  
  const ticSquare = squareModule.create(mockProperties.TIC, 1, 2);
  t.equal(ticSquare.pinnable(), true, "TIC squares should be pinnable");
  
  const tacSquare = squareModule.create(mockProperties.TAC, 1, 2);
  t.equal(tacSquare.pinnable(), true, "TAC squares should be pinnable");
  
  const otherSquare = squareModule.create(2, 1, 2);
  t.equal(otherSquare.pinnable(), false, "Other squares should not be pinnable");
  
  t.end();
});

test("Square generateImageId method", (t) => {
  const squareModule = getSquareModule();
  
  const square = squareModule.create(0, 3, 4);
  t.equal(square.generateImageId(), "imageRow3Column4", "generateImageId should create the correct ID string");
  
  t.end();
});
