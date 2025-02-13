define(() => {
    const limitDialog = document.createElement("div");
    limitDialog.id = "limit-dialog";
    limitDialog.className = "limit-dialog";

    const heading = document.createElement("h3");
    heading.className = "limit-dialog__heading";
    heading.innerHTML = "Out of Moves!";

    const message = document.createElement("p");
    message.className = "limit-dialog__message";
    message.innerHTML = "You've reached the maximum number of plays for this level. Would you like to restart?";

    const restartButton = document.createElement("button");
    restartButton.className = "limit-dialog__button";
    restartButton.innerHTML = "Restart Level";
    restartButton.onclick = () => {
        location.reload(); 
    };

    const elementArray = [heading, message, restartButton];
    elementArray.forEach((element) => limitDialog.appendChild(element));

    return limitDialog;
});
