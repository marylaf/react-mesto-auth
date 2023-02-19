import { useState } from "react";
import { apiRegister } from "../utils/apiRegister.js";
import { useNavigate } from "react-router-dom";

function Login({ handleLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

    apiRegister
      .login(userEmail, userPassword)
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        // setUserEmail(email);
        handleLogged();
        navigate("/", { replace: true });
      })
      .catch(() => console.log("Ошибка"));
  }

  return (
    <div className="login">
      <p className="login__welcome">Вход</p>
      <form
        onSubmit={handleSubmit}
        id="login__form"
        className="login__form"
        noValidate
      >
        <input
          type="text"
          className="login__info login__info_form_title"
          id="title-input"
          placeholder="Email"
          minLength="6"
          maxLength="40"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <span className="span title-input-error"></span>
        <input
          type="password"
          className="login__info login__info_form_subtitle"
          id="subtitle-input"
          placeholder="Пароль"
          minLength="6"
          maxLength="200"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <span className="span subtitle-input-error"></span>
        <button type="submit" className="login__button-save">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
