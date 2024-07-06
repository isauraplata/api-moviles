import express from "express"
import * as dotenv from "dotenv"
// import { userRouter } from "./users/infrastructure/UserRouter";
// import { productRouter } from "./products/infrastructure/ProductRouter";
// import {curiousFactRouter}}
// import curiousFactRouter from "../src/curiousFact/infrastructure/Cur"
// import {curiousFactRouter} from "../src/curiousFact/infrastructure/"

import {curiousFactRouter} from "./curiousFact/infrastructure/curiousFactRouter"
import { userRouter } from "./user/infrastructure/UserRouter";
import { mechanicWorkshopRouter } from "./mechanicWorkshop/infrastructure/mechanicWorkshopRouter";

// import cors from "cors";
const app =express();
dotenv.config();
app.use(express.json());
// app.use(cors());

const port=process.env.PORT_SERVER;
const now = new Date();


app.listen(port,()=>{
    console.log("listening on port: "+port)
    console.log(now.toLocaleString());
});


app.use("/api/v1/curiousFact",curiousFactRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/mechanicWorkshop",mechanicWorkshopRouter);


// app.use("/api/v1/products",productRouter);