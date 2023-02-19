import React from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onDeleteClick,
  onCardLike,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__people">
            <div className="profile__avatar-pen" onClick={onEditAvatar}>
              <img
                className="profile__avatar"
                src={currentUser.avatar}
                alt="портрет"
              />
            </div>
            <div className="profile__info">
              <h1 className="profile__title">{currentUser.name}</h1>
              <p className="profile__subtitle">{currentUser.about}</p>
              <button
                onClick={onEditProfile}
                type="button"
                aria-label="Редактирование профиля"
                className="profile__pencil"
              ></button>
            </div>
          </div>
          <button
            type="button"
            onClick={onAddPlace}
            aria-label="Создание новой карточки"
            className="profile__button"
          ></button>
        </div>
      </section>
      <section className="elements">
        <div className="elements__container">
          {cards.map((card) => (
            <Card
              card={card}
              title={card.name}
              image={card.link}
              key={card._id}
              id={currentUser._id}
              onCardClick={onCardClick}
              onDeleteClick={onDeleteClick}
              onCardLike={onCardLike}
              likesCount={card.likes.length}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
