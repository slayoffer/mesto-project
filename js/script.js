(function () {
'use strict'

//попап для профиля

function formSubmitHandler(event) {
  event.preventDefault();
  let profileName = document.querySelector("#heading").value;
  let profileSpec = document.querySelector("#subheading").value;
  document.querySelector(".profile__title").innerText = profileName;
  document.querySelector(".profile__subtitle").innerText = profileSpec;
  document.querySelector("#form-edit-profile").classList.remove("popup_opened");
}

let buttonEditProfile = document.querySelector(".profile__button-pencil"); 
if(buttonEditProfile != null){
    buttonEditProfile.addEventListener("click", function() {
        let profilePopup = document.querySelector("#form-edit-profile");
        profilePopup.classList.add("popup_opened");
        let profileName = document.querySelector(".profile__title").innerText;
        let profileSpec = document.querySelector(".profile__subtitle").innerText;
        document.querySelector("#heading").value = profileName;
        document.querySelector("#subheading").value = profileSpec;
    });
}

let buttonCloseProfile = document.querySelectorAll(".popup__toggle");
if(buttonCloseProfile != null){
    buttonCloseProfile.forEach(toggle => {
        toggle.addEventListener("click", () => {
            let profilePopup = document.querySelector("#form-edit-profile");
            profilePopup.classList.remove("popup_opened");
            let picPopup = document.querySelector("#form-add-card");
            picPopup.classList.remove("popup_opened");
            let fotoPopup = document.querySelector("#foto-card");
            fotoPopup.classList.remove("popup_opened");
        });
    });
}


let formProfile = document.querySelector("#popup-profile-form");
formProfile.addEventListener("submit", formSubmitHandler);


//попап для картинок

let buttonEditPic = document.querySelector(".profile__button-plus");
if(buttonEditPic != null){
  buttonEditPic.addEventListener("click", function() {
    let picPopup = document.querySelector("#form-add-card");
    picPopup.classList.add("popup_opened");
  });
}

// let formPic = document.querySelector("#popup-pic-form");
// formPic.addEventListener("submit", formSubmitHandler);

//6 готовых карточек

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

let gridCard = document.querySelector(".grid-foto");
let templateCard = document.querySelector("#template-card");

initialCards.forEach(elementFoto => {
  let card = templateCard.content.cloneNode(true).querySelector(".card");
  card.querySelector(".card__para").innerText = elementFoto["name"];
  card.querySelector(".card__image").src = elementFoto["link"];
  card.querySelector(".card__image").alt = elementFoto["name"];
  gridCard.prepend(card);
});


function cardSubmitHandler (event) {
  event.preventDefault(); 
  let profileName = document.querySelector("#pic-name").value;
  let profileLink = document.querySelector("#pic-link").value;
  let card = templateCard.content.cloneNode(true).querySelector(".card");
  card.querySelector(".card__para").innerText = profileName;
  card.querySelector(".card__image").src = profileLink;
  gridCard.prepend(card);
  document.querySelector("#form-add-card").classList.remove("popup_opened");
  renderAdded();
}



let formCard = document.querySelector("#form-add-card");
formCard.addEventListener("submit", cardSubmitHandler);

//попап для вызова карточки

let arBigFotos = document.querySelectorAll(".card__image");
if(arBigFotos != null){
  arBigFotos.forEach(smallFoto => {
    smallFoto.addEventListener("click", () => {
      
      let bigFotoPopup = document.querySelector("#foto-card");
      bigFotoPopup.querySelector('.popup__foto').src = smallFoto.src;
      bigFotoPopup.querySelector('.popup__foto').alt = smallFoto.alt;
      bigFotoPopup.querySelector('.popup__caption').innerText = smallFoto.alt;

      bigFotoPopup.classList.add("popup_opened");


   });
  });
}

//функция для повтора лайка

function renderAdded() {
  let arLikeButtons = document.querySelectorAll(".card__like");
  if(arLikeButtons != null){
    arLikeButtons.forEach(likeButton => {
      likeButton.addEventListener("click", () => {
        likeButton.classList.toggle('card__like_active');
      });
    });
}
} 

//код для лайка

let arNewLikeButtons = document.querySelectorAll(".card__like");
if(arNewLikeButtons != null){
  arNewLikeButtons.forEach(likeNewButton => {
    likeNewButton.addEventListener("click", () => {
      likeNewButton.classList.toggle('card__like_active');
    });
  });

}

})()






