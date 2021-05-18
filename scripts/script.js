const body = document.body,

      name      = document.querySelector('.name'),
      place     = document.querySelector('.place'),
      age       = document.querySelector('.age'),
      followers = document.querySelector('.followers-count'),
      likes     = document.querySelector('.likes-count'),
      photos    = document.querySelector('.photos-count'),

      editableElements = document.querySelectorAll('.editable'),

      editBtn   = document.querySelector('.edit-btn'),
      saveBtn   = document.querySelector('.save-btn'),
      cancelBtn = document.querySelector('.cancel-btn');

function showText(dataObj){
    name.innerText = dataObj.name;
    place.innerText = dataObj.place;
    age.innerText = dataObj.age;
    followers.innerText = dataObj.stats.followers;
    likes.innerText = dataObj.stats.likes;
    photos.innerText = dataObj.stats.photos;
}

let edit = () => editableElements.forEach((element) => element.setAttribute('contenteditable','true'));

editBtn.addEventListener('click', edit);

function isUserInputValid() {
    if(
        name.innerText.trim() === '' || 
        place.innerText.trim() === '' || 
        age.innerText.trim() === '' || 
        followers.innerText.trim() === '' || 
        likes.innerText.trim() === '' || 
        photos.innerText === ''
    )
      return false;
    else
      return true;
}

function saveData() {
    if(isUserInputValid()) {
        let data = {
            name : name.innerText.trim(),
            place : place.innerText.trim(),
            age : age.innerText.trim(),
            stats : {
                followers : followers.innerText.trim(),
                likes : likes.innerText.trim(),
                photos : photos.innerText.trim()
            }
        }

        let dataObjString = JSON.stringify(data);
        localStorage.setItem("userData",dataObjString);

        editableElements.forEach((element) => element.setAttribute('contenteditable','false'));

        hide();

    } else {
        alert("invalid input")
    }
}

saveBtn.addEventListener('click',saveData);

function loadData() {
    let localStorageData = localStorage.getItem("userData");
    if(localStorageData){
        showText(JSON.parse(localStorageData));
        return true
    } else {
        return false;
    }
}
loadData()

function cancel() {
    let fallbackDataObj = {
        name : "Victor Crest",
        place : "London",
        age : 26,
        stats : {
            followers : "80K",
            likes : "803K",
            photos : "1.4K"
        }
    };

    editableElements.forEach((element) => element.setAttribute('contenteditable','false'));

    // calling and using as a condition
    if(!loadData()) showText(fallbackDataObj);
}

cancelBtn.addEventListener('click', cancel);