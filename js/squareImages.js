/*global
level
*/

define(["js/properties"], function(properties) {

    return {

        imageValuesEquivalent(imageValue1, imageValue2) {
            const imageEquivalent = function imageEquivalent(imageValue) {
                if (imageValue === properties.FIXED_TIC) { return properties.TIC; }
                if (imageValue === properties.FIXED_TAC) { return properties.TAC; }
                if (imageValue === properties.TIC) { return properties.FIXED_TIC; }
                if (imageValue === properties.TAC) { return properties.FIXED_TAC; }
            };
            let equivalent =
                (imageValue1 === imageValue2) ||
                (
                    (imageValue1 === imageEquivalent(imageValue2)) ||
                    (imageValue2 === imageEquivalent(imageValue1))
                );
            return equivalent;
        },

        generateImagePath(imageIndex) {
            return properties.SQUARE_IMAGES_FOLDER + level.images[imageIndex] + properties.SQUARE_IMAGES_EXTENSION;
        },

        getPosition(imageId) {
            var position = [];
            let match = properties.IMAGE_ID.exec(imageId);
            while (match) {
                position = [Number(match[1]), Number(match[2])];
                match = properties.IMAGE_ID.exec(imageId);
            }
            return position;
        },

        nextImage(imageId) {
            return (imageId + 1) % properties.NUMBER_CHANGEABLE_IMAGES;
        },

        pinnableImage(imageId) {
            return (imageId === properties.TIC) || (imageId === properties.TAC);
        }

    };
});