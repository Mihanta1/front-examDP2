import { useState } from "react";

interface UpdateProductData {
  name: string;
  price: string;
  description: string;
  quantity: string;
}

interface UseUpdateProductFormReturn {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  quantity: string;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  loadProductData: (product: UpdateProductData) => void;
  handleSubmit: (
    onSubmit: (data: UpdateProductData) => void
  ) => (e: React.FormEvent) => void;
}

export const useUpdateProductForm = (): UseUpdateProductFormReturn => {
    const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  

  const loadProductData = (product: UpdateProductData) => {
    setName(product.name || ""); 
    setPrice(product.price || "");
    setDescription(product.description || "");
    setQuantity(product.quantity || "");
  };

  const handleSubmit =
    (onSubmit: (data: UpdateProductData) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ name, price, description, quantity });

      setName("");
      setPrice("");
      setDescription("");
      setQuantity("");
    };

  return {
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
  };
};
