import useProductService from "../app/Product/hooks/useProductService";

export const handleAddProduct = (
  productData: any,
  createProduct: (data: any) => void,
  setIsModalOpen: (isOpen: boolean) => void
) => {
  createProduct(productData);
  setIsModalOpen(false);
};

export const handleUpdateProduct = (
  product: any,
  setProductToEdit: (product: any) => void,
  setIsEditModalOpen: (isOpen: boolean) => void
) => {
  console.log("handleUpdateProduct called with product:", product);
  setProductToEdit(product);
  setIsEditModalOpen(true);
};

export const handleDeleteProduct = async (
  id: string,
  deleteProduct: (id: string) => Promise<void>,
  setProducts: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    await deleteProduct(id);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== id)
    );
  } catch (error) {
    console.error("Erreur lors de la suppression du produit:", error);
  }
};
