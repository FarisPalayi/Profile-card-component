editBtn.style.visibility = "visible";
saveBtn.style.visibility = "hidden";
cancelBtn.style.visibility = "hidden";

function show() {
  saveBtn.style.visibility = "visible";
  cancelBtn.style.visibility = "visible";
  
  editableElements.forEach((elements) => elements.style.color = "hsl(185, 72%, 35%)");

  setTimeout(() => {
    saveBtn.style.transform = "translateX(0%)";
    cancelBtn.style.transform = "translateX(120%)";
  }, 50);

  editBtn.style.visibility = "hidden";
  body.style.backgroundColor = "hsl(185, 75%, 29%)";
  body.style.transition = "background-color 1s"

  name.focus();
}

function hide() {
  saveBtn.style.transform = "translateX(0%)";
  cancelBtn.style.transform = "translateX(0%)";

  editableElements.forEach((elements) => elements.style.color = "rgb(45, 50, 72)");

  setTimeout(() => {
    saveBtn.style.visibility = "hidden";
    cancelBtn.style.visibility = "hidden";
  }, 350);

  editBtn.style.visibility = "visible";
  body.style.backgroundColor = "hsl(185, 75%, 39%)";
}

editBtn.addEventListener("click", show);

// saveBtn.addEventListener("click", hide);

cancelBtn.addEventListener("click", hide);
