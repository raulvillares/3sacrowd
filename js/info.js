define([], function() {

    const separator = " · ";
    let intervalId;
    let levelNumber;
    let movements = 0;
    let totalSeconds = 0;
    let minutes = 0;
    let seconds = 0;
    let level;

    const getInfo = function() {
        level = this.level;
        const getTime = function() {
            const pad = function(val) {
                var valString = val + "";
                if (valString.length < 2) {
                    return "0" + valString;
                } else {
                    return valString;
                }
            };

            const getMaxTimeString = function() {
                return " (max " + pad(parseInt(level.maxTimeAchievement / 60)) + ":" + pad(level.maxTimeAchievement % 60) + ") ";
            };

            return pad(parseInt(totalSeconds / 60)) + ":" + pad(totalSeconds % 60) + getMaxTimeString();
        };

        const getMaxMovements = function() {
            return " (max " + level.maxMovementsAchievement + ")";
        };

        const getMovements = function() {
            return (movements === 1 ? "1 move" : movements + " moves") + getMaxMovements() ;
        };

        return levelNumber + separator + getTime() + separator + getMovements();
    };

    const regenerate = function() {
        ++totalSeconds;
        document.getElementsByClassName("info")[0].innerHTML = getInfo();
    };

    return {
        generateInfo: function generateInfo(currentLevel, numberOfLevels) {
            levelNumber = "Level " + currentLevel + "/" + numberOfLevels;
            movements = 0;
            totalSeconds = 0;
            let Element = document.createElement("div");
            Element.className = "info";
            Element.innerHTML = getInfo();
            intervalId = setInterval(regenerate, 1000);
            return Element;
        },
        addMovement: function addMovement() {
            ++movements;
        },
        stop: function stop() {
            window.clearInterval(intervalId);
        },
        medalTime: function medalTime() {
            return totalSeconds;
        },
        movementTotal: function movementTotal() {
            return movements;
        }
    };
});