const express = require("express")
const studentController = require("../controller/user-controller")
const router = express.Router()


router.route("/")
.get(studentController.getAllUser)
.post(studentController.createAUser)
.delete(studentController.deleteAllUser)
.put((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})

router.route("/:id")
.get(studentController.getAUserById)
.put(studentController.updateAUserById)
.delete(studentController.deleteById)
.post((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})


module.exports = router