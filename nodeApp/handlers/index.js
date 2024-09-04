import { getAllProductData } from "../db/queries.js";

export const getProducts =async (req,res)=>{
    const product = await getAllProductData();
    res.send(product);
};
export const addProducts =async (req,res)=>{
    res.send('test');
};

