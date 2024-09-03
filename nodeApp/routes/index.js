import { Router } from "express";
import {getProducts,addProducts} from "../handlers/index.js"




const appRouter =  Router();


appRouter.get('/',getProducts);
appRouter.post('/create',addProducts);



export default appRouter;