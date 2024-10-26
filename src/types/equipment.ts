interface IEquipment {
    _id: string;
    name: string;
    type: EType;
    state: IState;
    lifePoint: number;
  }
  export enum EType {
    machineForProduction,
    machineForQuality ,
    machineForMaintain,
  }
  
  export enum IState {
    available,
    busy ,
    unavailable,
    maintenance ,
    out ,
  }
  
  export default IEquipment;