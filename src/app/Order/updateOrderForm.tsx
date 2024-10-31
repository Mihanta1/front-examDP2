import React from "react";
import { useUpdateOrderForm } from "./hooks/useUpdateOrderForm";
import Input from "../Components/input";
import { Button } from "../Components/button";

interface UpdateOrderFormProps {
  order: any;
  onSubmit: (data: any) => void;
}

const UpdateOrderForm: React.FC<UpdateOrderFormProps> = ({
  order,
  onSubmit,
}) => {
  const {
    quantity,
    setQuantity,
    selectedProduct,
    setSelectedProduct,
    products,
    setProducts,
    loadOrderData,
    handleSubmit,
  } = useUpdateOrderForm();

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
      <Button text="Update Order" className="btn btn-active btn-accent" />
    </form>
  );
};

export default UpdateOrderForm;
