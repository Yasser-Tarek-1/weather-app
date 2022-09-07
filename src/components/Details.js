import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { AiOutlineArrowUp } from "react-icons/ai";

const Details = ({ data: { feels_like, humidity, speed, temp_max } }) => {
  return (
    <div className="pt-14 flex items-center flex-wrap">
      <div className="w-1/2 flex items-center justify-around mb-10">
        <div className="w-[200px] flex p-2 rounded-[4px]  items-center justify-center">
          <FaTemperatureHigh size={40} color="#2196f3" />
          <div className="flex flex-col items-center justify-center ml-2 md:ml-5">
            <div className="font-semibold text-[#1e2f47] text-md sm:text-lg">
              Real fell
            </div>
            <div className="font-bold text-md sm:text-lg text-[#1e2f47]">{`${
              feels_like && feels_like.toFixed()
            }° C`}</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-around mb-10">
        <div className="w-[200px] flex p-2 rounded-[4px] items-center justify-center">
          <WiHumidity size={50} color="#2196f3" />
          <div className="flex flex-col items-center justify-center ml-2 md:ml-5">
            <div className="font-semibold text-[#1e2f47] text-md sm:text-lg">
              Humidity
            </div>
            <div className="font-bold text-md sm:text-lg text-[#1e2f47]">{`${humidity} %`}</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-around mb-10">
        <div className="w-[200px] flex p-2 rounded-[4px] items-center justify-center">
          <BsWind size={40} color="#2196f3" />
          <div className="flex flex-col items-center justify-center ml-2 md:ml-5">
            <div className="font-semibold text-[#1e2f47] text-md sm:text-lg">
              Wind
            </div>
            <div className="font-bold text-md sm:text-lg text-[#1e2f47]">
              {speed && `${speed.toFixed()} km/h`}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-around mb-10">
        <div className="w-[200px] flex p-2 rounded-[4px]  items-center justify-center">
          <AiOutlineArrowUp size={40} color="#2196f3" />
          <div className="flex flex-col items-center justify-center ml-2 md:ml-5">
            <div className="font-semibold text-[#1e2f47] text-md sm:text-lg">
              High
            </div>
            <div className="font-bold text-md sm:text-lg text-[#1e2f47]">{`${
              temp_max && temp_max.toFixed()
            }° C`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
