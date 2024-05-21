import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import style from "./css/style2.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function support() {
  const { data, handleLogOut, handleFetchProtected } = useContext(AuthContext);

  return (
        <div className={style}>
            <>
            <Navbar />
  <section className="support">
    <div className="support__main_top">Техническая поддержка</div>
    <div className="support__main">
      <div className="support__main_box">
        <div className="support__main_box_top">
          <div className="support__main_box_top_img" />
          <p className="support__main_box_top_text">Частые вопросы:</p>
          <ul className="support__main_box_top_ul">
            <li>А почему?</li>
            <li>А почему?</li>
            <li>А почему?</li>
            <li>А почему?</li>
            <li>А почему?</li>
            <li>А почему?</li>
            <li>А почему?</li>
          </ul>
        </div>
      </div>
      <div className="support__main_form">
        <div className="support__main_form_pole">
          <div className="support__main_form_text">Укажите тему обращения:</div>
          <form name="supForm">
            <input
              className="supportForm"
              type="text"
              placeholder="Укажите тему"
            />
          </form>
        </div>
        <div className="support__main_form_pole">
          <div className="support__main_form_text">Укажите вашу почту:</div>
          <form name="temaForm">
            <input
              className="supportForm"
              type="text"
              placeholder="Укажите почту"
            />
          </form>
        </div>
        <div className="support__main_form_pole">
          <div className="support__main_form_text">Текст сообщения:</div>
          <form name="temaForm">
            <textarea className="supportForm2" type="text" defaultValue={""} />
          </form>
        </div>
        <div className="support__main_form_sogl">
          <form name="support__main_form_flag">
            <input
              className="support__main_form_flag1"
              type="checkbox"
              name="enabled"
              defaultChecked=""
            />
          </form>
          Даю согласие на обработку своих персональных данных
        </div>
        <button className="support__main_form_btn">Отправить</button>
      </div>
      <div className="support__main_us">
        <p className="support__main_us_top">О СЛУЖБЕ ПОДДЕРЖКИ</p>
        <p className="support__main_us_bottom">
          Обращения обрабатываются по рабочим дням, с 9 до 19 по московскому
          времени.
          <br />
          <br />
          Мы стараемся отвечать в течение 24 часов, но время может увеличиться,
          в зависимости от количества и сложности поступивших обращений. Если
          ответа долго нет, проверьте папку со спамом.
          <br />
          <br />
          Излагайте суть обращения максимально осмысленно и подробно — это
          сократит количество уточняющих вопросов и поможет быстрее получить
          ответ.
          <br />
          <br />
          Для отправки скриншота загрузите его на habrastorage.org и приложите к
          тексту прямую ссылку.
          <br />
          <br />
          Перед обращением в службу поддержки попробуйте найти ответ на вопрос в
          справочном разделе.
          <br />
          <br />
        </p>
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












