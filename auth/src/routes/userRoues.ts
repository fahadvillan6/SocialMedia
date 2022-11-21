import {Router} from 'express'
import { signToken } from '../controller/authentication';
import { createUser, loginuser } from "../models/userModel";
const router = Router()

router.post("/register", async (req, res) => {
  
    await createUser(req.body.body);
    res.status(201).json();
  });
router.post("/login",async(req,res)=>{
   const response = await loginuser(req.body)
   console.log(response)
   res.status(200).json(response)
})

  export default router