const { createUser,login,createProduct,addProductToCart,
        getUserList,getProductList,getUserById,getProductByName,getProductFromCart,
        updateUserById,updateProductById,updateProductByQty,
        deleteProductDb,deleteProductFromCart,
    } = require('./actions');

const getUsers = async (_,res) => {
    try {
        const data = await getUserList();
        return res.status(200).send({
            message: 'success',
            data
        });    
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error:error.message
        })
    }
};
const getProducts = async (_,res) => {
    try {
        const data = await getProductList();
        return res.status(200).send({
            message: 'success',
            data
        });    
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error:error.message
        })
    }
};
const getUser = async (req,res) => {
    try {
        const {id} = req.params;
        // const id = req.params.id;
        const data = await getUserById(id);
        return res.status(200).send({
            message: 'success',
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error: error.message
        })
    }

};

const getProductName = async (req,res) => {
    try {
        const {name} = req.params;
        // const id = req.params.id;
        const data = await getProductByName(name);
        return res.status(200).send({
            message: 'success',
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error: error.message
        })
    }

};

const getProductFrCart = async (req,res) => {
    try {
        // const {productId} = req.body;
        const {userId} = req.params;
        const data = await getProductFromCart(userId);
        return res.status(200).send({
            message: 'success',
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error: error.message
        })
    }

};

const registerUser = async (req,res) => {
    try {
        const usr = req.body;
        const data = await createUser(usr);
        return res.status(200).send({
            message: 'User added successfully',
            data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error : error.message
        });
    }

};

const createProductDb = async (req,res) => {
    try {
        const product = req.body;
        const data = await createProduct(product);
        return res.status(200).send({
            message: 'Product is added successfully',
            data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error : error.message
        });
    }

};

const addProductCart = async (req,res) => {
    try {
        const {email} = req.params;
        const product = req.body;
        const data = await addProductToCart(email,product);
        return res.status(200).send({
            message: 'Product is added successfully',
            data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error : error.message
        });
    }

};

const loginUser = async(req,res) => {
    try {
        const usr = req.body;
        const data = await login(usr);
        return res.status(200).send({
            message: 'User added successfully',
            data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error : error.message
        });
    }

};
const updateUser = async (req,res) => {
    try {
        const user = req.body;
        const {id} = req.params;
        const data = await updateUserById(id,user);
        return res.status(200).send({
            message: 'User added successfully',
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error : error.message
        })
    }
};

const updateProductDb = async (req,res) => {
    try {
        const product = req.body;
        const {productId} = req.params;
        const data = await updateProductById(productId,product);
        return res.status(200).send({
            message: 'Prouduct is updated successfully',
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error : error.message
        })
    }
};

const updateProductQtyCart = async (req,res) => {
    try {
        const {_id,qty} = req.body;
        const {userId} = req.params;
        const data = await updateProductByQty(userId,_id,qty);
        return res.status(200).send({
            message: 'Prouduct qty is updated successfully',
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error : error.message
        })
    }
};

const deleteProductFromDb = async (req,res) => {
    try {
        const {_id} = req.body;
        const data = await deleteProductDb(_id);
        return res.status(200).send({
            message: 'Product deleted successfully',
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error : error.message
        })
    }
};

const deleteProductCart = async (req,res) => {
    try {
        const {userId} = req.params;
        const {_id} = req.body;
        const data = await deleteProductFromCart(userId,_id);
        return res.status(200).send({
            message: 'Product deleted successfully',
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error',
            error : error.message
        })
    }
};


module.exports = {
    getUsers,
    getProducts,
    getUser,
    getProductName,
    getProductFrCart,
    registerUser,
    createProductDb,
    addProductCart,
    loginUser,
    updateUser,
    updateProductDb,
    updateProductQtyCart,
    deleteProductFromDb,
    deleteProductCart,
}
