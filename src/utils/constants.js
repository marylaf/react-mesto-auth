const popupProfile = document.querySelector(".profile-popup");
export const popupCard = document.querySelector(".popup_type_add-card");
const popupAvatar = document.querySelector(".popup-avatar");
export const buttonEdit = document.querySelector(".profile__pencil");
export const buttonCardEdit = document.querySelector(".profile__button");
export const popupProfileForm = popupProfile.querySelector(".popup__form");
export const popupAvatarForm = popupAvatar.querySelector(".popup__form");
export const nameInputNewCard = document.querySelector(
  ".popup__info_form_name"
);
export const avatarInput = document.querySelector(".popup__info_form_avatar");
export const linkInput = document.querySelector(".popup__info_form_link");
export const avatarButton = document.querySelector(".profile__avatar");
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__info",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_inactive",
  inputErrorClass: "popup__info_type_error",
  errorClass: "error",
};

export const initialCards = [
  {
    name: "Москва",
    link: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Владимир",
    link: "https://images.unsplash.com/photo-1603804705524-aab416179f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80",
  },
  {
    name: "Краснодар",
    link: "https://images.unsplash.com/photo-1607193721101-171099f8f217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  },
  {
    name: "Сочи",
    link: "https://images.unsplash.com/photo-1549092156-04ee20673b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  },
  {
    name: "Владивосток",
    link: "https://images.unsplash.com/photo-1629813366051-b58137b2792c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Якутск",
    link: "https://images.unsplash.com/photo-1657070969523-f59f91f9c3d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  },
];
