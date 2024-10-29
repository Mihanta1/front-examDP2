import equipmentService from "./equipmentService";

class EquipmentServiceHook {
  private setEquipments: (equipments: any[]) => void;
  private setError: (error: any) => void;
  private equipments: any[] = [];
  private error: any = null;

  constructor(
    setEquipments: (equipments: any[]) => void,
    setError: (error: any) => void
  ) {
    this.setEquipments = setEquipments;
    this.setError = setError;
    this.fetchEquipments();
  }

  public async fetchEquipments() {
    try {
      const data = await equipmentService.getAllEquipments();
      this.equipments = data;
      this.setEquipments(data);
      console.log(data);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }
  public async createEquipment(equipmentData: any) {
    try {
      const data = await equipmentService.createEquipment(equipmentData);
      this.equipments = [...this.equipments, data];
      this.setEquipments(this.equipments);
      return data;
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }
  public async updateEquipment(equipmentId: string, equipmentData: any) {
    try {
      const data = await equipmentService.updateEquipment(
        equipmentId,
        equipmentData
      );
      this.equipments = this.equipments.map((equipment) =>
        equipment._id === equipmentId ? data : equipment
      );
      this.setEquipments(this.equipments);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }
  public async deleteEquipment(equipmentId: string) {
    try {
      await equipmentService.deleteEquipment(equipmentId);
      this.equipments = this.equipments.filter(
        (equipment) => equipment._id !== equipmentId
      );
      this.setEquipments(this.equipments);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }

  public getEquipmets() {
    return this.equipments;
  }

  public getError() {
    return this.error;
  }
}

export default EquipmentServiceHook;
