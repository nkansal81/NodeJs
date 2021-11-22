const {verify} = require('jsonwebtoken');
const {constants} = require('.././config')

const authenticateUserWithJWT = async(req,res,next) => {
    try {
        const auth = req.headers.authorization;
        if(!auth){
            return res.status(402).send({
                message: 'Access Denied',
                error: "Access Denied"
            })
        }
        const [scheme,token] = auth.split(' ');
        if(scheme !== "Bearer"){
            return res.status(402).send({
                message: "Access Denied",
                error: "Access Denied"
            })
        }
        const user = await verify(token,constants.JWT_SECRET);
        if(!user || !user.id){
            return res.status(402).send({
                message: 'Access Denied',
                error: "Access Denied"
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.log('error',error);
        return res.status(402).send({
            message: 'Access Denied',
            error: "Access Denied"
        })
    }
}

module.exports = {
  authenticateUserWithJWT,
}