const { Users } = require('../../../../db');

const deleteProductFromCart = async (userId,productId) => {
    const user = await Users.getUser({_id:userId});
    if(!user){
        throw new Error("User not found");
    }
    const {cart} = user;
    let requiredProduct = await cart.find((product) => {
       if(product._id == productId){
          return product;
       }
    })

    if(!requiredProduct) {
        throw new Error("Product not found in cart");
    }
    const index = await cart.indexOf(requiredProduct);
    if(index>=-1){
       cart.splice(index,1);
    }
    await Users.updateUserById(userId,user);
    return user;
 };
 
 module.exports = {
    deleteProductFromCart,
 }