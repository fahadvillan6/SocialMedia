import { Schema, model, connect } from "mongoose";
import Mongoose from "./mongoConnenction";
import { hashPassword ,comparePass} from "../controller/passwords";

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name: string;
  email: string;
  password: string;
  mobile: number;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

type data = {
  name: string;
  mobile: number;
  password: string;
  email: string;
};
export const createUser = async (data: data) => {
  console.log(data);
  const { name, mobile, password, email } = data;
  try {
    const hashedpassword = await hashPassword(password);
    console.log(hashedpassword);
    const user = new User({ name, mobile, password:hashedpassword, email });
    await user.save();
    // const user = await User.create(data)
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};
 


export const loginuser = async (data:data) =>{
  
  try {
    const email = data.email
   let user = await User.findOne({email :email})
   if(user ) 
   {
  const response =  await comparePass(user.password,data.password)
  if(response)  return user
   else
   {  return {failed:'true',message:"incorrect password"}
   }
   }
  else return {failed:true,message:'user not exist'}
  } catch (error) {
    
  }
}