import operationService from "./operationService";

class OperationServiceHook {
  private setOprations: (operations: any[]) => void;
  private setError: (error: any) => void;
  private operations: any[] = [];
  private error: any = null;
  constructor(
    setOperations: (operations: any[]) => void,
    setError: (error: any) => void
  ) {
    this.setOprations = setOperations;
    this.setError = setError;
    this.fetchOperations();
  }

  private async fetchOperations() {
    try {
      const data = await operationService.getAllOperation();
      this.operations = data;
      this.setOprations(this.operations);
      console.log(data);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }

  public async createOperation(operationData: any) {
    try {
      const data = await operationService.createOperation(operationData);
      this.operations = [...this.operations, data];
      this.setOprations(this.operations);
      return data;
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }

  public async updateOperation(operationId: string, operationData: any) {
    try {
      const data = await operationService.updateOperation(
        operationId,
        operationData
      );
      this.operations = this.operations.map((operation) =>
        operation._id === operationId ? data : operation
      );
      this.setOprations(this.operations);
      return { success: true, data };
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      console.error(error);
    }
  }

  public async deleteOperation(operationId: string) {
    try {
      await operationService.deleteOperation(operationId);
      this.operations = this.operations.filter(
        (operation) => operation._id !== operationId
      );
      this.setOprations(this.operations);
    } catch (error) {
      this.error = error;
      this.setError(this.error);
      throw error;
    }
  }
  public getOperations() {
    return this.operations;
  }

  public getError() {
    return this.error;
  }
}

export default OperationServiceHook;
