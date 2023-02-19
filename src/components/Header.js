import React from "react";
import logo from "../images/Vector.svg";
import { Routes, Route, Link } from "react-router-dom";
function Header({ userEmail, handleSignOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="header__info-container">
              <h3 className="header__email">{userEmail}</h3>
              <Link
                to="/sign-in"
                className="header__link header__link_type_exit"
                onClick={handleSignOut}
              >
                Выйти
              </Link>
            </div>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
