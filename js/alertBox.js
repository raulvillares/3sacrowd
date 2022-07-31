define(() => {
  const alertBoxButton = document.querySelector(".alertButton");
  const alertBox = document.querySelector(".alertBox");
  const alertBoxText = document.querySelector(".alertText");
  const background = document.querySelector(".background");
  const displayAlert = (alertText, alertButtonText) => {
    background.style.display = "block";
    alertBox.style.display = "flex";
    alertBoxText.innerText = alertText;
    alertBoxButton.innerText = alertButtonText;
  };

  const closeAlert = (event) => {
    const children = alertBox.children;
    for (child of children) {
      child.innerText = "";
    }
    alertBox.style.display = "none";
    background.style.display = "none";
  };

  alertBoxButton.addEventListener("click", closeAlert);

  return {
    alertDisplay(alertText, alertButtonText) {
      displayAlert(alertText, alertButtonText);
    },
  };
});
