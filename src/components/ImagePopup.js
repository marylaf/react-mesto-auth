import React from "react";

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_type_card-image ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container-image">
        <button
          className="popup__button-drop"
          aria-label="Закрытие попапа"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <h2 className="popup__subtitle">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
