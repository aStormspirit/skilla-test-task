import "./scss/table.scss";
import useListData from "./components/hooks/useListData";
import useSound from "./components/hooks/useSound";
import { getTime, getMin } from "./components/utils/utils";
import Vector from "./components/Vector";
import { useState } from "react";
import Progress from "./components/Progress";

const Player = ({ i, e, open, id }: any) => {
  let style = {
    backgroundColor: "#eaf0fa",
    borderRadius: "48px",
    width: "352px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "48px",
  };

  if (id == i) {
    return (
      <td id={`music-${i}`}>
        <div className="music__box" style={open ? style : {}}>
          <span>{getMin(e.time) == "0:00" ? "" : getMin(e.time)}</span>
          <div className="music__playbutton" id={`btn-${i}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="white" />
              <path
                d="M9.28742 7.06938C9.3761 7.02316 9.47535 7 9.57475 7C9.67389 7 9.77311 7.02316 9.86218 7.06938L16.7125 11.5519C16.8901 11.6442 17 11.8152 17 12.0001C17 12.1849 16.8904 12.3559 16.7125 12.4481L9.86218 16.9308C9.68439 17.0231 9.46523 17.0231 9.28757 16.9308C9.10976 16.8382 9 16.6672 9 16.4825V7.51755C9 7.33278 9.10958 7.16182 9.28742 7.06938Z"
                fill="#002CFB"
              />
            </svg>
          </div>
          <Progress num={30} color="#002CFB" bgcolor="#ADBFDF" />
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16H13V14.1176H0V16ZM13 5.64706H9.28571V0H3.71429V5.64706H0L6.5 12.2353L13 5.64706Z"
              fill="#ADBFDF"
            />
          </svg>
        </div>
      </td>
    );
  }

  return (
    <td id={`music-${i}`} style={{ textAlign: "end", paddingRight: "40px" }}>
      <span>{getMin(e.time) == "0:00" ? "" : getMin(e.time)} </span>
    </td>
  );
};

const Table = () => {
  const data: any = useListData();
  const music: any = useSound();

  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number>();

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__head">
          <tr>
            <td>Тип</td>
            <td>Время</td>
            <td>Сотрудник</td>
            <td>Звонок</td>
            <td>Источник</td>
            <td>Оценка</td>
            <td>Длительность</td>
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((e: any, i: number) => (
            <tr
              className="table__row"
              key={i}
              onMouseEnter={() => {
                if (e.time == 0) {
                  return;
                } else {
                  setOpen(true);
                  setId(i);
                }
              }}
              onMouseLeave={() => {
                if (e.time == 0) {
                  return;
                } else {
                  setOpen(false);
                  setId(-1);
                }
              }}
            >
              <td>
                <Vector
                  rotate={e.in_out == 0 ? 180 : 0}
                  w="13"
                  h="13"
                  vb="0 0 13 13"
                  color={e.status == "Не дозвонился" ? "#28A879" : "#EA1A4F"}
                  d="M12.5217 1.17704L11.3447 0L1.66957 9.67513V4.17391H0V12.5217H8.34783V10.8522H2.84661L12.5217 1.17704Z"
                />
              </td>
              <td>{getTime(e.date)}</td>
              <td>
                <img src={e.person_avatar} alt="" />
              </td>
              <td>{e.to_number}</td>
              <td>{e.partner_data.name}</td>
              <td>Оценка</td>
              <Player i={i} e={e} open={open} id={id} music={music} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
