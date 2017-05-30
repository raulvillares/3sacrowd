function imageValuesEquivalent(imageValue1, imageValue2) {
	function imageEquivalent(imageValue) {
		if(imageValue == FIXED_TIC) { return TIC; }
		if(imageValue == FIXED_TAC) { return TAC; }
		if(imageValue == TIC) { return FIXED_TIC; }
		if(imageValue == TAC) { return FIXED_TAC; }
	}
	let equivalent =
			(imageValue1 == imageValue2) || 
			( 
				(imageValue1 == imageEquivalent(imageValue2))  ||
				(imageValue2 == imageEquivalent(imageValue1))
			);
	return equivalent;
}

function generateImagePath(imageIndex) {
    return SQUARE_IMAGES_FOLDER+level.images[imageIndex]+SQUARE_IMAGES_EXTENSION; 
}

function getPosition(imageId){
    var position = [];
	let match = IMAGE_ID.exec(imageId);
    while (match) {
        position = [Number(match[1]), Number(match[2])];
		match = IMAGE_ID.exec(imageId);
	}
    return position;
}

function nextImage(imageId) {
	return (imageId+1) % NUMBER_CHANGEABLE_IMAGES;
}

function pinnableImage(imageId) {
	return(imageId == TIC) || (imageId == TAC);
}