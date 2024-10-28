import { useState } from "react";

export const useAddMaterialForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [inventoryLevel, setInventoryLevel] = useState("");

  const handleSubmit =
    (onSubmit: (data: any) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({
        name: name,
        description: description,
        inventoryLevel: inventoryLevel,
      });
      setName("");
      setDescription("");
      setInventoryLevel("");
    };

  return {
    name,
    setName,
    description,
    setDescription,
    inventoryLevel,
    setInventoryLevel,
    handleSubmit,
  };
};
