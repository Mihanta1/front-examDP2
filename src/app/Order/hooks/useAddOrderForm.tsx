import ProductServiceHook from "@/services/product/productServiceHook";
import { IProduct } from "@/types/product";
import { useState, useEffect } from "react";

export const useAddOrderForm = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [quantity, setQuantity] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

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
    (onSubmit: (data: any) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({
        quantity: quantity,
        products: selectedProduct,
      });
      setQuantity("");
      setSelectedProduct(null);
    };

  return {
    products,
    setProducts,
    quantity,
    setQuantity,
    selectedProduct,
    setSelectedProduct,
    handleSubmit,
  };
};
