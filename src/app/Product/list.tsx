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
import { PageTitle } from "../Components/pageTitle";

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
    <div className="p-6 space-y-4">
      <PageTitle text="Product List" />
      {error && <p>Error: {error.message}</p>}

      {/*Boutton d'ajour de produit */}
      <div className="flex justify-end mr-8">
        <Button
          text="Add Product"
          icon={<FaPlus />}
          onClick={() => setIsModalOpen(true)}
          className="btn btn-active btn-accent"
        />
      </div>

      {/* Table avec liste de produiy */}
      <div className="mt-4">
        <Table
          columns={columns}
          data={products}
          onUpdate={(product) =>
            handleUpdateProduct(product, setProductToEdit, setIsEditModalOpen)
          }
          onDelete={(id) => handleDeleteProduct(id, deleteProduct, setProducts)}
        />
      </div>

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
