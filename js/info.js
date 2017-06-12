define([], function() {

    const separator = ' · ';
    let intervalId;
    let levelNumber;
    let totalSeconds = 0;
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    const regenerate = function() {
        const getTime = function() {
            const pad = function(val) {
                var valString = val + "";
                if (valString.length < 2) {
                    return "0" + valString;
                } else {
                    return valString;
                }
            };

            ++totalSeconds;
            return pad(parseInt(totalSeconds / 60)) + ":" + pad(totalSeconds % 60);
        };

        document.getElementsByClassName('info')[0].innerHTML = levelNumber + separator + getTime();

    }

    return {
        generateInfo: function generateInfo(currentLevel, numberOfLevels) {
            levelNumber = 'Level ' + currentLevel + '/' + numberOfLevels;
            totalSeconds = 0;
            let infoElement = document.createElement("div");
            infoElement.className = "info";
            infoElement.innerHTML = levelNumber + separator + '00:00';
            intervalId = setInterval(regenerate, 1000);
            return infoElement;
        },
        stop: function stop() {
            window.clearInterval(intervalId);
        }
    }
});