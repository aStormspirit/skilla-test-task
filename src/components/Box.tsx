import Icons from "./Icons";
import { FC } from "react";

type Props = {
  menuName: string;
};

const Box: FC<Props> = ({ menuName }) => {
  return (
    <div className="sidebar__box">
      <div className="sidebar__box-wrapper">
        <Icons
          name={menuName}
          color="#FFFFFF99"
          size="18"
          className="sidebar__svg"
        />
        <span>{menuName}</span>
      </div>
    </div>
  );
};
export default Box;
