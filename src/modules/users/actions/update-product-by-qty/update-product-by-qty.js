const Products = require('./../../../../db/controllers/products');
const Users = require('./../../../../db/controllers/users');

const updateProductByQty = async(userId,id,qty) => {

    const user = await Users.getUserById(userId);
    if(!user){
        throw new Error("User not found");
    }
    const {cart} = user;
    const product = await cart.find(el => {
        if(el._id == id){
         return el;
        }
     });
    if(!product){
        throw new Error('Product not found in cart');
    }
    Object.assign(product,{qty});
    console.log('cart',cart);
    await Users.updateUserById(userId,user);
    return user;
}

module.exports = {
    updateProductByQty
}