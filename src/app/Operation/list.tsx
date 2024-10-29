import { useState } from "react";
import useOperationService from "./hooks/useOperationService";
import { PageTitle } from "../Components/pageTitle";
import { Button } from "../Components/button";
import { FaPlus } from "react-icons/fa";
import Table from "../Components/table";
import Modal from "../Components/modal";
import AddOperationForm from "./addOperationForm";
import {
  handleAddOperation,
  handleDeleteOperation,
  handleUpdateOperation,
} from "@/utils/operationHandler";
import UpdateOperationForm from "./updateOperainForm";

const OperationList = () => {
  const {
    operations,
    error,
    setOperations,
    createOperation,
    updateOperation,
    deleteOperation,
  } = useOperationService();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [operationToEdit, setOperationToEdit] = useState<any | null>(null);

  const columns = [
    { header: "Duration", accessor: "duration" },
    { header: "State", accessor: "state" },
  ];

  return (
    <div className="p-6 space-y-4">
      <PageTitle text="Operation List" />
      {error && <p>Error: {error.message}</p>}

      {/*Boutton d'ajour d'operation */}
      <div className="flex justify-end mr-8">
        <Button
          text="Add Operation"
          icon={<FaPlus />}
          onClick={() => setIsModalOpen(true)}
          className="btn btn-active btn-accent"
        />
      </div>

      {/* Table avec liste d'operation */}
      <div className="mt-4">
        <Table
          columns={columns}
          data={operations}
          onUpdate={(operation) =>
            handleUpdateOperation(
              operation,
              setOperationToEdit,
              setIsEditModalOpen
            )
          }
          onDelete={(id) =>
            handleDeleteOperation(id, deleteOperation, setOperations)
          }
        />
      </div>

      {/**Modal d'ajout d'operation */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddOperationForm
          onSubmit={(operationData) =>
            handleAddOperation(operationData, createOperation, setIsModalOpen)
          }
        />
      </Modal>

      {/* Modal pour éditer une operation*/}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        {operationToEdit && (
          <UpdateOperationForm
            operation={operationToEdit}
            onSubmit={(updatedData) => {
              if (operationToEdit) {
                updateOperation(operationToEdit._id, updatedData);
                setIsEditModalOpen(false);
                setOperationToEdit(null);
              }
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default OperationList;
