export interface IOperation{
    _id:string,
    state:OperationState,
    duration:string
}

export enum OperationState {
    finish,
    in_progress,
    cancelled,
  }