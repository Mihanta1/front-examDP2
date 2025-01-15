"use client";
import React from "react";
import ProductList from "./Product/list";
import SideBar from "./Components/sidebar";

const Product = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-3/4">
        <ProductList />
      </div>
    </div>
  );
};

export default Product;
