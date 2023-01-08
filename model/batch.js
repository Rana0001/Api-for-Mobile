const mongoose = require("mongoose")

const Batch = mongoose.Schema({
    batchName:{
        type:String,
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    }
    

})




module.exports = mongoose.model("Batch",Batch)