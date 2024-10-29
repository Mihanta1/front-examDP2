import React from "react";
import { useAddOperationForm } from "./hooks/useAddOperationForm";
import Input from "../Components/input";
import { OperationState } from "@/types/operation";
import { Button } from "../Components/button";

interface AddOperationFormProps {
  onSubmit: (data: any) => void;
}

const AddOperationForm: React.FC<AddOperationFormProps> = ({ onSubmit }) => {
  const {
    duration,
    setDuration,
    state,
    setState,
    materials,
    selectedMaterial,
    setSelectedMaterial,
    equipments,
    setEquipments,
    selectedEquipment,
    setSelectedEquipment,
    handleSubmit,
  } = useAddOperationForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center mt-12 gap-8 h-[50vh]"
    >
      <Input
        type="date"
        placeholder="duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <select
        className="h-12 rounded-lg w-2/3 border outline-none"
        value={state}
        onChange={(e) => setState(parseInt(e.target.value) as OperationState)}
      >
        <option disabled value="">
          State
        </option>
        <option value={OperationState.cancelled}>Canceled</option>
        <option value={OperationState.finish}>Finished</option>
        <option value={OperationState.in_progress}>In progress</option>
      </select>

      <select
        value={selectedEquipment || ""}
        onChange={(e) => setSelectedEquipment(e.target.value)}
        className="h-12 rounded-lg w-2/3 border outline-none"
        required
      >
        <option value="">Equipments</option>
        {equipments.map((equipment) => (
          <option key={equipment._id} value={equipment._id}>
            {equipment.name}
          </option>
        ))}
      </select>

      <select
        value={selectedMaterial || ""}
        onChange={(e) => setSelectedMaterial(e.target.value)}
        className="h-12 rounded-lg w-2/3 border outline-none"
        required
      >
        <option value="">Materials</option>
        {materials.map((material) => (
          <option key={material._id} value={material._id}>
            {material.name}
          </option>
        ))}
      </select>
      <Button text="Add Operation" className="btn btn-active btn-accent" />
   
    </form>
  );
};

export default AddOperationForm;
