import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import style from "./css/style2.scss";
import aboutimg from "./images/zatycha.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function about() {
  const { data, handleLogOut, handleFetchProtected } = useContext(AuthContext);

  return (
    <div className={style}>
      <>
      <Navbar />
        <section className="aboutUS">
          <div className="container">
            <div className="aboutUS__header">
              <p className="aboutUS__top">О нас</p>
              <div className="aboutUS__core">
                <div className="aboutUS__core_img">
                  <img
                    className="aboutUS__core_img2"
                    src={aboutimg}
                    alt=""
                  />
                </div>
                <div className="aboutUS__core_text">
                  <p>
                    Текст (от лат. textus — ткань; сплетение, сочетание) —
                    зафиксированная на каком-либо материальном носителе человеческая
                    мысль; в общем плане связная и полная последовательность символов.
                    В лингвистике термин «текст» используется в более широком
                    значении, включая также образцы устной речи. Равным образом, текст
                    с определённой спецификой может быть музыкальным, живописным и
                    поэтическим.
                    <br />
                    <br />
                  </p>
                  В теории существуют две основные трактовки понятия «текст»:
                  имманентная (расширенная, философски нагруженная) и репрезентативная
                  (более частная). Имманентный подход подразумевает отношение к тексту
                  как к автономной реальности, нацеленность на выявление его
                  внутренней структуры. Репрезентативный — рассматривает тексты
                  исключительно внутри окружающего их контекста реальности, как особую
                  форму воплощения знаний о внешней тексту действительности.
                  <p />
                </div>
              </div>
            </div>
          </div>
          <div className="aboutUS__choice">
            <p className="aboutUS__choice_head">Почему выбирают нас</p>
            <div className="aboutUS__choice_box">
              <div className="aboutUS__choice_box2">
                <div className="aboutUS__choice_number">01.</div>
                <div className="aboutUS__choice_top">Большой текст</div>
                <div className="aboutUS__choice_bottom">Тут будет текст</div>
              </div>
              <div className="aboutUS__choice_box2">
                <div className="aboutUS__choice_number">02.</div>
                <div className="aboutUS__choice_top">Большой текст</div>
                <div className="aboutUS__choice_bottom">Тут будет текст</div>
              </div>
              <div className="aboutUS__choice_box2">
                <div className="aboutUS__choice_number">03.</div>
                <div className="aboutUS__choice_top">Большой текст</div>
                <div className="aboutUS__choice_bottom">Тут будет текст</div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>

    </div>
  );
}



{/* <section className="main__navbar navbar">
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
  </section> */}
