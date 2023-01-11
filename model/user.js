const mongoose = require("mongoose")

const User = mongoose.Schema({
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
    image:{
        type:String,
    },
    batch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Batch"
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }],

    role:{
        type: String,
        enum:['Admin','User'],
        default:'User',
    }
    

})




module.exports = mongoose.model("User",User)