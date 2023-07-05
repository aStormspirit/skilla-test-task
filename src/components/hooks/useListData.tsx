import { useState, useEffect } from "react";
import { parseDate } from "../utils/utils";

const useListData = () => {
  const [data, setData] = useState([]);
  let d = new Date();
  let d2 = new Date(d.setDate(d.getDate() - 5));

  useEffect(() => {
    fetch(
      `https://api.skilla.ru/mango/getList?date_start=${parseDate(
        d2
      )}&date_end=${parseDate(d2)}&in_out=&limit=25`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer testtoken",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return data;
};

export default useListData;
