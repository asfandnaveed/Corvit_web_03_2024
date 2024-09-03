export const getProducts =async (req,res)=>{
    const product = {
        name:"Laptop",
        price:40000,
        company:"HP",
        proccessor:"i7"
    };
    res.send(product);
};
export const addProducts =async (req,res)=>{
    res.send('test');
};

