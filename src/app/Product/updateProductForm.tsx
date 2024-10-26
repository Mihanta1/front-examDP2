import React from "react";
import { useUpdateProductForm } from "./hooks/useUpdateProductForm";
import { Button } from "../Components/button";
import Input from "../Components/input";

interface UpdateProductFormProps {
  product: any;
  onSubmit: (data: any) => void;
}

const UpdateProductForm: React.FC<UpdateProductFormProps> = ({
  product,
  onSubmit,
}) => {
  const {
    name,
    setName,
    price,
    setPrice,
    description,
    setDescription,
    quantity,
    setQuantity,
    loadProductData,
    handleSubmit,
  } = useUpdateProductForm();

  React.useEffect(() => {
    loadProductData(product);
  }, [product]);

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

      <Button text="Update Product" className="btn btn-active btn-accent"/>
    </form>
  );
};

export default UpdateProductForm;
