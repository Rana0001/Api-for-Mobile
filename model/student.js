const mongoose = require("mongoose")

const Student = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    secondName:{
        type:String,
        required:true

    },
    phoneNumber:{
        type:String,
        required:true

    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    batch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Batch"
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]

    

})




module.exports = mongoose.model("Student",Student)