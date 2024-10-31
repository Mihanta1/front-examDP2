import React from "react";
import { useAddOrderForm } from "./hooks/useAddOrderForm";
import Input from "../Components/input";
import { Button } from "../Components/button";

interface AddOrderFormProps {
  onSubmit: (data: any) => void;
}

const AddOrderForm: React.FC<AddOrderFormProps> = ({ onSubmit }) => {
  const {
    products,
    setProducts,
    quantity,
    setQuantity,
    selectedProduct,
    setSelectedProduct,
    handleSubmit,
  } = useAddOrderForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center mt-12 gap-8 h-[50vh]"
    >
      <select
        value={selectedProduct || ""}
        onChange={(e) => setSelectedProduct(e.target.value)}
        className="h-12 rounded-lg w-2/3 border outline-none"
        required
      >
        <option value="">Products</option>
        {products.map((product) => (
          <option key={product._id} value={product._id}>
            {product.name}
          </option>
        ))}
      </select>
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button text="Add Order" className="btn btn-active btn-accent" />
    </form>
  );
};

export default AddOrderForm;
