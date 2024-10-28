import useMaterialService from "@/app/Materials/hooks/useMaterialService";

export const handleAddMaterial=(
    materialData:any,
    createMaterial:(data:any)=>void,
    setIsModalOpen:(isOpen:boolean)=>void
)=>{
    createMaterial(materialData);
    setIsModalOpen(false);
}

export const handleUpdateMaterial=(
    material:any,
    setMaterialToEdit:(material:any)=>void,
    setIsEditModalOpen:(isOpen:boolean)=>void
)=>{
console.log("handleUpdateMaterial called with material:", material)
setMaterialToEdit(material);
setIsEditModalOpen(true)
}

export const handleDeleteMaterial= async(
    id:string,
    deleteMaterial:(id:string)=>Promise<void>,
    setMaterials:React.Dispatch<React.SetStateAction<any[]>>
)=>{
    try {
        await deleteMaterial(id)
        setMaterials((prevMaterials)=>prevMaterials.filter((material)=>material._id !== id))
    } catch (error) {
        console.error("Erreur lors de la suppression du materiau:", error);
    }

}