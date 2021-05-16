editBtn.style.visibility = "visible";
saveBtn.style.visibility = "hidden";
cancelBtn.style.visibility = "hidden";

function show() {
  saveBtn.style.visibility = "visible";
  cancelBtn.style.visibility = "visible";

  setTimeout(() => {
    saveBtn.style.transform = "translateX(0%)";
    cancelBtn.style.transform = "translateX(120%)";
  }, 50);

  editBtn.style.visibility = "hidden";

  body.style.backgroundColor = "deeppink";
  name.focus();
}

function hide() {
  saveBtn.style.transform = "translateX(0%)";
  cancelBtn.style.transform = "translateX(0%)";

  setTimeout(() => {
    saveBtn.style.visibility = "hidden";
    cancelBtn.style.visibility = "hidden";
  }, 350);

  editBtn.style.visibility = "visible";
  body.style.backgroundColor = "rgb(25, 162, 174)";
}

editBtn.addEventListener("click", show);

// saveBtn.addEventListener("click", hide);

cancelBtn.addEventListener("click", hide);
