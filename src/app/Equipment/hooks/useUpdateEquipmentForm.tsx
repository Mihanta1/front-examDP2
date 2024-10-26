import { useState } from "react";
import { EType, IState } from "@/types/equipment";

interface UpdateEquipmentData {
  name: string;
  type: EType;
  state: IState;
}

interface UseUpdateEquipmentFormReturn {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  type: EType | "";
  setType: React.Dispatch<React.SetStateAction<EType | "">>;
  state: IState | "";
  setState: React.Dispatch<React.SetStateAction<IState | "">>;
  loadEquipmentData: (equipment: UpdateEquipmentData) => void;
  handleSubmit: (
    onSubmit: (data: UpdateEquipmentData) => void
  ) => (e: React.FormEvent) => void;
}

export const useUpdateEquipmentForm = (): UseUpdateEquipmentFormReturn => {
  const [name, setName] = useState("");
  const [type, setType] = useState<EType | "">("");
  const [state, setState] = useState<IState | "">("");

  const loadEquipmentData = (equipment: UpdateEquipmentData) => {
    setName(equipment.name || "");
    setType(equipment.type || "");
    setState(equipment.state || "");
  };

  const handleSubmit =
    (onSubmit: (data: UpdateEquipmentData) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ name, type: type as EType, state: state as IState });

      setName("");
      setType("");
      setState("");
    };

  return {
    name,
    setName,
    type,
    setType,
    state,
    setState,
    loadEquipmentData,
    handleSubmit,
  };
};
