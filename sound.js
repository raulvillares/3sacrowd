const sounds = ["empty", "tic", "tac", "forbidden", "pinned", "unpinned", "undo", "completed"];
const FORBIDDEN = 3;
const PINNED = 4;
const UNPINNED = 5;
const UNDO = 6;
const COMPLETED = 7;

const play = function(id) {
    let audio = new Audio(SOUNDS_FOLDER+sounds[id]+SOUNDS_EXTENSION);
    audio.play();    
};

