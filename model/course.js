const mongoose = require("mongoose")

const Course = mongoose.Schema({
    courseName:{
        type:String,

    },
    student:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    }]

})




module.exports = mongoose.model("Course",Course)