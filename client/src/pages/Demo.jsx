import { useContext } from "react";
import style from "./css/style2.scss";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button/Button";
import Homeimg from "../pages/images/homeImg.jpg";


export default function Demo() {
  const { data, handleLogOut, handleFetchProtected } = useContext(AuthContext);

  return (
    <div className={style}>
  <section className="main__navbar navbar">
    <div className="container">
      <div className="header__top_inner">
        <div className="header__top_logo logo">
          <img src="images/Circle (1).png" alt="sas" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav_list">
            <li className="header__nav_item">
              <form action="main.html" target="_blank">
                <button className="header__nav_link" href="../main.html">
                  Главная
                </button>
              </form>
            </li>
            <li className="header__nav_item">
              <div className="col">
                <div className="dropdown-container dropdown-bordered">
                  <div className="dropdown-toggle click-dropdown">
                    Сообщения
                  </div>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="../messege.html">Написать сообщение</a>
                      </li>
                      <li>
                        <a href="#">Личные сообщения</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="header__nav_item">
              <div className="col">
                <div className="dropdown-container dropdown-bordered">
                  <div className="dropdown-toggle click-dropdown">Профиль</div>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="#">Ваш профиль</a>
                      </li>
                      <li>
                        <a href="#">Ваши сообщения</a>
                      </li>
                      <li>
                        <a href="#">Ваши подписки</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="header__nav_item">
              <div className="col">
                <div className="dropdown-container dropdown-bordered">
                  <div className="dropdown-toggle click-dropdown">
                    Поддержка
                  </div>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="../support.html">Поддержка</a>
                      </li>
                      <li>
                        <a href="../aboutUs.html">О нас</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="header__nav_item">
              <div className="col">
                <div className="dropdown-container dropdown-bordered">
                  <div className="dropdown-toggle click-dropdown">ВИП</div>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="#">Пользователи и роли</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="header__nav_item">
              <img src="images/Line.png" alt="" />
            </li>
          </ul>
        </nav>
        <div className="header__user_nav">
          <div className="header__top_call">
            <ul className="header__nav_list2">
              <li className="header__nav_call">
                <img src="images/Circle (1).png" alt="sas" />
              </li>
              <li className="header__nav_logout"><Button onClick={handleLogOut}>
        Выйти
      </Button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="main__greeting greeting">
      <p className="greeting__hello">Добро пожаловать на наш сайт!</p>
      <div className="greeting__core">
        <div className="greeting_core_text">
          <div className="greeting_core_text_top">
            Тут слова очень много слов очень много слов очень много слов
          </div>
          <div className="greeting_core_text_bottom">
            <p>
              Добро пожаловать на наш сайт, посвященный захватывающему миру
              науки и передовых исследований. Мы являемся вашим шлюзом к
              последним открытиям, инновациям и прорывам в различных научных
              дисциплинах. Здесь вы найдете все, что нужно любознательному уму и
              пытливому исследователю.
              <br />
              <br />
              <Button onClick={handleLogOut}>
        Выйти
      </Button>
            </p>
            <p>
              Наша цель - предоставить просвещающую и увлекательную платформу,
              где ученые, студенты и энтузиасты могут обмениваться знаниями,
              участвовать в дискуссиях и получать доступ к ценным ресурсам. Мы
              стремимся вдохновлять следующее поколение ученых и исследователей,
              расширяя границы человеческого познания.
            </p>
          </div>
        </div>
        <img className="greeting_core_img" src={Homeimg} alt="" />
      </div>
    </div>
  </section>
  <section className="main__end">
    <div className="end__color">
      <div className="container">
        <div className="end__main">
          <div className="end__left">
            <div className="end__left_text">Будте с нами</div>
            <div className="end__left_icons">
              <img src="images/Negative.png" alt="" />
              <img src="images/Negative2.png" alt="" />
              <img src="images/Negative3.png" alt="" />
              <img src="images/Negative4.png" alt="" />
            </div>
          </div>
          <div className="end__right">
            <div className="end__right_elem">
              <div className="end__right_elem_top">Номер поддержки</div>
              <div className="end__right_elem_bottom">1800 265 24 52</div>
            </div>
            <div className="end__right_elem">
              <div className="end__right_elem_top">Адрес</div>
              <div className="end__right_elem_bottom">
                {" "}
                г. Москва, Походный проезд, домовладение 3
              </div>
            </div>
            <div className="end__right_elem">
              <div className="end__right_elem_top">Мы открыты</div>
              <div className="end__right_elem_bottom">
                С понедельника по пятницу
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="end__dark">
      <div className="end__logo">
        <img src="images/Circle (1).png" alt="" />
      </div>
      <nav className="end__nav">
        <ul className="end__nav_list">
          <li className="end__nav_item">
            <a className="end__nav_link" href="#">
              На главную
            </a>
          </li>
          <li className="end__nav_item">
            <a className="end__nav_link" href="#">
              О нас
            </a>
          </li>
          <li className="end__nav_item">
            <a className="end__nav_link" href="#">
              Поддержка
            </a>
          </li>
          <li className="end__nav_item">
            <a className="end__nav_link" href="#">
              Блог
            </a>
          </li>
          <li className="end__nav_item">
            <a className="end__nav_link" href="#">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
    </div>
  );
}
