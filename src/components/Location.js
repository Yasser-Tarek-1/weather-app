import React from "react";
import { formatDate } from "../store/dateSlice";

const Location = ({ data: { country, dt, icon, main, name, temp } }) => {
  return (
    <div>
      <div className="flex items-center justify-between text-white">
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="font-smibold opacity-60">{country}</p>
        </div>
        <div className="text-lg opacity-90">
          {dt && formatDate(dt, "hh:mm a")}
        </div>
      </div>
      <div className="pt-12 flex items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <img
            alt="/"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          />
          <div className="font-bold text-white text-2xl mt-[-20px]">
            {temp && `${temp.toFixed()}° C`}
          </div>
        </div>
        <div className="font-bold text-lg text-white">{main}</div>
      </div>
    </div>
  );
};

export default Location;
