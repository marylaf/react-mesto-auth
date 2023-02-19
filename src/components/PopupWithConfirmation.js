import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation({ isOpen, onClose, onSubmitDeleteCard, card }) {
  function handleConfirmationSubmit(e) {
    e.preventDefault();

    onSubmitDeleteCard(card);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Вы уверены?"
      name="Закрытие попапа"
      saveText="Да"
      onSubmit={handleConfirmationSubmit}
    />
  );
}

export default PopupWithConfirmation;
