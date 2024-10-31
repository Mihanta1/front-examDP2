export const handleAddOrder = (
    orderData: any,
    createOrder: (data: any) => void,
    setIsModalOpen: (isOpen: boolean) => void
  ) => {
    createOrder(orderData);
    setIsModalOpen(false);
  };
  
  export const handleUpdateOrder = (
    order: any,
    setOrderToEdit: (Order: any) => void,
    setIsEditModalOpen: (isOpen: boolean) => void
  ) => {
    console.log("handleUpdateOrder called with Order:", order);
    setOrderToEdit(order);
    setIsEditModalOpen(true);
  };
  
  export const handleDeleteOrder = async (
    id: string,
    deleteOrder: (id: string) => Promise<void>,
    setOrders: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    try {
      await deleteOrder(id);
      setOrders((prevOrders) =>
        prevOrders.filter((Order) => Order._id !== id)
      );
    } catch (error) {}
  };
  