import { useState } from "react";
import useOrderService from "./hooks/useOrderService";
import { PageTitle } from "../Components/pageTitle";
import { Button } from "../Components/button";
import { FaPlus } from "react-icons/fa";
import Table from "../Components/table";
import {
  handleAddOrder,
  handleDeleteOrder,
  handleUpdateOrder,
} from "@/utils/orderHandler";
import Modal from "../Components/modal";
import AddOrderForm from "./addOrderForm";
import UpdateOrderForm from "./updateOrderForm";

const OrderList = () => {
  const { orders, error, createOrder, updateOrder, deleteOrder, setOrders } =
    useOrderService();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [orderToEdit, setOrderToEdit] = useState<any | null>(null);

  const columns = [
    { header: "Order Date", accessor: "order_date" },
    { header: "Delivery Date", accessor: "delivery_date" },
    { header: "Order Number", accessor: "order_number" },
    { header: "Status", accessor: "status" },
    { header: "Quantity", accessor: "order_quantity" },
  ];

  return (
    <div className="p-6 space-y-4">
      <PageTitle text="Order List" />
      {error && <p>Error: {error.message}</p>}

      {/*Boutton d'ajour d'order*/}
      <div className="flex justify-end mr-8">
        <Button
          text="Add Order"
          icon={<FaPlus />}
          onClick={() => setIsModalOpen(true)}
          className="btn btn-active btn-accent"
        />
      </div>

      {/* Table avec liste d'order */}
      <div className="mt-4">
        <Table
          columns={columns}
          data={orders}
          onUpdate={(order) =>
            handleUpdateOrder(order, setOrderToEdit, setIsEditModalOpen)
          }
          onDelete={(id) => handleDeleteOrder(id, deleteOrder, setOrders)}
        />
      </div>

      {/**Modal d'ajout d'order */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddOrderForm
          onSubmit={(orderData) =>
            handleAddOrder(orderData, createOrder, setIsModalOpen)
          }
        />
      </Modal>
      {/* Modal pour éditer un produit */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        {orderToEdit && (
          <UpdateOrderForm
            order={orderToEdit}
            onSubmit={(updatedData) => {
              if (orderToEdit) {
                updateOrder(orderToEdit._id, updatedData);
                setIsEditModalOpen(false);
                setOrderToEdit(null);
              }
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default OrderList;
