define(["js/properties"], function(properties) {

    const SOUNDS = ["empty", "tic", "tac", "forbidden", "pinned", "unpinned", "undo", "completed"];
    const FORBIDDEN = 3;
    const PINNED = 4;
    const UNPINNED = 5;
    const UNDO = 6;
    const COMPLETED = 7;

    return {

        SOUNDS,
        FORBIDDEN,
        PINNED,
        UNPINNED,
        UNDO,
        COMPLETED,

        play(id) {
            let audio = new Audio(properties.SOUNDS_FOLDER + SOUNDS[id] + properties.SOUNDS_EXTENSION);
            audio.play();
        }

    };

});