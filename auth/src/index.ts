import express from "express";
import cors from "cors";
import userRoute from './routes/userRoues'

import Mongoose from "./models/mongoConnenction";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/",userRoute)
 const connection = Mongoose.connection;

app.listen(4000, () => {
  console.log("listening to 3000 port");
});
