"use client";
import React from "react";
import SideBar from "../Components/sidebar";
import OperationList from "./list";

const Operation = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-3/4">
        <OperationList/>
      </div>
    </div>
  );
};
export default Operation