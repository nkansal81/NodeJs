const {Products} = require('./../../../../db');

const createProduct = async (product) => {
   const savedProducts = await Products.createProduct(product);
   if(!savedProducts){
       throw new Error("Product is not created successfully");
   }
   const productList = await Products.getProducts();
   return productList;
};

module.exports = {
    createProduct
}