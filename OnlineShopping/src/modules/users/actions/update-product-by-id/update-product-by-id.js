const { Products } = require('../../../../db');

const updateProductById = async(id,newProduct) => {
    const product = await Products.getProduct({id});
    if(!product){
        throw new Error("Product not found in db");
    }
    await Products.updateProductUsingId(id,newProduct);
    const updatedproduct = await Object.assign(product,newProduct);
    return updatedproduct;
};

module.exports = {
    updateProductById
};
