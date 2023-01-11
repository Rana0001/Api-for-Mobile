const jwt = require("jsonwebtoken")

const verifyUser = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        let err = new Error('Authorization token is missing')
        res.status(400)
        return next(err)
    }
    token = authorization.split(' ')[1]
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            return next(err)
        }
        else{
            req.user =decoded
            next()
        }
    })
}

const verifyAdmin = (req,res,next)=>{
    const {role} = req.user
    if(role != 'Admin'){
        let err = new Error({"msg":"Unauthorized"})
        res.status(403)
        return next(err)
    }
    next()
}



module.exports = {
    verifyAdmin,
    verifyUser,
}