const sounds = ["empty", "tic", "tac", "forbidden"];
const FORBIDDEN = 3;

play = function(id) {
    var audio = new Audio(SOUNDS_FOLDER+sounds[id]+SOUNDS_EXTENSION);
    audio.play();    
}

