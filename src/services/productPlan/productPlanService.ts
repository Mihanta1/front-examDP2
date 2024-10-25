import { baseUrl } from "@/config";

class ProductPlanService {
  async createProductPlan(productPlanData: any) {
    try {
      const response = await fetch(`${baseUrl}/productPlan/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(productPlanData),
      });
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getAllProductPlans() {
    try {
      const response = await fetch(`${baseUrl}/productPlan/`, {
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
}

const productPlanService = new ProductPlanService();
export default productPlanService;
