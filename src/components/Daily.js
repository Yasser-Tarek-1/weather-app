import React from "react";
import { formatDate } from "../store/dateSlice";

const Daily = ({ daily }) => {
  const date =
    daily &&
    daily.slice(1, 3).map((item) => {
      return (
        <div
          key={item.dt}
          className="w-full bg-[#ffffff1a] rounded-md py-2 px-4 flex items-center justify-between mb-3"
        >
          <div className="flex items-center">
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="/"
              className="w-10"
            />
            <div className="text-white font-semibold ml-1">
              {`${item.temp.day.toFixed()}° C`}
            </div>
          </div>
          <div className="text-white ">
            <div> {formatDate(item.dt, "cccc")}</div>
            {/* <div>{formatDate(item.dt, "hh:mm a")}</div> */}
          </div>
        </div>
      );
    });
  return (
    <div className="pt-6">
      <p className="text-white font-semibold">Daily Forecast</p>
      <hr className="pb-4 mt-1 opacity-60" />

      {date}
    </div>
  );
};

export default Daily;
