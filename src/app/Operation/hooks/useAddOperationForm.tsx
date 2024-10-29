import { useState, useEffect } from "react";
import { IMaterial } from "@/types/material";
import { OperationState } from "@/types/operation";
import MaterialServiceHook from "@/services/material/materialServiceHook";
import IEquipment from "@/types/equipment";
import EquipmentServiceHook from "@/services/equipment/EquipmentServiceHook";

export const useAddOperationForm = () => {
  const [duration, setDuration] = useState("");
  const [state, setState] = useState<OperationState | "">("");
  const [equipments, setEquipments] = useState<IEquipment[]>([]);
  const [materials, setMaterials] = useState<IMaterial[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(
    null
  );
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  useEffect(() => {
    const fetchEquipments = async () => {
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

    fetchEquipments();
    fetchMaterials();
  }, []);

  const handleSubmit =
    (onSubmit: (data: any) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({
        duration,
        state,
        equipment: selectedEquipment,
        material: selectedMaterial,
      });

      setDuration("");
      setState("");
      setSelectedEquipment(null);
      setSelectedMaterial(null);
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
    handleSubmit,
  };
};
