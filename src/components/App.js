import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import InfoTooltip from "./InfoTooltip";
import Login from "./Login.js";
import Register from "./Register.js";
import { api } from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithConfirmation from "./PopupWithConfirmation";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  // const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then((res) => {
        setCurrentUser(res[0]);
        setCards(res[1]);
      })
      .catch(console.log("Ошибка"));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleStatus() {
    setIsStatus(true);
  }

  function handleLogged() {
    setIsLoggedIn(true);
  }

  function handleConfirmationClick(card) {
    setIsConfirmationPopupOpen(true);
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleInfoTooltipOpen() {
    setIsInfoTooltip(true);
  }

  function deleteCardClick(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((i) => i._id !== card._id));
      })
      .then(() => closeAllPopups())
      .catch(console.log("Ошибка"));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    api
      .changeLikeStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((like) => (like._id === card._id ? newCard : like))
        );
      })
      .catch(console.log("Ошибка"));
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setIsInfoTooltip(false);
  }

  function handleUpdateUser(data) {
    api
      .editProfile(data.name, data.about)
      .then((userData) => setCurrentUser(userData))
      .then(() => closeAllPopups())
      .catch(console.log("Ошибка"));
  }

  function handleUpdateAvatar(data) {
    api
      .addNewAvatar(data.avatar)
      .then((userData) => setCurrentUser(userData))
      .then(() => closeAllPopups())
      .catch(console.log("Ошибка"));
  }

  function handleUpdateCards(data) {
    api
      .addNewCard(data.name, data.link)
      .then((newCard) => setCards([newCard, ...cards]))
      .then(() => closeAllPopups())
      .catch(console.log("Ошибка"));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route
              exact
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  element={Main}
                  onEditProfile={handleEditProfileClick}
                  onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  onDeleteClick={handleConfirmationClick}
                  onCardLike={handleCardLike}
                  cards={cards}
                />
              }
            />
          </Route>
          <Route
            path="/sign-in"
            element={<Login handleLogged={handleLogged} />}
          />
          <Route
            path="/sign-up"
            element={
              <Register
                handleStatus={handleStatus}
                handleInfoTooltipOpen={handleInfoTooltipOpen}
              />
            }
          />
          <Route
            path="/"
            element={!isStatus ? <Link to="/sign-in" /> : <Link to="/" />}
          />
        </Routes>
        <Footer />
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onUpdateCard={handleUpdateCards}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithConfirmation
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
          onSubmitDeleteCard={deleteCardClick}
        />
        <InfoTooltip
          isStatus={isStatus}
          name="register"
          isOpen={isInfoTooltip}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
