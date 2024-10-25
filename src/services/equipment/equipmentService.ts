import { baseUrl } from "@/config";

class EquipmentService {
  async createEquipment(equipmentData: any) {
    try {
      const response = await fetch(`${baseUrl}/equipment/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(equipmentData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getAllEquipments() {
    try {
      const response = await fetch(`${baseUrl}/equipment/`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const equipments = await response.json();
      return equipments;
    } catch (error) {
      throw error;
    }
  }
  async getOneEquipment(equipmentId: string) {
    try {
      const response = await fetch(`${baseUrl}/equipment/${equipmentId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async updateEquipment(equipmentId: string, equipmentData: any) {
    try {
      const response = await fetch(`${baseUrl}/equipment/${equipmentId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(equipmentData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
  async deleteEquipment(equipmentId: string) {
    try {
      const response = await fetch(`${baseUrl}/equipment/${equipmentId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw { error: "Failed to delete" };
      }
    } catch (error) {
      throw error;
    }
  }
}

const equipmentService = new EquipmentService();
export default equipmentService;
