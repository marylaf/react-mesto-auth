import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__button-drop"
          type="button"
          aria-label="Закрытие попапа"
          onClick={props.onClose}
        ></button>
        <h3 className="popup__correct">{props.title}</h3>
        <form
          name={`${props.name}`}
          id="popup__form"
          className="popup__form"
          onSubmit={props.onSubmit}
          noValidate
        >
          {props.children}

          <button type="submit" className="popup__button-save">
            {props.saveText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
