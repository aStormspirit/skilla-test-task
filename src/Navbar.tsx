import "./scss/navbar.scss";
import search from "./assets/search.svg";
import vector from "./assets/Vector.svg";
import icon from "./assets/img.svg";
import Progress from "./components/Progress";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__box">
        <p className="navbar__date">Среда, 13 окт</p>
      </div>
      <div className="navbar__box progress-box">
        <div className="navbar__progress-item">
          <p className="navbar__progress-text">
            Новые звонки{" "}
            <span className="navbar__progress-text_green">20 из 30 шт</span>
          </p>
          <Progress num={30} color="#28A879" bgcolor="#dee6f5" />
        </div>
        <div className="navbar__progress-item">
          <p className="navbar__progress-text">
            Качество разговоров{" "}
            <span className="navbar__progress-text_yellow">40%</span>
          </p>
          <Progress num={40} color="#FFD500" bgcolor="#dee6f5" />
        </div>
        <div className="navbar__progress-item">
          <p className="navbar__progress-text">
            Конверсия в заказ{" "}
            <span className="navbar__progress-text_red">67%</span>
          </p>
          <Progress num={30} color="#EA1A4F" bgcolor="#dee6f5" />
        </div>
      </div>
      <div className="navbar__box">
        <img className="navbar__search" src={search} alt="search" />
      </div>
      <div className="navbar__box">
        <p className="navbar__text">ИП Сидорова Александра Михайловна</p>
        <div>
          <img className="navbar__vector" src={vector} alt="vector" />
        </div>
      </div>
      <div className="navbar__box">
        <img className="navbar__icon" src={icon} alt="icon" />{" "}
        <img className="navbar__vector" src={vector} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
