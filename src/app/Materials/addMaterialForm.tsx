import React from "react";
import { useAddMaterialForm } from "./hooks/useAddMaterialForm";
import Input from "../Components/input";
import { Button } from "../Components/button";

interface AddMaterialFormProps {
  onSubmit: (data: any) => void;
}
const AddMaterialForm: React.FC<AddMaterialFormProps> = ({ onSubmit }) => {
  const {
    name,
    setName,
    description,
    setDescription,
    inventoryLevel,
    setInventoryLevel,
    handleSubmit,
  } = useAddMaterialForm();
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
        placeholder="Inventory Level"
        value={inventoryLevel}
        onChange={(e) => setInventoryLevel(e.target.value)}
      />
      <Button text="Add Material" className="btn btn-active btn-accent" />
    </form>
  );
};

export default AddMaterialForm;
