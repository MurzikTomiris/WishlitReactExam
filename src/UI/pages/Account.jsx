import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editAccount, deleteAccount, findAccountById  } from "../../BLL/accountSlice";
import "../style/wishlist.css"


export const Account = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();

  const account = useSelector((state) => findAccountById(state, parseInt(id))); 
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(account || {});

  useEffect(() => {
    if (account) {
      setFormData(account); 
    }
  }, [account]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    dispatch(editAccount(formData)); 
    setEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteAccount(account.id)); 
  };

  if (!account) {
    return <p>Не доступна информация об аккаунте</p>;
  }

  return (
    <div className="account-page">
      <h1>Account Details</h1>
      {editMode ? (
        <div className="account-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Login:
            <input
              type="text"
              name="login"
              value={formData.login || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password || ""}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSave}>Сохранить</button>
          <button onClick={() => setEditMode(false)}>Отмена</button>
        </div>
      ) : (
        <div className="account-details">
          <p>Имя: {account.name}</p>
          <p>Email: {account.email}</p>
          <p>Логин: {account.login}</p>
          <p>Пароль: {account.password}</p>
          <button onClick={() => setEditMode(true)}>Редактировать</button>
          <button onClick={handleDelete}>Удалить аккаунт</button>
          <Link to="/"> <button>Выйти из аккаунта</button></Link>
        </div>
      )}
    </div>
  );
};

export default Account;