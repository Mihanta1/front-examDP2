import OrderServiceHook from "@/services/order/orderServiceHook";
import { useEffect, useState } from "react";
const useOrderService = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [hookInstance, setHookInstance] = useState<OrderServiceHook | null>(
    null
  );

  useEffect(() => {
    const instance = new OrderServiceHook(setOrders, setError);
    setHookInstance(instance);
  }, []);
  if (!hookInstance) {
    return {
      orders: [],
      error: null,
      createOrder: async () => {},
      updateOrder: async () => {},
      deleteOrder: async () => {},
      setOrders: () => {},
    };
  }

  return {
    orders,
    error,
    createOrder: hookInstance.createOrder.bind(hookInstance),
    updateOrder: hookInstance.updateOrder.bind(hookInstance),
    deleteOrder: hookInstance.deleteOrder.bind(hookInstance),
    setOrders,
  };
};

export default useOrderService;
