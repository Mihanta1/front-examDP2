import productService from "./productService";

class ProductServiceHook {
  private setProducts: (products: any[]) => void;
  private setError: (error: any) => void;
  private products: any[] = [];
  private error: any = null;

  constructor(
    setProducts: (products: any[]) => void,
    setError: (error: any) => void
  ) {
    this.setProducts = setProducts;
    this.setError = setError;
    this.fetchProducts();
  }

  private async fetchProducts() {
    try {
      const data = await productService.getAllProducts();
      this.products = data;
      this.setProducts(this.products);
      console.log(data);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }

  public async createProduct(productData: any) {
    try {
      const data = await productService.createProduct(productData);
      this.products = [...this.products, data];
      this.setProducts(this.products);
      return data;
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      throw error;
    }
  }

  public async getProductById(productId: string) {
    try {
      const data = await productService.getProductById(productId);
      return data;
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      throw error;
    }
  }

  public async updateProduct(productId: string, productData: any) {
    try {
      const data = await productService.updateProduct(productId, productData);
      this.products = this.products.map((product) =>
        product._id === productId ? data : product
      );
      this.setProducts(this.products);
      return data;
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      throw error;
    }
  }

  public async deleteProduct(productId: string) {
    try {
      await productService.deleteProduct(productId);
      this.products = this.products.filter(
        (product) => product._id !== productId
      );
      this.setProducts(this.products);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      throw error;
    }
  }

  public getProducts() {
    return this.products;
  }

  public getError() {
    return this.error;
  }
}

export default ProductServiceHook;
