let editProfile = document.querySelector('.profile__button-edit')
let popup = document.querySelector('.popup')
let closePopup = document.querySelector('.popup__close')
let formElement = popup.querySelector('.popup__form')
let nameInput = formElement.querySelector('.name-input')
let jobInput = formElement.querySelector('.job-input')
let nameProfile = document.querySelector('.profile__name')
let jobProfile = document.querySelector('.profile__job')

function togglePopup() {
    popup.classList.toggle('popup_opened')
    if(popup.classList.contains('popup_opened')) {
        nameInput.value = nameProfile.textContent
        jobInput.value = jobProfile.textContent
    }
}

editProfile.addEventListener('click', togglePopup)
closePopup.addEventListener('click', togglePopup)

function handleFormSubmit(evt) {
    evt.preventDefault();
    
    nameProfile.textContent = nameInput.value
    jobProfile.textContent = jobInput.value

    togglePopup()

}

formElement.addEventListener('submit', handleFormSubmit);

