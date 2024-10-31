import orderService from "./orderService";

class OrderServiceHook {
  private setOrders: (orders: any[]) => void;
  private setError: (error: any) => void;
  private orders: any[] = [];
  private error: any = null;

  constructor(
    setOrders: (orders: any[]) => void,
    setError: (error: any) => void
  ) {
    this.setOrders = setOrders;
    this.setError = setError;
    this.fetchOrders();
  }

  public async fetchOrders() {
    try {
      const data = await orderService.getAllOrders();
      this.orders = data;
      this.setOrders(this.orders);
      console.log(data);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }
  public async createOrder(orderData: any) {
    try {
      const data = await orderService.createOrder(orderData);
      this.orders = [...this.orders, data];
      this.setOrders(this.orders);
      return data;
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }

  public async updateOrder(orderId: string, orderData: any) {
    try {
      const data = await orderService.updateOrder(orderId, orderData);
      this.orders = this.orders.map((Order) =>
        Order._id === orderId ? data : Order
      );
      this.setOrders(this.orders);
      return { success: true, data };
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }

  public async deleteOrder(orderId: string) {
    try {
      await orderService.deleteOrder(orderId);
      this.orders = this.orders.filter((Order) => Order._id !== orderId);
      this.setOrders(this.orders);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      throw error;
    }
  }
  public getOrders() {
    return this.orders;
  }

  public getError() {
    return this.error;
  }
}

export default OrderServiceHook;
