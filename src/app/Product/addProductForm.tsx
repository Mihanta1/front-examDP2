import React from "react";
import { useAddProductForm } from "./hooks/useAddProductForm";
import { Button } from "../Components/button";
import Input from "../Components/input";

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
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
 
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button text="Add Product" className="btn btn-active btn-accent"/>
    </form>
  );
};

export default AddProductForm;
