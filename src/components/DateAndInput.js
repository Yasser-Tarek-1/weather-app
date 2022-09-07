import React, { useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { formatDate } from "../store/dateSlice";
import { useDispatch } from "react-redux";
import { getDatesNow } from "../store/dateSlice";

const DateAndInput = ({ date }) => {
  const ref = useRef("");
  const dispatch = useDispatch();
  const searchHandler = () => {
    dispatch(getDatesNow(ref.current.value));
    ref.current.value = "";
  };

  return (
    <div className="flex items-center w-full justify-between flex-col sm:flex-row">
      <div className="mb-5 sm:mb-0">
        <h3>{date && formatDate(date, "cccc")}</h3>
        <p className="text-gray-400">
          {date && formatDate(date, "dd LLL yyyy")}
        </p>
      </div>
      <div className="flex items-center mr-0 md:mr-20">
        <input
          type="text"
          className="bg-[#eaeced] rounded-[4px] py-1 px-3 capitalize font-semibold outline-none "
          placeholder="Search...."
          ref={ref}
        />
        <div className="flex items-center ml-2" onClick={searchHandler}>
          <BiSearchAlt2
            size={24}
            className="cursor-pointer mr-2"
            color="#1e2f47"
          />
        </div>
      </div>
    </div>
  );
};

export default DateAndInput;
