import { baseUrl } from "@/config";

class MaterialService {
  async getAllMaterials() {
    try {
      const response = await fetch(`${baseUrl}/material/`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const materials = await response.json();
      return materials;
    } catch (error) {
      throw error;
    }
  }
  async createMaterial(materialData: any) {
    try {
      const response = await fetch(`${baseUrl}/material/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(materialData),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getMaterialById(materialId: string) {
    try {
      const response = await fetch(`${baseUrl}/material/${materialId}`, {
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
  async updateMaterial(materialId: string, materialData: any) {
    try {
      const response = await fetch(`${baseUrl}/material/${materialId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(materialData),
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
  async deleteMaterial(materialId: string) {
    try {
      const response = await fetch(`${baseUrl}/material/${materialId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw { error: "Failed to delete" };
      }
    } catch (error) {
      throw error;
    }
  }
}

const materialService = new MaterialService();
export default materialService;
