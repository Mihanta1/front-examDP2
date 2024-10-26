import { EType, IState } from "@/types/equipment";
import { useState } from "react";

export const useAddEquipmentForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState<EType | "">("");
  const [state, setState] = useState<IState | "">("");

  const handleSubmit=(onSubmit:(data:any)=>void)=>(e:React.FormEvent)=>{
    e.preventDefault();
    onSubmit(
        {
            name:name,
            type:type,
            state:state
        }
    )
    setName("")
    setType("")
    setState("")
  }

  return{
    name,
    setName,
    type,
    setType,
    state,
    setState,
    handleSubmit
  }
};
