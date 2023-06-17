import { useId } from "react";

 const useUniqe =()=>{
    const id = useId()
    return id
}

export default  useUniqe