import PopupWithForm from "./PopupWithForm";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="user-info"
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
      saveText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__info popup__info_form_title"
        id="title-input"
        placeholder="Имя"
        name={name}
        minLength="2"
        maxLength="40"
        value={name || ""}
        onChange={handleNameChange}
        required
      />
      <span className="span title-input-error"></span>
      <input
        type="text"
        className="popup__info popup__info_form_subtitle"
        id="subtitle-input"
        name={description}
        value={description || ""}
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        onChange={handleDescriptionChange}
        required
      />
      <span className="span subtitle-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
