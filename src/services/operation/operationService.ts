import { baseUrl } from "@/config";

class OperationService {
  async getAllOperation() {
    try {
      const response = await fetch(`${baseUrl}/operations/`, {
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
  async createOperation(operationData: any) {
    try {
      const response = await fetch(`${baseUrl}/operations/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(operationData),
      });
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async updateOperation(operationId: string, operationData: any) {
    try {
      const response = await fetch(`${baseUrl}/operations/${operationId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(operationData),
      });
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async deleteOperation(operationId: string) {
    try {
      const response = await fetch(`${baseUrl}/operations/${operationId}`, {
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

const operationService = new OperationService();
export default operationService;
