import { Link } from "react-router-dom";
import { useState } from "react";

function Register({ handleInfoTooltipOpen, handleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const userEmail = email;
    const userPassword = password;
    handleRegister(userEmail, userPassword);
  }

  return (
    <div className="login">
      <p className="login__welcome">Регистрация</p>
      <form
        id="login__form"
        onSubmit={handleSubmit}
        className="login__form"
        noValidate
      >
        <input
          value={email}
          onChange={handleEmailChange}
          type="text"
          className="login__info login__info_form_title"
          id="title-input"
          placeholder="Email"
          minLength="6"
          maxLength="40"
          required
        />
        <span className="span title-input-error"></span>
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
          className="login__info login__info_form_subtitle"
          id="subtitle-input"
          placeholder="Пароль"
          minLength="6"
          maxLength="200"
          required
        />
        <span className="span subtitle-input-error"></span>
        <button
          onClick={handleInfoTooltipOpen}
          type="submit"
          className="login__button-save"
        >
          Зарегистрироваться
        </button>

        <Link to="/sign-in" className="login__paragraph">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
