export const handleAddOperation = (
  operationData: any,
  createOperation: (data: any) => void,
  setIsModalOpen: (isOpen: boolean) => void
) => {
  createOperation(operationData);
  setIsModalOpen(false);
};

export const handleUpdateOperation = (
  operation: any,
  setOperationToEdit: (operation: any) => void,
  setIsEditModalOpen: (isOpen: boolean) => void
) => {
  console.log("handleUpdateOperation called with operation:", operation);
  setOperationToEdit(operation);
  setIsEditModalOpen(true);
};

export const handleDeleteOperation = async (
  id: string,
  deleteOperation: (id: string) => Promise<void>,
  setOperations: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    await deleteOperation(id);
    setOperations((prevOperations) =>
      prevOperations.filter((operation) => operation._id !== id)
    );
  } catch (error) {}
};
