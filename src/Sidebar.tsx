import "./scss/sidebar.scss";
import logo from "./assets/Union.svg";
import Box from "./components/Box";
import plus from "./assets/plus.svg";
import info from "./assets/info.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {[
        "Итоги",
        "Заказы",
        "Сообщения",
        "Звонки",
        "Контрагенты",
        "Документы",
        "Исполнители",
        "Отчеты",
        "База знаний",
        "Настройки",
      ].map((e, i) => (
        <Box menuName={e} key={i} />
      ))}
      <div className="sidebar__button-box">
        <div className="sidebar__button-wrapper">
          <button className="sidebar__button">
            <div>
              <p>Добавить заказ</p>
            </div>
            <div>
              {" "}
              <img src={plus} />
            </div>
          </button>
          <button className="sidebar__button">
            <div>
              <p>Оплата</p>
            </div>
            <div>
              <img src={info} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
