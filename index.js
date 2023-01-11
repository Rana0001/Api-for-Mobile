require('dotnet').config()
const express = require("express")
const userRoute = require("./routes/user-routes")
const batchRoute = require("./routes/batch-routes")
const courseRoute = require("./routes/course-routes")
const mongoose = require("mongoose")
const auth = require("./middleware/auth")
const app = express()
const port = 3001

mongoose.set('strictQuery',true)
mongoose.connect('mongodb://127.0.0.1:27017/college')
.then(()=>{
    console.log("Connected to Mongoose DataBase Server")
}).catch((err)=>console.log(err))


app.use(express.json());

// app.use("/", (req,res,next)=>{
//     res.status(201).json({"msg":"Welcome to HomePage"})
// })


app.listen(port,()=>{
    console.log(`App is running at ${port}`)
})


app.use("/student",userRoute)
app.use("/batch",auth.verifyAdmin,batchRoute)
app.use("/course",auth.verifyAdmin,courseRoute)


app.use((err,req,res,next)=>{
    if(res.statusCode == 200) res.status(500)
console.log(err)
res.status(500).json({"msg":err.messge})
})
    
