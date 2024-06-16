import React from "react";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setOpenTable, setDarkBackground } from "@redux/sidebar";
import SidebarData from "./SidebarData";
import UserProfile from "./UserProfile";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { openTable, darkBackground } = useSelector(
    (state: any) => state.sidebar
  );

  const handleToggle = () => {
    dispatch(setOpenTable(!openTable));
    dispatch(setDarkBackground(!darkBackground));
  };

  return (
    <div className={`${openTable ? "" : "w-[5.8rem]"} sidebar-container`}>
      <UserProfile />
      <SidebarData />
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
        onClick={() => {
          handleToggle();
        }}
      >
        <BiChevronLeft
          className={`${
            openTable ? "" : "rotate-180"
          } text-3xl transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
