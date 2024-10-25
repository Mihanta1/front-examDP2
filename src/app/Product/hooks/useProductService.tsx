import { useState, useEffect } from "react";
import ProductServiceHook from "@/services/product/productServiceHook";

const useProductService = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [hookInstance, setHookInstance] = useState<ProductServiceHook | null>(
    null
  );

  useEffect(() => {
    const instance = new ProductServiceHook(setProducts, setError);
    setHookInstance(instance);
  }, []);

  if (!hookInstance) {
    return {
      products: [],
      error: null,
      createProduct: async () => {},
      getProductById: async () => {},
      updateProduct: async () => {},
      deleteProduct: async () => {},
      setProducts: () => {},
    };
  }

  return {
    products,
    error,
    createProduct: hookInstance.createProduct.bind(hookInstance),
    getProductById: hookInstance.getProductById.bind(hookInstance),
    updateProduct: hookInstance.updateProduct.bind(hookInstance),
    deleteProduct: hookInstance.deleteProduct.bind(hookInstance),
    setProducts,
  };
};

export default useProductService;
