import React, { useEffect } from "react";
import { datas } from "./Data";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedOption } from "../../redux/reducers/sidebar";

const SidebarData = () => {
  const { openTable, selectedOption } = useSelector(
    (state: any) => state.sidebar
  );
  const dispatch = useDispatch();

  const handleOptionClick = (id: any) => {
    dispatch(setSelectedOption(id));
  };

  return (
    <div className="">
      {datas.map((data) => (
        <div
          className={`${
            openTable ? "last:w-[3.6rem]" : "last:w-[17rem] "
          } sidebar last:absolute left-4 bottom-4`}
          key={data.id}
          onClick={() => handleOptionClick(data.id)}
          style={{
            backgroundColor: selectedOption === data.id ? "#f0f0f0" : undefined,
          }}
        >
          <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
          <div
            className={`${
              openTable ? "" : "opacity-0 delay-200"
            } text-[1rem] text-brown whitespace-pre`}
          >
            <span>{data.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarData;
