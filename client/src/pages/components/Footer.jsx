import React from "react";
import style from "/Users/kuzne/Desktop/Proekty/ProektD/client/src/pages/css/style2.scss";

const Footer = () => {
  return (
    <footer>
      <section className="main__end">
      <div className={style}>
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
    </div>
  </section>
    </footer>
  );
};

export default Footer;
