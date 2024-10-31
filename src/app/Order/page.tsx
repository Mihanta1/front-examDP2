"use client";
import React from "react";
import SideBar from "../Components/sidebar";
import OrderList from "./list";

const Order = () => {
 return(
    <div className="flex flex-row">
    <div className="w-1/4">
      <SideBar />
    </div>
    <div className="w-3/4">
      <OrderList />
    </div>
  </div>
 )
};

export default Order;
