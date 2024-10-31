import ProductServiceHook from "@/services/product/productServiceHook";
import { IProduct } from "@/types/product";
import { useEffect, useState } from "react";

interface UpdateOrderData {
  quantity: string;
  selectedProduct: string;
}

interface UseUpdateOrderFormReturn {
  quantity: string;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  selectedProduct: string;
  setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  loadOrderData: (order: UpdateOrderData) => void;
  handleSubmit: (
    onSubmit: (data: UpdateOrderData) => void
  ) => (e: React.FormEvent) => void;
}

export const useUpdateOrderForm = (): UseUpdateOrderFormReturn => {
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const loadOrderData = (order: UpdateOrderData) => {
    setQuantity(order.quantity || "");
    setSelectedProduct(order.selectedProduct || "");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const productServiceHook = new ProductServiceHook(setProducts, (error) =>
        console.error(error)
      );
      await productServiceHook.fetchProducts();
    };
    fetchProducts();
  }, []);

  const handleSubmit =
    (onSubmit: (data: UpdateOrderData) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({
        quantity,
        selectedProduct: selectedProduct || "",
      });

      setQuantity("");
      setSelectedProduct("");
    };

  return {
    quantity,
    setQuantity,
    selectedProduct,
    setSelectedProduct,
    products,
    setProducts,
    loadOrderData,
    handleSubmit,
  };
};
