import { connection } from "./index.js";


export const getAllProductData = async ()=>{
    try {
        const [results] = await connection.query(
          'SELECT * FROM `products`'
        );

        console.log(results);
        return results;
      
        
      } catch (err) {
        console.log(err);
      }

};