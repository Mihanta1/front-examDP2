import React from "react";
import { useUpdateProductForm } from "./hooks/useUpdateProductForm";

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
      <input
        type="text"
        placeholder="Name"
        className="h-12 rounded-lg w-2/3 border outline-none "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        className="h-12 rounded-lg w-2/3 border outline-none "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        className="h-12 rounded-lg w-2/3 border outline-none "
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        className="h-12 rounded-lg w-2/3 border outline-none "
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
