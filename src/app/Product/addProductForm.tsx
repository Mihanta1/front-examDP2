import React from "react";
import { useAddProductForm } from "./hooks/useAddProductForm";

interface AddProductFormProps {
  onSubmit: (data: any) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onSubmit }) => {
  const {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    quantity,
    setQuantity,
    handleSubmit,
  } = useAddProductForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center mt-12 gap-8 h-[50vh]"
    >
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
