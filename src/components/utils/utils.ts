export const parseDate = (date: any) => {
  return `${date.getFullYear()}-${
    date.getMonth() > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate()}`;
};

export const getTime = (str: string) => {
  let res = str.match(/..:../);
  return res;
};

export const getMin = (str: string) => {
  return `${Math.floor(Number(str) / 60)}:${
    Number(str) % 60 > 9 ? `${Number(str) % 60}` : `0${Number(str) % 60}`
  }`;
};
