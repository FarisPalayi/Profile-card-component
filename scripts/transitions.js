editBtn.style.visibility = 'visible';
saveBtn.style.visibility = 'hidden';
cancelBtn.style.visibility = 'hidden';


function show(){
    saveBtn.style.visibility = 'visible';
    cancelBtn.style.visibility = 'visible';
    
    setTimeout(() => {
        saveBtn.style.transform = "translateX(120%)";
        cancelBtn.style.transform = "translateX(240%)";
    }, 50);
}

function hide(){
    saveBtn.style.transform = "translateX(0%)";
    cancelBtn.style.transform = "translateX(0%)";

    setTimeout(() => {
        saveBtn.style.visibility = 'hidden';
        cancelBtn.style.visibility = 'hidden';
    }, 350);
}

editBtn.addEventListener('click', show);
saveBtn.addEventListener('click', hide);
cancelBtn.addEventListener('click', hide);