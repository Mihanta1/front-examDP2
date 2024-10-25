import { useState } from "react";

export const useAddProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (onSubmit: (data: any) => void) => (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    });
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  // Retourner directement ces valeurs depuis le hook
  return {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    quantity,
    setQuantity,
    handleSubmit,
  };
};
