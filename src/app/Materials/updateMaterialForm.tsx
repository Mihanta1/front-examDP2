import React from "react";
import { useUpdateMaterialForm } from "./hooks/useUpdateMaterialForm";
import Input from "../Components/input";
import { Button } from "../Components/button";

interface UpdateMaterialFormProps {
  material: any;
  onSubmit: (data: any) => void;
}

const UpdateMaterialForm: React.FC<UpdateMaterialFormProps> = ({
  material,
  onSubmit,
}) => {
  const {
    name,
    setName,
    description,
    setDescription,
    inventoryLevel,
    setInventoryLevel,
    loadMaterialData,
    handleSubmit,
  } = useUpdateMaterialForm();
  React.useEffect(() => {
    loadMaterialData(material);
  }, [material]);

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
      <Button text="Update Material" className="btn btn-active btn-accent" />
    </form>
  );
};

export default UpdateMaterialForm;
