import { FC } from "react";

const Vector: FC<{
  rotate?: number;
  color: string;
  d: string;
  w: string;
  h: string;
  vb: string;
}> = ({ rotate = 0, color, d, w, h, vb }) => {
  return (
    <div>
      <svg
        style={{ transform: `rotate(${rotate}deg)` }}
        width={w}
        height={h}
        viewBox={vb}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity="0.8" d={d} fill={color} />
      </svg>
    </div>
  );
};

export default Vector;

// const Vector: FC<{ rotate: number; color: string }> = ({ rotate, color }) => {
//   return (
//     <div>
//       <svg
//         style={{ transform: `rotate(${rotate}deg)` }}
//         width="13"
//         height="13"
//         viewBox="0 0 13 13"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M12.5217 1.17704L11.3447 0L1.66957 9.67513V4.17391H0V12.5217H8.34783V10.8522H2.84661L12.5217 1.17704Z"
//           fill={color}
//         />
//       </svg>
//     </div>
//   );
// };
