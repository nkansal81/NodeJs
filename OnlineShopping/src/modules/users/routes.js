const {
    getUser,
    getUsers,
    getProductName,
    getProductFrCart,
    registerUser,
    createProductDb,
    addProductCart,
    loginUser,
    updateUser,
    updateProductDb,
    updateProductQtyCart,
    getProducts,
    deleteProductFromDb,
    deleteProductCart,
} = require('./controllers');

const {
    authenticateUserWithJWT
} = require('../../middlewares');

module.exports = (router) => {
    router.get('/users',authenticateUserWithJWT,getUsers);
    router.get('/products',authenticateUserWithJWT,getProducts);
    router.get('/product-name/:name',authenticateUserWithJWT,getProductName);
    router.get('/product-cart/:userId',authenticateUserWithJWT,getProductFrCart);

    router.post('/users/sign-up',registerUser);
    router.post('/users/sign-in',loginUser);
    router.post('/products/create',authenticateUserWithJWT,createProductDb);
    router.post('/product-cart/add/:email',authenticateUserWithJWT,addProductCart);

    router.delete('/product-cart/delete/:userId',authenticateUserWithJWT,deleteProductCart);
    router.delete('/product/delete',authenticateUserWithJWT,deleteProductFromDb);

    router.put('/user/:id',authenticateUserWithJWT,updateUser);
    router.put('/product-cart/:userId',authenticateUserWithJWT,updateProductQtyCart);
    router.put('/product/:productId',authenticateUserWithJWT,updateProductDb);

};