import express from "express";
import { connectDB } from "./DB/connection.js";
import {authRouter} from "./modules/index.js";

const app = express();
const port = 3000;

connectDB();

// parsing data from Request body
app.use(express.json())

// routing 
app.use("/auth" , authRouter )

// app.use((err , req , res , next)=>{
//     console.warn(err.message);
// });

app.listen(port , ()=>{
    console.log("application is running on port " + port);
});


