import { useContext } from "react";
import style from "./css/style2.scss";
import Homeimg from "../pages/images/homeImg.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Demo() {
  return (
    <div className={style}>
      <Navbar />
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
  <Footer />
    </div>
  );
}
