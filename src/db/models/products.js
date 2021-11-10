const {Schema,model} = require('mongoose');

const productScehma = new Schema({
    product_name: {
        type:String
    },
    qty: {
        type: Number
    },
    description: {
        type: String
    },
    type:{
        type: String,
        default: 'product'
    },
});
 

module.exports = {
  Products: model('products',productScehma)
}