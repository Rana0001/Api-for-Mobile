const path = require('path')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"./assets/uploads")
    },
    filename:(req,file,cb)=>{
        let ext = path.extname(file.originalname)
        cb(null,`${file.filename}-${Date.now()}${ext}`)
    }
})

const imagefileFilter = (req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|Svg)$/)){
        return cb(new Error("You can upload only image files"),false)

    }
    cb(null,true)
}

const uploadImage = multer({storage:storage, fileFilter:imagefileFilter,limits:{fieldSize:1024*1024*2}})


module.exports = upload