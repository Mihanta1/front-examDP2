import React from "react";
import { useUpdateEquipmentForm } from "./hooks/useUpdateEquipmentForm";
import Input from "../Components/input";
import { Button } from "../Components/button";
import { EType, IState } from "@/types/equipment";
interface UpdateEquipmentFormProps {
  equipment: any;
  onSubmit: (data: any) => void;
}

const UpdateEquipmentForm: React.FC<UpdateEquipmentFormProps> = ({
  equipment,
  onSubmit,
}) => {
  const {
    name,
    setName,
    type,
    setType,
    state,
    setState,
    loadEquipmentData,
    handleSubmit,
  } = useUpdateEquipmentForm();

  React.useEffect(() => {
    loadEquipmentData(equipment);
  }, [equipment]);

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
      <select
        className="select w-2/3"
        value={type}
        onChange={(e) => setType(parseInt(e.target.value) as EType)}
      >
        <option disabled value="">
          Type
        </option>
        <option value={EType.machineForProduction}>
          Machine for Production
        </option>
        <option value={EType.machineForQuality}>Machine for Quality</option>
        <option value={EType.machineForMaintain}>Machine for Maintain</option>
      </select>
      <select
        className="select w-2/3"
        value={state}
        onChange={(e) => setState(parseInt(e.target.value) as IState)}
      >
        <option disabled value="">
          State
        </option>
        <option value={IState.available}>Operational</option>
        <option value={IState.maintenance}>Maintenance</option>
        <option value={IState.busy}>Busy</option>
        <option value={IState.unavailable}>Unavailable</option>
        <option value={IState.out}>Out of Order</option>
      </select>
      <Button text="Update Equipment" className="btn btn-active btn-accent" />
    </form>
  );
};

export default UpdateEquipmentForm;
