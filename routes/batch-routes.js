const express = require("express")
const batchController = require("../controller/batch-controller")
const router = express.Router()
const auth = require("../middleware/auth")


router.route("/")
.get(auth.verifyAdmin,batchController.getAllBatch)
.post(auth.verifyAdmin,batchController.createABatch)
.delete(auth.verifyAdmin,batchController.createABatch)
.put((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})

router.route("/:id")
.get(auth.verifyAdmin,batchController.getABatchById)
.post((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})
.delete(auth.verifyAdmin,batchController.deleteBatchById)
.put(auth.verifyAdmin,batchController.updateABatchById)



module.exports = router