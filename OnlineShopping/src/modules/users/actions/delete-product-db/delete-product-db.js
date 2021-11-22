const {Products} = require('./../../../../db');

const deleteProductDb = async(productId) => {

    const product = await Products.getProductById(productId);
    if(!product){
        throw new Error("Product not found in db");
    }
    await Products.deleteProduct(product);
    const productList = await Products.getProducts();
    return productList;
 };
 
 module.exports = {
    deleteProductDb,
 }