(function () {
'use strict'

//попап для профиля

function formSubmitHandler (event) {
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

let formPic = document.querySelector("#popup-pic-form");
formPic.addEventListener("submit", formSubmitHandler);

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
}



let formCard = document.querySelector("#form-add-card");
formCard.addEventListener("submit", cardSubmitHandler);


})()

/* <template id="card">
  <div class="card">
    <h1 class="card__title">Заголовок</h1>
    <p></p>
  </div>
</template> */


// let input = document.querySelector("#text");
// let addButton = document.querySelector("#add");
// let template = document.querySelector("#card");
// let container = document.querySelector("#cards");

// addButton.addEventListener("click", function () {
//   let text = input.value;
//   let card = template.content.cloneNode(true).querySelector(".card");
//   card.querySelector("p").textContent = text;
//   container.prepend(card); // append()
//   input.value = "";
  
//   let card2 = document.createElement("div");
//   card2.classList.add("card");
//   let h1 = document.createElement("h1");
//   h1.textContent = "Заголовок";
//   h1.classList.add("card__title");
//   card2.append(h1);
//   let p = document.createElement("p");
//   p.textContent = text;
//   card2.append(p);
 
  
  
//   console.log(card2);
// });


// function addCard(name, link) {
//   // Создаем элемент карточки
//   console.log(name, link);
// }

// let initialCards = [
//     {name: "123135", link: "https://...."},
//     {name: "fghdhsry", link: "...."}
//   ];

// initalCards.forEach(card => {
//   addCard(card.name, card.link);
// });



