import { useState } from "react";

interface UpdateMaterialData {
  name: string;
  description: string;
  inventoryLevel: string;
}

interface UseUpdateMaterialFormReturn {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  inventoryLevel: string;
  setInventoryLevel: React.Dispatch<React.SetStateAction<string>>;
  loadMaterialData: (material: UpdateMaterialData) => void;
  handleSubmit: (
    onSubmit: (data: UpdateMaterialData) => void
  ) => (e: React.FormEvent) => void;
}

export const useUpdateMaterialForm = (): UseUpdateMaterialFormReturn => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [inventoryLevel, setInventoryLevel] = useState("");

  const loadMaterialData = (material: UpdateMaterialData) => {
    setName(material.name || "");
    setDescription(material.description || "");
    setInventoryLevel(material.inventoryLevel || "");
  };
  const handleSubmit =
    (onSubmit: (data: UpdateMaterialData) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ name, description, inventoryLevel });

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
    loadMaterialData,
    handleSubmit,
  };
};
