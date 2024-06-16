import React from "react";
import Image from "next/image";
import user from "@assets/user.jpg";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { openTable } = useSelector((state: any) => state.sidebar);

  return (
    <div
      className={`flex gap-5 items-center ${
        openTable
          ? "bg-white rounded-xl p-2"
          : "bg-none transition-all duration-300 delay-200 "
      }`}
    >
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <Image
          src={user}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className={openTable ? "mr-2" : "opacity-0 delay-200"}>
        <h3 className="text-xl">Nazareno Rios</h3>
        <span className="text-[0.75rem] opacity-60">
          nazarenolrios@gmail.com
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
