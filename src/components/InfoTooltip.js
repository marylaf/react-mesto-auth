import success from "../images/success.svg";
import error from "../images/error.svg";

function InfoTooltip({ name, isOpen, onClose, isStatus }) {
  const infoResult = {
    successResult: "Вы успешно зарегистрировались!",
    errorResult: "Что-то пошло не так! Попробуйте ещё раз.",
  };
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-drop"
          type="button"
          aria-label="Закрытие попапа"
          onClick={onClose}
        ></button>
        <form name={`${name}`} id="popup__form" className="popup__form">
          <img
            className="popup__tooltip-icon"
            src={isStatus ? success : error}
            alt="icon"
          />

          <h3 className="popup__tooltip-text">
            {isStatus ? infoResult.successResult : infoResult.errorResult}
          </h3>
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;
