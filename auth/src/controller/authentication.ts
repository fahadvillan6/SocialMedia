import  Jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
import { idText } from "typescript";
 
const SECRET_KEY = 'sdfljkkjlsdfkfdj';


 export const signToken = (id:string) => {
    const token = Jwt.sign({ _id:id  }, SECRET_KEY, {
        expiresIn: '2 days',
      });  
 }
