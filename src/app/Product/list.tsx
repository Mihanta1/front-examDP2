"use client";
import React, { useState } from "react";
import useProductService from "./hooks/useProductService";
import { Button } from "../Components/button";
import { FaPlus } from "react-icons/fa";
import Modal from "../Components/modal";
import AddProductForm from "./addProductForm";
import Table from "../Components/table";
import UpdateProductForm from "./updateProductForm";
import {
  handleAddProduct,
  handleDeleteProduct,
  handleUpdateProduct,
} from "../../utils/productHandler";

const ProductList = () => {
  const {
    products,
    error,
    createProduct,
    updateProduct,
    deleteProduct,
    setProducts,
  } = useProductService();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<any | null>(null);

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Price", accessor: "price" },
    { header: "Quantity", accessor: "quantity" },
  ];
  return (
    <div className="">
      <h1>Product List</h1>
      {error && <p>Error: {error.message}</p>}

      <Button
        text="Add Product"
        icon={<FaPlus />}
        onClick={() => setIsModalOpen(true)}
      />

      <Table
        columns={columns}
        data={products}
        onUpdate={(product) =>
          handleUpdateProduct(product, setProductToEdit, setIsEditModalOpen)
        }
        onDelete={(id) => handleDeleteProduct(id, deleteProduct, setProducts)}
      />

      {/* Modal pour ajouter un produit */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddProductForm
          onSubmit={(productData) =>
            handleAddProduct(productData, createProduct, setIsModalOpen)
          }
        />
      </Modal>

      {/* Modal pour éditer un produit */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        {productToEdit && (
          <UpdateProductForm
            product={productToEdit}
            onSubmit={(updatedData) => {
              if (productToEdit) {
                updateProduct(productToEdit._id, updatedData);
                setIsEditModalOpen(false);
                setProductToEdit(null);
              }
            }}
          />
        )}
      </Modal>
    </div>
  );
};
export default ProductList;
