import React from "react";
import { useDispatch } from "react-redux";
import { getDatesNow } from "../store/dateSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  const citis = [
    {
      id: 1,
      city: "cairo",
    },
    {
      id: 2,
      city: "london",
    },
    {
      id: 3,
      city: "tokyo",
    },
    {
      id: 4,
      city: "paris",
    },
  ];
  return (
    <div className="flex items-center justify-evenly pt-4">
      {citis.map((city) => {
        return (
          <button
            onClick={() => dispatch(getDatesNow(city.city))}
            key={city.id}
            className="px-2 py-1 text-[#193152] capitalize font-bold"
          >
            {city.city}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
