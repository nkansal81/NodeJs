const {Schema,model} = require('mongoose'); 

const userScehma = new Schema({
   username: {
       type:String
   },
   name: {
       type: String
   },
   email:{
       type: String
   },
   password:{
       type:String
   },
   role:{
       type: String,
       default:'user'
   },
   cart: {
       type: Array,
       default: []
   }
});

module.exports = {
  Users: model('users',userScehma)
}