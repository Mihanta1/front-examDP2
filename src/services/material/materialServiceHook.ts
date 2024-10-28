import materialService from "./materialService";

class MaterialServiceHook {
  private setMaterials: (materials: any[]) => void;
  private setError: (error: any) => void;
  private materials: any[] = [];
  private error: any = null;

  constructor(
    setMaterials: (materials: any[]) => void,
    setError: (error: any) => void
  ) {
    this.setMaterials = setMaterials;
    this.setError = setError;
    this.fetchMaterials();
  }

  private async fetchMaterials() {
    try {
      const data = await materialService.getAllMaterials();
      this.materials = data;
      this.setMaterials(this.materials);
      console.log(data);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }
  public async createMaterial(materialData: any) {
    try {
      const data = await materialService.createMaterial(materialData);
      this.materials = [...this.materials, data];
      this.setMaterials(this.materials);
      return data;
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }
  public async updateMaterial(materialId: string, materialData: any) {
    try {
      const data = materialService.updateMaterial(materialId, materialData);
      this.materials = this.materials.map((material) => {
        material._id === materialId ? data : material;
      });
      this.setMaterials(this.materials);
      return data;
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }
  public async deleteMaterial(materialId: string) {
    try {
      await materialService.deleteMaterial(materialId);
      this.materials = this.materials.filter(
        (material) => material._id !== materialId
      );
      this.setMaterials(this.materials);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      throw error;
    }
  }

  public getMaterials() {
    return this.materials;
  }

  public getError() {
    return this.error;
  }
}

export default MaterialServiceHook;
