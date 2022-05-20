(function () {
    'use strict'
    
    //попап для профиля
    
    function formSubmitHandler (evt) {
      evt.preventDefault(); 
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
    
    })()
    
    //console.log(123);