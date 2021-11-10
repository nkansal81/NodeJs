const { Products } = require('../../../../db');

const getProductByName = async (name) => {
    const product = await Products.getProduct({name});
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

module.exports = {
    getProductByName
};
