import { baseUrl } from "@/config";

class ProductService {
  async createProduct(productData: any) {
    try {
      const response = await fetch(`${baseUrl}/product/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getAllProducts() {
    try {
      const response = await fetch(`${baseUrl}/product/`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
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
  async getProductById(productId: string) {
    try {
      const response = await fetch(`${baseUrl}/product/${productId}`, {
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
  async updateProduct(productId: string, productData: any) {
    try {
      const response = await fetch(`${baseUrl}/product/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
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
  async deleteProduct(productId: string) {
    try {
      const response = await fetch(`${baseUrl}/product/${productId}`, {
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

const productService = new ProductService();
export default productService;
