"use client"
import React from "react";
import SideBar from "../Components/sidebar";
import MaterialList from "./list";

const Material = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-3/4">
        <MaterialList />
      </div>
    </div>
  );
};

export default Material;
