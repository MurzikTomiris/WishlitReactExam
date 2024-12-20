import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../style/wishlist.css"

export const Home = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const accounts = useSelector((state) => state.account); 

  const handleLogin = () => {
    const account = accounts.find(
      (account) => account.login === login && account.password === password
    );
    if (account) {
      navigate("/wishlist", { state: { accountId: account.id } });
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="home">
      <h1>Добро пожаловать в Wishlist from Tomiris</h1>
      <p>
        Список пожеланий поможет вам систематизировать идеи подарков и поделиться ими с друзьями и семьей.
        Зарегистрируйтесь прямо сейчас и начните создавать свой собственный список желаний!
      </p>
      <div className="login-form">
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleLogin} className="login-button">Войти</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};