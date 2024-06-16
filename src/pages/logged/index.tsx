import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../modules/Home/Home";

const HomePage = () => {
  return (
    <div className='className="w-full h-screen bg-main bg-cover object-cover flex items-center"'>
      <Sidebar />
      <Home />
    </div>
  );
};

export default HomePage;
