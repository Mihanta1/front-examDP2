import { useState } from "react";
import { PageTitle } from "../Components/pageTitle";
import { Button } from "../Components/button";
import { FaPlus } from "react-icons/fa";
import useMaterialService from "./hooks/useMaterialService";
import Table from "../Components/table";
import Modal from "../Components/modal";
import AddMaterialForm from "./addMaterialForm";
import { handleAddEquipment } from "@/utils/equipmentHandler";
import UpdateMaterialForm from "./updateMaterialForm";
import { handleDeleteMaterial, handleUpdateMaterial } from "@/utils/materialHandler";

const MaterialList = () => {
  const { materials, error, updateMaterial, createMaterial, deleteMaterial , setMaterials} =
    useMaterialService();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [materialToEdit, setMaterialToEdit] = useState<any | null>(null);
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Inventory Level", accessor: "inventoryLevel" },
  ];
  return (
    <div className="p-6 space-y-4">
      <PageTitle text="Material List" />
      {error && <p>Eror:{error.message}</p>}

      {/**Boutton d'ajout de materiau */}
      <div className="flex justify-end mr-8">
        <Button
          text="Add Material"
          icon={<FaPlus />}
          onClick={() => setIsModalOpen(true)}
          className="btn btn-active btn-accent"
        />
      </div>

      {/**tableau de liste de materiaux */}
      <div className="mt-4">
        <Table
          columns={columns}
          data={materials}
          onUpdate={(material) => handleUpdateMaterial(material, setMaterialToEdit, setIsEditModalOpen)}
          onDelete={(id) => handleDeleteMaterial(id, deleteMaterial, setMaterials)}
        />
      </div>

      {/** Modal d'ajout de materiau */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddMaterialForm
          onSubmit={(materialData) =>
            handleAddEquipment(materialData, createMaterial, setIsModalOpen)
          }
        />
      </Modal>

      {/**Modal update */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        {materialToEdit && (
          <UpdateMaterialForm
            material={materialToEdit}
            onSubmit={(updatedData) => {
              updateMaterial(materialToEdit._id, updatedData);
              setIsEditModalOpen(false);
              setMaterialToEdit(null);
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default MaterialList;
