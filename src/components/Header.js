import React from "react";
import logo from "../images/Vector.svg";
import { Routes, Route, Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        ></Route>
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
