import { Error } from "../../types";
const createError = (status:number, message:string) => {
    const err:Error = new Error();
    err.status = status;
    err.message = message;
  
    return err;
  };
  
  export default createError;