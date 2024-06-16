import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../modules/Home/Home";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { darkBackground } = useSelector((state) => state.sidebar);

  return (
    <div
      className={`w-full h-screen bg-cover object-cover flex items-center ${
        darkBackground ? "bg-mainDark" : "bg-main"
      }`}
    >
      <Sidebar />
      <Home />
    </div>
  );
};

export default HomePage;
