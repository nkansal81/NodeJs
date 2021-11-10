const {createUser} = require('./create-user');
const {createProduct} = require('./create-product');
const {addProductToCart} = require('./add-product-to-cart');
const {getUserList} = require('./get-user-list');
const {getUserById} = require('./get-user-by-id');
const {updateUserById} = require('./update-user-by-id');
const {login} = require('./login');
const {deleteProductFromCart} = require('./delete-product-from-cart');
const {deleteProductDb} = require('./delete-product-db');
const {getProductByName} = require('./get-product-by-name');
const {getProductFromCart} =require('./get-product-from-cart');
const {getProductList} = require('./get-product-list');
const {updateProductByQty} = require('./update-product-by-qty');
const {updateProductById} = require('./update-product-by-id');

module.exports = {
    createUser,
    createProduct,
    addProductToCart,
    getUserList,
    getUserById,
    getProductByName,
    getProductFromCart,
    getProductList,
    updateUserById,
    updateProductById,
    updateProductByQty,
    login,
    deleteProductFromCart,
    deleteProductDb,
}