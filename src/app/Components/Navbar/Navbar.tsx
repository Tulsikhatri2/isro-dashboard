"use client";
import React from "react";
import logo from "../../../assets/isro-logo-redisign.jpg";
import Image from "next/image";

const Navbar = () => {
  
  return (
    <div className="h-full w-full shadow-md shadow-black bg-blue-950">
      <div className="w-[100%] p-4 flex flex-row items-center justify-between">
        <Image
          src={logo}
          className="shadow-md shadow-gray-500 rounded-3xl hover:shadow-lg hover:shadow-gray-500"
          alt="ISRO logo"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

export default Navbar;
