import { FC } from "react";

const Progress: FC<{ num: number; color: string; bgcolor: string }> = ({
  num,
  color,
  bgcolor,
}) => {
  let style = { backgroundColor: color, width: `${(170 / 100) * num}px` };

  return (
    <div className="navbar__progress" style={{ backgroundColor: bgcolor }}>
      <div className="navbar__progress-value" style={style}></div>
    </div>
  );
};

export default Progress;
