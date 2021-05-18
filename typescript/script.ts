
const body = document.body as HTMLBodyElement,

userName   = document.querySelector('.name')            as HTMLHeadingElement,
age        = document.querySelector('.age')             as HTMLParagraphElement,
place      = document.querySelector('.place')           as HTMLParagraphElement,
followers  = document.querySelector('.followers-count') as HTMLSpanElement,
likes      = document.querySelector('.likes-count')     as HTMLSpanElement,
photos     = document.querySelector('.photos-count')    as HTMLSpanElement,

editableElements = document.querySelectorAll('.editable'),

editBtn    = document.querySelector('.edit-btn')   as HTMLButtonElement,
saveBtn    = document.querySelector('.save-btn')   as HTMLButtonElement,
cancelBtn  = document.querySelector('.cancel-btn') as HTMLButtonElement;


interface DataObjInterface {
    image?   : string,
    userName : string,
    place    : string,
    age      : string,
    stats    : {
        followers: string,
        likes    : string,
        photos   : string
    }
}

function showText(dataObj: DataObjInterface): void {
    userName.innerText  = dataObj.userName;
    place.innerText     = dataObj.place;
    age.innerText       = dataObj.age;
    followers.innerText = dataObj.stats.followers;
    likes.innerText     = dataObj.stats.likes;
    photos.innerText    = dataObj.stats.photos;
}

function edit(): void {
    editableElements.forEach((element: HTMLElement) =>
        element.setAttribute('contenteditable','true'));
} 

editBtn.addEventListener('click', edit);

function formatText(): void {
    editableElements.forEach((element: HTMLElement) => 
        element.innerText = element.innerText.trim() //remove trailing and leading whitespaces
                                             .replace(/\s\s+/gi, " ") // remove extra whitespaces
                                             .replace(/\n+/gi, " ")); // remove a newline
}

function isUserInputValid(): boolean {
    formatText();
    // true as long as elements exist and element text is not an empty string
    if(
        userName  && userName.innerText.trim()  !== '' && 
        place     && place.innerText.trim()     !== '' && 
        age       && age.innerText.trim()       !== '' && 
        followers && followers.innerText.trim() !== '' && 
        likes     && likes.innerText.trim()     !== '' && 
        photos    && photos.innerText           !== ''
    )
      return true;
    else
      return false;
}

function saveData(): void {
    if(isUserInputValid()) {
        let data: DataObjInterface = {
            userName : userName.innerText,
            place    : place.innerText,
            age      : age.innerText,
            stats    : {
                followers : followers.innerText,
                likes     : likes.innerText,
                photos    : photos.innerText
            }
        }

        showText(data);

        let dataObjString : string = JSON.stringify(data);
        localStorage.setItem("userData",dataObjString);

        editableElements.forEach((element: HTMLElement) =>
            element.setAttribute('contenteditable','false'));

        hide();

    } else {
        alert("invalid input")
    }
}

saveBtn.addEventListener('click',saveData);

function loadData(): boolean {
    let localStorageData: string = localStorage.getItem("userData");
    if (localStorageData) {
        console.log(JSON.parse(localStorageData));
        
        showText(JSON.parse(localStorageData));
        return false;
    } else {
        return true;
    }
}
loadData()

function cancel(): void {
    let fallbackDataObj: DataObjInterface = {
        userName : "Victor Crest",
        place    : "London",
        age      : "26",
        stats    : {
            followers : "80K",
            likes     : "803K",
            photos    : "1.4K"
        }
    };

    editableElements.forEach((element: HTMLElement) => 
        element.setAttribute('contenteditable','false'));

    // calling and using as a condition
    if(loadData()) showText(fallbackDataObj);
}

cancelBtn.addEventListener('click', cancel);