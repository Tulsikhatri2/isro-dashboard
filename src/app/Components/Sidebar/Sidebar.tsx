"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDataContext } from "@/app/dashboard/dataProvider";
import Image from "next/image";
import logo from "../../../assets/isro-logo-redisign.jpg";
import { IoCaretBackCircleOutline, IoCaretBackCircleSharp } from "react-icons/io5";

const Sidebar = () => {
  const style =
    "h-[8%] w-[100%] mt-4 rounded-3xl hover:bg-gray-300 font-bold flex items-center justify-center cursor-pointer text-lg text-blue-950";
  const hoverStyle =
    "h-[8%] w-[100%] mt-4 rounded-3xl shadow-sm shadow-black  bg-gray-300 font-bold flex items-center justify-center cursor-pointer text-lg text-blue-950";
  const [isCenter, setIsCenter] = useState<boolean>(false);
  const [isCustomerSatellites, setIsCustomerSatellites] =
    useState<boolean>(false);
  const [isLaunchers, setIsLaunchers] = useState<boolean>(false);
  const [isSpacecraft, setIsSpacecraft] = useState<boolean>(false);

  const router = useRouter();
  const {
    fetchCentersData,
    fetchCustomerSatellitesData,
    fetchLaunchersData,
    fetchSpacecraftData,
  } = useDataContext();

  const handleCenters = () => {
    setIsCenter(true);
    router.push("/dashboard/centers");
    fetchCentersData();
    setIsCustomerSatellites(false);
    setIsLaunchers(false);
    setIsSpacecraft(false);
  };

  const handleCustomerSatellites = () => {
    setIsCustomerSatellites(true);
    router.push("/dashboard/customer-satellites");
    fetchCustomerSatellitesData();
    setIsCenter(false);
    setIsLaunchers(false);
    setIsSpacecraft(false);
  };

  const handleLaunchers = () => {
    setIsLaunchers(true);
    router.push("/dashboard/launchers");
    fetchLaunchersData();
    setIsCenter(false);
    setIsSpacecraft(false);
    setIsCustomerSatellites(false);
  };

  const handleSpacecraft = () => {
    setIsSpacecraft(true);
    router.push("/dashboard/spacecraft");
    fetchSpacecraftData();
    setIsCenter(false);
    setIsCustomerSatellites(false);
    setIsLaunchers(false);
  };

  const handleImageClick = () => {
    router.push("/dashboard")
    setIsCenter(false);
    setIsCustomerSatellites(false);
    setIsLaunchers(false);
    setIsSpacecraft(false);
  }

  return (
    <div className="w-[100%] h-[100%] pt-10 text-center bg-gray-400 shadow-lg shadow-black">
      
      <div className="w-[100%] h-[10%] flex items-center justify-center">
        <Image
          src={logo}
          className="shadow-md shadow-gray-500 rounded-3xl hover:shadow-lg hover:shadow-gray-500 cursor-pointer"
          alt="ISRO logo"
          width={70}
          height={70}
          onClick={handleImageClick}
        />
      </div>
      <button className={`${isCenter ? hoverStyle : style}`} onClick={handleCenters}>
        Centers
      </button>
      <button
        className={`${isCustomerSatellites ? hoverStyle : style}`}
        onClick={handleCustomerSatellites}
      >
        Customer Satellites
      </button>
      <button
        className={`${isLaunchers ? hoverStyle : style}`}
        onClick={handleLaunchers}
      >
        Launchers
      </button>
      <button
        className={`${isSpacecraft ? hoverStyle : style}`}
        onClick={handleSpacecraft}
      >
        Spacecraft
      </button>
    </div>
  );
};

export default Sidebar;
