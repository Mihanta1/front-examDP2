import EquipmentServiceHook from "@/services/equipment/EquipmentServiceHook";
import { useState, useEffect } from "react";

const useEquipmentService = () => {
  const [equipments, setEquipments] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [hookInstance, setHookInstance] = useState<EquipmentServiceHook | null>(
    null
  );

  useEffect(() => {
    const instance = new EquipmentServiceHook(setEquipments, setError);
    setHookInstance(instance);
  }, []);

  if (!hookInstance) {
    return {
      equipments: [],
      error: null,
      createEquipment: async () => {},
      updateEquipment: async () => {},
      deleteEquipment: async () => {},
      setEquipments: () => {},
    };
  }

  return {
    equipments,
    error,
    createEquipment: hookInstance.createEquipment.bind(hookInstance),
    updateEquipment: hookInstance.updateEquipment.bind(hookInstance),
    deleteEquipment: hookInstance.deleteEquipment.bind(hookInstance),
    setEquipments,
  };
};

export default useEquipmentService;
