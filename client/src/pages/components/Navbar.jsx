import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "/Users/kuzne/Desktop/Proekty/ProektD/client/src/context/AuthContext";
import style from "/Users/kuzne/Desktop/Proekty/ProektD/client/src/pages/css/style2.scss";
import Button from "/Users/kuzne/Desktop/Proekty/ProektD/client/src/components/Button/Button";
import Navico from "../images/navbar_icon.svg";


export default function navbar() {
  const {handleLogOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    handleLogOut();
    navigate("/sign-in", { replace: true });
  }
  return (
    <div className={style}>
  <section className="main__navbar navbar">
    <div className="container">
      <div className="header__top_inner">
        <div className="header__top_logo logo">
          <img src={Navico} alt="sas" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav_list">
          <li className="header__nav_item">
          <Link to="/demo">Главная</Link>
          </li>
          <li className="header__nav_item">
          <Link to="/">Блог</Link>
          </li>
          <li className="header__nav_item">
          <Link to="/support">Поддержка</Link>
          </li>
          <li className="header__nav_item">
          <Link to="/about">О нас</Link>
          </li>
            <li className="header__nav_item">
              <img src="images/Line.png" alt="" />
            </li>
          </ul>
        </nav>
        <div className="header__user_nav">
          <div className="header__top_call">
            <ul className="header__nav_list2">
              <li className="header__nav_logout"><Button onClick={logout}>
        Выйти
      </Button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
);
}

{/* <nav className={style.nav}>
            <Link to="sign-in">Вход</Link>
            <Link to="sign-up">Регистрация</Link>
          </nav> */}

