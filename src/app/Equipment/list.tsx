"use client";
import React, { useState } from "react";
import { PageTitle } from "../Components/pageTitle";
import useEquipmentService from "./hooks/useEquipmentService";
import Table from "../Components/table";
import { FaPlus } from "react-icons/fa";
import { Button } from "../Components/button";
import Modal from "../Components/modal";
import AddEquipmentForm from "./addEquipment";
import { handleAddEquipment, handleDeleteEquipment, handleUpdateEquipment } from "@/utils/equipmentHandler";
import UpdateEquipmentForm from "./updateEquipmentForm";

const EquipmentList = () => {
  const { equipments, error, createEquipment, updateEquipment,deleteEquipment, setEquipments } = useEquipmentService();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [equipmentToEdit, setEquipmentToEdit] = useState<any | null>(null);
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Type", accessor: "type" },
    { header: "State", accessor: "state" },
    { header: "Life Point", accessor: "lifePoint" },
  ];

  return (
    <div className="p-6 space-y-4">
      <PageTitle text="Equipment List" />
      {error && <p>Error: {error.message}</p>}

      {/**boutton d'ajout d'equipment */}
      <div className="flex justify-end mr-8">
        <Button
          text="Add Equipment"
          icon={<FaPlus />}
          onClick={() => setIsModalOpen(true)}
          className="btn btn-active btn-accent"
        />
      </div>

      {/**tableau de liste des equipments */}
      <div className="mt-4">
        <Table
          columns={columns}
          data={equipments}
          onUpdate={(equipment) => {handleUpdateEquipment(equipment,setEquipmentToEdit,setIsEditModalOpen)}}
          onDelete={(id) => {handleDeleteEquipment(id,deleteEquipment, setEquipments)}}
        />
      </div>

      {/** Modal ajout d'equipment */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddEquipmentForm
          onSubmit={(equipmentData) =>
            handleAddEquipment(equipmentData, createEquipment, setIsModalOpen)
          }
        />
      </Modal>

        {/* Modal pour éditer un equipment */}
        <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        {equipmentToEdit && (
          <UpdateEquipmentForm
            equipment={equipmentToEdit}
            onSubmit={(updatedData) => {
              if (equipmentToEdit) {
                updateEquipment(equipmentToEdit._id, updatedData);
                setIsEditModalOpen(false);
                setEquipmentToEdit(null);
              }
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default EquipmentList;
