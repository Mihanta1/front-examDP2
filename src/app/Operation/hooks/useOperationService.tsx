import { useState, useEffect } from "react";
import OperationServiceHook from "@/services/operation/operationServiceHook";

const useOperationService = () => {
  const [operations, setOperations] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [hookInstance, setHookInstance] = useState<OperationServiceHook | null>(
    null
  );

  useEffect(() => {
    const instance = new OperationServiceHook(setOperations, setError);
    setHookInstance(instance);
  }, []);
  if (!hookInstance) {
    return {
      operations: [],
      error: null,
      createOperation: async () => {},
      updateOperation: async () => {},
      deleteOperation: async () => {},
      setOperations: () => {},
    };
  }

  return {
    operations,
    error,
    createOperation: hookInstance.createOperation.bind(hookInstance),
    updateOperation: hookInstance.updateOperation.bind(hookInstance),
    deleteOperation: hookInstance.deleteOperation.bind(hookInstance),
    setOperations,
  };
};

export default useOperationService;
