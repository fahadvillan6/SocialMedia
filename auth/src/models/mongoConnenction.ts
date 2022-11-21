import Mongoose from "mongoose";
console.log("hi from connecion");
try {
  // Mongoose.connect(
  //   "mongodb+srv://mongo:mern123@cluster0.fwrdx.mongodb.net/project"
  // );
async function run(){

    await Mongoose.connect('mongodb+srv://mongo:mern123@cluster0.fwrdx.mongodb.net/project');
  }
  run().then((e)=>{console.log("run")})
  run().catch((e) => console.log(e))

  // const connection = Mongoose.connection;
  // connection.on("connected", () => {
  //   console.log("connected");
  // });
  // connection.on("error", () => {
  //   console.log("db connection failed");
  // }); 
} catch (error) {
  console.log(error);
}

export default Mongoose;
