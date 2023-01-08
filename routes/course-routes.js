const express = require('express')
const courseController = require("../controller/course-controller")
const router = express.Router()

router.route("/")
.get(courseController.getAllCourse)
.post(courseController.createACourse)
.delete(courseController.deleteAllCourse)
.put((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})

router.route("/:id")
.get(courseController.getACourseById)
.post((req,res,next)=>{
    res.status(501).json({"msg":"Not Implemented"})
})
.delete(courseController.deleteCourseById)
.put(courseController.updateACourseById)


module.exports = router
