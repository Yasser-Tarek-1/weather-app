import React, { useEffect } from "react";

import DateAndInput from "./components/DateAndInput";
import Buttons from "./components/Buttons";
import Details from "./components/Details";
import Location from "./components/Location";
import Daily from "./components/Daily";

import { getDatesNow } from "./store/dateSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { now, daily, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatesNow("cairo"));
  }, [dispatch]);

  const formatBG = () => {
    if (Math.floor(now.temp) > 20) {
      return "from-yellow-700 to-orange-700";
    } else {
      return "from-cyan-700 to-blue-700";
    }
  };

  return (
    <div className="relative">
      {error && (
        <div className="text-red-600 font-bold absolute left-[50%] md:left-auto translate-x-[-50%] md:translate-x-0  md:right-1 w-[285px] p-2 shadow-lg shadow-gray-400 rounded-md bg-red-200 transition">
          {error}
        </div>
      )}
      <div className="container mx-auto md:mt-6 shadow-lg shadow-gray-400  bg-white flex items-start max-w-screen-lg flex-col md:flex-row">
        <div className="w-full md:w-[69%] p-6 h-full">
          <DateAndInput date={now.dt} />
          <Buttons />
          <Details data={now} />
        </div>
        <div
          className={`w-full md:w-[31%] h-full bg-gradient-to-br ${formatBG()}`}
        >
          <div className="p-6 w-full h-full">
            <Location data={now} />
            <Daily daily={daily} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
