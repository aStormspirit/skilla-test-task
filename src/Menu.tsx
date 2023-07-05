import add from "./assets/add.svg";
import calendar from "./assets/calendar.svg";
import "./scss/menu.scss";
import Vector from "./components/Vector";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu">
      <div className="menu-wrapper">
        <div className="menu__box top-box">
          <div className="menu__button">
            <p className="menu__button-text">
              <span>Баланс:</span> 272 ₽
            </p>
            <img src={add} alt="" />
          </div>
          <div className="menu__calendar">
            <Vector
              rotate={90}
              w="12"
              h="8"
              vb="0 0 12 8"
              d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
              color="#ADBFDF"
            />
            <img src={calendar} alt="" />
            <p>3 дня</p>
            <Vector
              rotate={-90}
              w="12"
              h="8"
              vb="0 0 12 8"
              d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
              color="#ADBFDF"
            />
          </div>
        </div>
        <div className="menu__box bottom-box">
          <div className="menu__search">
            <div className="menu__search-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"
                  fill="#ADBFDF"
                />
              </svg>
            </div>
            <input
              className="menu__input"
              type="text"
              placeholder="Поиск по звонкам"
            />
          </div>
          <div className="menu__select">
            <div className="menu__select-box" onClick={() => setOpen(!open)}>
              <p style={open ? { color: "#122945" } : {}}>Все типы</p>
              <Vector
                rotate={open ? 180 : 0}
                w="12"
                h="8"
                vb="0 0 12 8"
                d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                color={open ? "#002CFB" : "#ADBFDF"}
              />
              {open && (
                <div className="menu__select_type">
                  <div>Все типы</div>
                  <div>Входящие</div>
                  <div>Исходящие</div>
                </div>
              )}
            </div>
            <div className="menu__select-box">
              <p>"Все сотрудники"</p>
              <Vector
                w="12"
                h="8"
                vb="0 0 12 8"
                d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                color="#ADBFDF"
              />
            </div>
            <div className="menu__select-box">
              <p>"Все звонки"</p>
              <Vector
                w="12"
                h="8"
                vb="0 0 12 8"
                d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                color="#ADBFDF"
              />
            </div>
            <div className="menu__select-box">
              <p>"Все источники"</p>
              <Vector
                w="12"
                h="8"
                vb="0 0 12 8"
                d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                color="#ADBFDF"
              />
            </div>
            <div className="menu__select-box">
              <p>"Все оценки"</p>
              <Vector
                w="12"
                h="8"
                vb="0 0 12 8"
                d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                color="#ADBFDF"
              />
            </div>
            <div className="menu__select-box">
              <p>Все ошибки</p>
              <Vector
                w="12"
                h="8"
                vb="0 0 12 8"
                d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                color="#ADBFDF"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
