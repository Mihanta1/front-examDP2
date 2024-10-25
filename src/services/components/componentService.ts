import { baseUrl } from "@/config";

class ComponentService {
  async createComponent(componentsData: any) {
    try {
      const response = await fetch(`${baseUrl}/components/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(componentsData),
      });
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getAllComponents() {
    try {
      const response = await fetch(`${baseUrl}/components/`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async updateComponent(componentId: string, componentsData: any) {
    try {
      const response = await fetch(`${baseUrl}/components/${componentId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(componentsData),
      });
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
const componentService = new ComponentService();
export default componentService;
