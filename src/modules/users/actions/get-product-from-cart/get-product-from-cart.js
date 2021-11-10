const { Products } = require('../../../../db');
const { Users } = require('../../../../db');

const getProductFromCart = async (userId) => {
    const user = await Users.getUserById(userId,{});
    if(!user){
        throw new Error("User is not found");
    }
    const {cart} = user;
    // const product = await Products.getProduct({productId});
    // if (!product) {
    //     throw new Error('Product not found');
    // }
    return cart;
};

module.exports = {
    getProductFromCart
};
