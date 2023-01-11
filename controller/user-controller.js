const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const getAllUser = (req,res,next)=>{
    User.find()
    .then(s=> res.json(s))
    .catch(err=> next(err))
}

const login = (req,res,next)=>{
    const {username, password} = req.body
    User.findOne({username}).then(user=>{
        if(user == null){
            res.status(401)
            let err = new Error(`User ${username} doesn't exists`)
            return next(err)
        }
        else{
            bcrypt.compare(password, user.password,
                (err,status)=>{
                    if(err){
                        res.status(401)
                        return next(err)
                    }
                    if(!status){
                        let err = new Error("Password Incorrect")
                    }
                    let data = {
                        userId : user._id,
                        username:user.username,
                        role: user.role
                    }
                    console.log(data)
                    jwt.sign(data, process.env.SECRET_KEY,
                        {"expiresIn":"1d"},(err,token)=>{
                            if(err){
                                return next(err)
                            }else{
                                res.json({
                                    "status":"Login Successful",
                                    "token":token
                                })
                            }
                        })
                })
        }
        
    }).catch(next)
}

const uploadImage = (req,res,next)=>{
    User.findByIdAndUpdate(req.params.image, {$set: req.body},{new:true})
    .then((user)=>{
        user.image = req.file.filename;
        user.save(),
        res.status(201).json(user);


    }).catch((err)=> next(err))
}

const register =(req, res,next)=>{
    // User.create(req.body)
    // .then(s=>res.status(201).json(s))
    // .catch(err=>next(err))

    const {firstName, secondName,phoneNumber,username,password,batch, course,role} = req.body

    User.findOne({username:username})
    .then((user)=>{
        if(user != null){
            let err = new Error(`user ${username} already exists`)
            res.status(400)
            return next(err)
        }
        else{
            bcrypt.hash(password,10,(err,hash)=>{
                if(err){
                    return next(err)
                }else{
                    user = new User()
                    user.username = username,
                    user.password = hash;
                    if(role) user.role = role
                    user.save().then((user)=>{
                        res.status(201).json({"replay":"User Registration Successful",
                    userId: user._id,
                    username: user.username,
                    role:user.role
                    })
                    })
                    
                }
            })

        }
    }).catch(next)
}


const deleteAllUser = (req,res,next)=>{
    User.deleteMany()
    .then(reply=> res.json(reply))
    .catch(err=> next(err))
}

const getAUserById=(req,res,next)=>{
    User.findById(req.params.id)
    .populate('batch')
    // .populate('courses')
    .then(reply=> res.json(reply))
    .catch(next)
}

const updateAUserById=(req,res,next)=>{
    User.findByIdAndUpdate(req.params.id,{$set: req.body})
    .then(user=> res.json(user))
    .catch(next)
}

const deleteById = (req,res,next)=>{
    User.findByIdAndDelete(req.params.id)
    .then(user=> res.json(user))
    .catch(next)
}

module.exports = {
    getAllUser,
    login,
    register,
    deleteAllUser,
    getAUserById,
    updateAUserById,
    deleteById,
    uploadImage
}

