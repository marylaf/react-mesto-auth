import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ onCardClick, card, likesCount, onDeleteClick, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn
    ? "popup__button-trash"
    : "popup__button-trash_type_none";

  const isLiked = card.likes.some((like) => like._id === currentUser._id);
  const cardLikeButtonClassName = `elements__button ${
    isLiked && "elements__button_active"
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onDeleteClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  return (
    <article className="card">
      <button
        className={cardDeleteButtonClassName}
        aria-label="Удаление карточки"
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <img
        className={"elements__image"}
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="elements__block">
        <h2 className="elements__name">{card.name}</h2>
        <div className="elements__block-like">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleCardLike}
            aria-label="Добавление лайка"
          ></button>
          <span className="elements__button-count">{likesCount}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
