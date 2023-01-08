const Student = require("../model/student")



const getAllUser = (req,res,next)=>{
    Student.find()
    .then(s=> res.json(s))
    .catch(err=> next(err))
}

const createAUser =(req, res,next)=>{
    Student.create(req.body)
    .then(s=>res.status(201).json(s))
    .catch(err=>next(err))
}

const deleteAllUser = (req,res,next)=>{
    Student.deleteMany()
    .then(reply=> res.json(reply))
    .catch(err=> next(err))
}

const getAUserById=(req,res,next)=>{
    Student.findById(req.params.id)
    .populate('batch')
    // .populate('courses')
    .then(reply=> res.json(reply))
    .catch(next)
}

const updateAUserById=(req,res,next)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body})
    .then(student=> res.json(student))
    .catch(next)
}

const deleteById = (req,res,next)=>{
    Student.findByIdAndDelete(req.params.id)
    .then(student=> res.json(student))
    .catch(next)
}

module.exports = {
    getAllUser,
    createAUser,
    deleteAllUser,
    getAUserById,
    updateAUserById,
    deleteById,
}

