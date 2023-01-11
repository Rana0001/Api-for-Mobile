const express = require("express")
const userController = require("../controller/user-controller")
const router = express.Router()
const auth = require("../middleware/auth")
const upload = require("../middleware/upload")

router.route("/")
.get(auth.verifyUser,userController.getAllUser)
.delete(auth.verifyUser,userController.deleteAllUser)
.put((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})

router.route("/:id")
.get(auth.verifyUser,userController.getAUserById)
.put(auth.verifyUser,userController.updateAUserById)
.delete(auth.verifyUser,userController.deleteById)
.post((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})


router.route("/login")
.post(userController.login)

router.route("/register")
.post(userController.register)

router.put("/upload/:id",auth.verifyUser,upload.single("profile"),userController.uploadImage)

module.exports = router