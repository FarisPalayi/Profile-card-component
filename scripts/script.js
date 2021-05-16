const body = document.body;

const name = document.getElementsByClassName('name')[0];
const place = document.getElementsByClassName('place')[0];
const age = document.getElementsByClassName('age')[0];
const followers = document.getElementsByClassName('followers-count')[0];
const likes = document.getElementsByClassName('likes-count')[0];
const photos = document.getElementsByClassName('photos-count')[0];

const editableElements = document.getElementsByClassName('editable');

const editBtn = document.getElementsByClassName('edit-btn')[0];
const saveBtn = document.getElementsByClassName('save-btn')[0];
const cancelBtn = document.getElementsByClassName('cancel-btn')[0];

function showText(dataObj){
    name.innerText = dataObj.name;
    place.innerText = dataObj.place;
    age.innerText = dataObj.age;
    followers.innerText = dataObj.stats.followers;
    likes.innerText = dataObj.stats.likes;
    photos.innerText = dataObj.stats.photos;
}

function edit() {
    [...editableElements].forEach((element) => {
        element.setAttribute('contenteditable','true');
    })
}

editBtn.addEventListener('click', edit);

function isUserInputValid() {
    if(name.innerText === '' || place.innerText === '' || age.innerText === '' || followers.innerText === '' || likes.innerText === '' || photos.innerText === '')
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

        [...editableElements].forEach((element) => {
            element.setAttribute('contenteditable','false');
        })

        hide();

    } else {
        alert("invalid input")
    }
}

saveBtn.addEventListener('click',saveData);

function loadData() {
    if(localStorage.getItem("userData")){
        let localStorageData = localStorage.getItem("userData");
        let parsedDataFromLocalStorage = JSON.parse(localStorageData);
        showText(parsedDataFromLocalStorage);
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

    [...editableElements].forEach((element) => {
        element.setAttribute('contenteditable','false');
    })

    // calling and using as a condition
    if(!loadData()) {
        showText(fallbackDataObj)
    };
}

cancelBtn.addEventListener('click', cancel)