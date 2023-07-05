import { FC } from "react";
import IconsSVG from "../assets/Icons.svg";

const Icons: FC<{
  name: string;
  color: string;
  size: number;
  className: string;
}> = ({ name, color, size, className }) => {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  );
};

export default Icons;
