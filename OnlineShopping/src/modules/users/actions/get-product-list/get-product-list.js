const { Products } = require('../../../../db');

const getProductList = async (name) => {
    const productList = await Products.getProducts();
    if (!productList) {
        throw new Error('Product list not found');
    }
    return productList;
};

module.exports = {
    getProductList
};
