
export const handleAddEquipment=(
    equipmentData:any,
    createEquipment:(data:any)=>void,
    setIsOpenModal:(isOpen:boolean)=>void
)=>{
    createEquipment(equipmentData)
    setIsOpenModal(false)
}

export const handleUpdateEquipment=(
    equipment:any,
    setEquipmentToEdit:(equipment:any)=>void,
    setIsEditModalOpen:(isOpen:boolean)=>void
)=>{
    console.log("handleUpdateEquipment called with equipment:", equipment)
    setEquipmentToEdit(equipment)
    setIsEditModalOpen(true)
}


export const handleDeleteEquipment=async(
    id:string,
    deleteEquipment:(id:string)=>Promise<void>,
    setEquipments:React.Dispatch<React.SetStateAction<any[]>>
)=>{
try {
    await deleteEquipment(id)
    setEquipments((prevEquipments)=>prevEquipments.filter((equipment)=>equipment._id!==id))
} catch (error) {
    console.error("Erreur lors de la suppression du produit:", error);
}
}