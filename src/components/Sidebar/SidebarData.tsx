import React, { useState } from "react";
import { datas } from "./Data";
import { useSelector } from "react-redux";

const SidebarData = () => {
  const { openTable } = useSelector((state: any) => state.sidebar);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="">
      {datas.map((data, index) => {
        return (
          <div
            className={`${
              openTable ? "last:w-[3.6rem]" : "last:w-[17rem] "
            } sidebar last:absolute left-4 bottom-4`}
            key={data.id}
            onClick={() => handleOptionClick(index)}
            style={{
              backgroundColor: selectedOption === index ? "#f0f0f0" : undefined,
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
        );
      })}
    </div>
  );
};

export default SidebarData;
