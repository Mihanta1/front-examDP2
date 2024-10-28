import MaterialServiceHook from "@/services/material/materialServiceHook";
import { useState, useEffect } from "react";

const useMaterialService = () => {
  const [materials, setMaterials] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [hookInstance, setHookInstance] = useState<MaterialServiceHook | null>(
    null
  );

  useEffect(() => {
    const instance = new MaterialServiceHook(setMaterials, setError);
    setHookInstance(instance);
  }, []);



  if (!hookInstance) {
    return {
      materials: [],
      error: null,
      createMaterial: async () => {},
      updateMaterial: async () => {},
      deleteMaterial: async () => {},
      setMaterials: () => {},
    };
  }

  return {
    materials,
    error,
    createMaterial: hookInstance.createMaterial.bind(hookInstance),
    updateMaterial: hookInstance.updateMaterial.bind(hookInstance),
    deleteMaterial: hookInstance.deleteMaterial.bind(hookInstance),
    setMaterials,
  };
};

export default useMaterialService;
