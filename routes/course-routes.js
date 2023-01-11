const express = require('express')
const courseController = require("../controller/course-controller")
const router = express.Router()
const auth = require("../middleware/auth")


router.route("/")
.get(auth.verifyAdmin,courseController.getAllCourse)
.post(auth.verifyAdmin,courseController.createACourse)
.delete(auth.verifyAdmin,courseController.deleteAllCourse)
.put((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})

router.route("/:id")
.get(auth.verifyAdmin,courseController.getACourseById)
.post((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})
.delete(auth.verifyAdmin,courseController.deleteCourseById)
.put(auth.verifyAdmin,courseController.updateACourseById)


module.exports = router
