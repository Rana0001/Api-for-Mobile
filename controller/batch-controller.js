const Batch = require("../model/batch")

const getAllBatch = (req,res,next)=>{
    Batch.find()
    .then(b => res.json(b))
    .catch(err => next(err))
}

const createABatch = (req,res,net)=>{
    Batch.create(req.body)
    .then(b=>res.status(201).json(b))
    .catch(err=>next(err))
}

const deleteAllBatch = (req,res,next)=>{
    Batch.deleteMany()
    .then(reply=>res.json(reply))
    .catch(err=> next(err))
}


const getABatchById=(req,res,next)=>{
    Batch.findById(req.params.id)
    .populate('student')
    // .populate('courses')
    .then(reply=> res.json(reply))
    .catch(next)
}

const updateABatchById=(req,res,next)=>{
    Batch.findByIdAndUpdate(req.params.id,{$set: req.body})
    .then(batch=> res.json(batch))
    .catch(next)
}

const deleteBatchById = (req,res,next)=>{
    Batch.findByIdAndDelete(req.params.id)
    .then(batch=> res.json(batch))
    .catch(next)
}


module.exports = {
    getAllBatch,
    createABatch,
    deleteAllBatch,
    getABatchById,
    updateABatchById,
    deleteBatchById,
}