var body = document.body, userName = document.querySelector('.name'), age = document.querySelector('.age'), place = document.querySelector('.place'), followers = document.querySelector('.followers-count'), likes = document.querySelector('.likes-count'), photos = document.querySelector('.photos-count'), editableElements = document.querySelectorAll('.editable'), editBtn = document.querySelector('.edit-btn'), saveBtn = document.querySelector('.save-btn'), cancelBtn = document.querySelector('.cancel-btn');
function showText(dataObj) {
    userName.innerText = dataObj.userName;
    place.innerText = dataObj.place;
    age.innerText = dataObj.age;
    followers.innerText = dataObj.stats.followers;
    likes.innerText = dataObj.stats.likes;
    photos.innerText = dataObj.stats.photos;
}
function edit() {
    editableElements.forEach(function (element) {
        return element.setAttribute('contenteditable', 'true');
    });
}
editBtn.addEventListener('click', edit);
function formatText() {
    editableElements.forEach(function (element) {
        return element.innerText = element.innerText.trim() //remove trailing and leading whitespaces
            .replace(/\s\s+/gi, " ") // remove extra whitespaces
            .replace(/\n+/gi, " ");
    }); // remove a newline
}
function isUserInputValid() {
    formatText();
    // true as long as elements exist and element text is not an empty string
    if (userName && userName.innerText.trim() !== '' &&
        place && place.innerText.trim() !== '' &&
        age && age.innerText.trim() !== '' &&
        followers && followers.innerText.trim() !== '' &&
        likes && likes.innerText.trim() !== '' &&
        photos && photos.innerText !== '')
        return true;
    else
        return false;
}
function saveData() {
    if (isUserInputValid()) {
        var data = {
            userName: userName.innerText,
            place: place.innerText,
            age: age.innerText,
            stats: {
                followers: followers.innerText,
                likes: likes.innerText,
                photos: photos.innerText
            }
        };
        showText(data);
        var dataObjString = JSON.stringify(data);
        localStorage.setItem("userData", dataObjString);
        editableElements.forEach(function (element) {
            return element.setAttribute('contenteditable', 'false');
        });
        hide();
    }
    else {
        alert("invalid input");
    }
}
saveBtn.addEventListener('click', saveData);
function loadData() {
    var localStorageData = localStorage.getItem("userData");
    if (localStorageData) {
        console.log(JSON.parse(localStorageData));
        showText(JSON.parse(localStorageData));
        return false;
    }
    else {
        return true;
    }
}
loadData();
function cancel() {
    var fallbackDataObj = {
        userName: "Victor Crest",
        place: "London",
        age: "26",
        stats: {
            followers: "80K",
            likes: "803K",
            photos: "1.4K"
        }
    };
    editableElements.forEach(function (element) {
        return element.setAttribute('contenteditable', 'false');
    });
    // calling and using as a condition
    if (loadData())
        showText(fallbackDataObj);
}
cancelBtn.addEventListener('click', cancel);
