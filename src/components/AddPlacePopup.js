import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({ isOpen, onClose, onUpdateCard }) {
  const [cardName, setCardName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleCardNameChange(e) {
    setCardName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();

    onUpdateCard({
      name: cardName,
      link,
    });
    setCardName("");
    setLink("");
  }

  return (
    <PopupWithForm
      name="add-card"
      isOpen={isOpen}
      title="Новое место"
      saveText="Создать"
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <input
        placeholder=" Название"
        type="text"
        id="name-input"
        className="popup__info popup__info_form_name"
        name="info-name"
        minLength="2"
        maxLength="30"
        value={cardName}
        onChange={handleCardNameChange}
        required
      />
      <span className="span name-input-error"></span>
      <input
        placeholder=" Ссылка на картинку"
        type="url"
        className="popup__info popup__info_form_link"
        name="info-link"
        id="link-input"
        value={link}
        onChange={handleLinkChange}
        required
      />
      <span className="span link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
