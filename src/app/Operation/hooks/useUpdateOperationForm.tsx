import MaterialServiceHook from "@/services/material/materialServiceHook";
import { IMaterial } from "@/types/material";
import { OperationState } from "@/types/operation";
import { useEffect, useState } from "react";
import IEquipment from "@/types/equipment";
import EquipmentServiceHook from "@/services/equipment/EquipmentServiceHook";

interface UpdateOperationData {
  duration: string;
  state: OperationState;
  selectedEquipment: string;
  selectedMaterial: string;
}

interface UseUpdateOperationFormReturn {
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  state: OperationState;
  setState: React.Dispatch<React.SetStateAction<OperationState>>;
  equipments: IEquipment[];
  setEquipments: React.Dispatch<React.SetStateAction<IEquipment[]>>;
  materials: IMaterial[];
  setMaterials: React.Dispatch<React.SetStateAction<IMaterial[]>>;
  selectedEquipment: string;
  setSelectedEquipment: React.Dispatch<React.SetStateAction<string>>;
  selectedMaterial: string;
  setSelectedMaterial: React.Dispatch<React.SetStateAction<string>>;
  loadOperationData: (operation: UpdateOperationData) => void;
  handleSubmit: (
    onSubmit: (data: UpdateOperationData) => void
  ) => (e: React.FormEvent) => void;
}

export const useUpdateOperationForm = (): UseUpdateOperationFormReturn => {
  const [duration, setDuration] = useState("");
  const [state, setState] = useState<OperationState>(OperationState.cancelled);
  const [equipments, setEquipments] = useState<IEquipment[]>([]);
  const [materials, setMaterials] = useState<IMaterial[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<string>("");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("");

  const loadOperationData = (operation: UpdateOperationData) => {
    setDuration(operation.duration || "");
    setState(operation.state);
    setSelectedEquipment(operation.selectedEquipment || "");
    setSelectedMaterial(operation.selectedMaterial || "");
  };

  useEffect(() => {
    const fetchequipments = async () => {
      const equipmentServiceHook = new EquipmentServiceHook(
        setEquipments,
        (error) => console.error(error)
      );
      await equipmentServiceHook.fetchEquipments();
    };

    const fetchMaterials = async () => {
      const materialServiceHook = new MaterialServiceHook(
        setMaterials,
        (error) => console.error(error)
      );
      await materialServiceHook.fetchMaterials();
    };

    fetchequipments();
    fetchMaterials();
  }, []);

  const handleSubmit =
    (onSubmit: (data: UpdateOperationData) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({
        duration,
        state: state as OperationState,
        selectedEquipment: selectedEquipment || "",
        selectedMaterial: selectedMaterial || "",
      });

      setDuration("");
      setState(OperationState.cancelled);
      setSelectedEquipment("");
      setSelectedMaterial("");
    };

  return {
    duration,
    setDuration,
    state,
    setState,
    equipments,
    setEquipments,
    materials,
    setMaterials,
    selectedEquipment,
    setSelectedEquipment,
    selectedMaterial,
    setSelectedMaterial,
    loadOperationData,
    handleSubmit,
  };
};
