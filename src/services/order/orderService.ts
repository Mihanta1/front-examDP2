import { baseUrl } from "@/config";

class OrderService {
  async createOrder(orderData: any) {
    try {
      const response = await fetch(`${baseUrl}/order/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllOrders() {
    try {
      const response = await fetch(`${baseUrl}/order/`, {
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
  async updateOrder(orderId: string, orderData: any) {
    try {
      const response = await fetch(`${baseUrl}/order/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async deleteOrder(orderId: string) {
    try {
      const response = await fetch(`${baseUrl}/order/${orderId}`, {
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

const orderService = new OrderService();
export default orderService;
