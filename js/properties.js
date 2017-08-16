define(function() {

    const NUMBER_OF_LEVELS = 19;
    const NUMBER_CHANGEABLE_IMAGES = 3;
    const SQUARE_IMAGES_FOLDER = "./img/squares/";
    const SQUARE_IMAGES_EXTENSION = ".png";
    const BACKGROUND_IMAGES_FOLDER = "./img/backgrounds/";
    const BACKGROUND_IMAGES_EXTENSION = ".png";
    const LOGO_FULL_PATH = "./img/logos/logo2.png";
    const COMPLETED_FULL_PATH = "./img/logos/completed.png";
    const MEDAL_OFF = "./img/medals/medal_off.png";
    const MEDAL_ON = "./img/medals/medal_on.png";
    const BUTTONS_IMAGES_FOLDER = "./img/buttons/";
    const BUTTONS_IMAGES_EXTENSION = ".png";
    const SOUNDS_FOLDER = "sound/";
    const SOUNDS_EXTENSION = ".mp3";
    const IMAGE_ID = /^imageRow(\d+)Column(\d+)$/g;
    const EMPTY = 0;
    const TIC = 1;
    const TAC = 2;
    const FIXED_EMPTY = 3;
    const FIXED_TIC = 4;
    const FIXED_TAC = 5;

    return {
        NUMBER_OF_LEVELS,
        NUMBER_CHANGEABLE_IMAGES,
        SQUARE_IMAGES_FOLDER,
        SQUARE_IMAGES_EXTENSION,
        BACKGROUND_IMAGES_FOLDER,
        BACKGROUND_IMAGES_EXTENSION,
        LOGO_FULL_PATH,
        COMPLETED_FULL_PATH,
        MEDAL_OFF,
        MEDAL_ON,
        BUTTONS_IMAGES_FOLDER,
        BUTTONS_IMAGES_EXTENSION,
        SOUNDS_FOLDER,
        SOUNDS_EXTENSION,
        IMAGE_ID,
        EMPTY,
        TIC,
        TAC,
        FIXED_EMPTY,
        FIXED_TIC,
        FIXED_TAC
    };

});