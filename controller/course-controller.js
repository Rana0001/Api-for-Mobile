const Course = require("../model/course")

const getAllCourse = (req,res,next)=>{
    Course.find()
    .then(c => res.json(c))
    .catch(err => next(err))
}

const createACourse = (req,res,next)=>{
    Course.create(req.body)
    .then(c=>res.status(201).json(c))
    .catch(err=>next(err))
}

const deleteAllCourse = (req,res,next)=>{
    Course.deleteMany()
    .then(reply=>res.json(reply))
    .catch(err=> next(err))
}


const getACourseById=(req,res,next)=>{
    Course.findById(req.params.id)
    .populate('student')
    // .populate('courses')
    .then(reply=> res.json(reply))
    .catch(next)
}

const updateACourseById=(req,res,next)=>{
    Course.findByIdAndUpdate(req.params.id,{$set: req.body})
    .then(course=> res.json(course))
    .catch(next)
}

const deleteCourseById = (req,res,next)=>{
    Course.findByIdAndDelete(req.params.id)
    .then(course=> res.json(course))
    .catch(next)
}


module.exports = {
    getAllCourse,
    createACourse,
    deleteAllCourse,
    getACourseById,
    updateACourseById,
    deleteCourseById
}
