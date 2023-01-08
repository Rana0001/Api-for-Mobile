const express = require("express")
const batchController = require("../controller/batch-controller")
const router = express.Router()

router.route("/")
.get(batchController.getAllBatch)
.post(batchController.createABatch)
.delete(batchController.createABatch)
.put((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})

router.route("/:id")
.get(batchController.getABatchById)
.post((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})
.delete(batchController.deleteBatchById)
.put(batchController.updateABatchById)



module.exports = router