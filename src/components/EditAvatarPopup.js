import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInfo = React.useRef();

  function handleAvatarSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInfo.current.value,
    });
    avatarInfo.current.value = "";
  }
  return (
    <PopupWithForm
      name="avatar"
      isOpen={isOpen}
      title="Обновить аватар"
      saveText="Сохранить"
      onClose={onClose}
      onSubmit={handleAvatarSubmit}
    >
      <input
        placeholder=" Ссылка на картинку"
        type="url"
        className="popup__info popup__info_form_avatar"
        name="info-link"
        id="avatar-input"
        ref={avatarInfo}
        required
      />
      <span className="span avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
