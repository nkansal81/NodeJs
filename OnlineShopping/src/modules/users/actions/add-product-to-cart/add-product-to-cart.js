const {Products} = require('../../../../db');
const {Users} = require('../../../../db');

const addProductToCart = async (email,product) => {
   const user = await Users.getUser({email},{});
   if(!user){
       throw new Error('User not found');
   }
   const savedProducts = await Products.createProduct(product);
   user.cart.push(savedProducts);
   await Users.updateUserByEmail(email,user);
   
   return user;
};

module.exports = {
    addProductToCart
}