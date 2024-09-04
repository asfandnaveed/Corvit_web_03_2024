import express from "express";
import dotenv from "dotenv";
import appRouter from "./routes/index.js";

dotenv.config();



const app = express();


app.use(express.json());


app.use('/api/v1/products',appRouter);




const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>console.log('Server Up and running',PORT) );
