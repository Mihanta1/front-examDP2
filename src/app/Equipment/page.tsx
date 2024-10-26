"use client";
import React from "react";
import SideBar from "../Components/sidebar";
import EquipmentList from "./list";

const Equipment = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-3/4">
        <EquipmentList />
      </div>
    </div>
  );
};

export default Equipment;
