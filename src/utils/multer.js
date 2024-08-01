//sirve para guardar archivos en el disco.

const multer = require('multer');
const { dirname }=require('node:path')

const storage = multer.diskStorage({
    destination: (req , file, callback)=>{
        callback(null, dirname(__dirname) + '/public/img')
    },
    //agregar el date.now a fle.originalname//
    filename: (req , file ,cb)=>{
        cb(null ,file.originalname)
    }
});

const uploader =multer({storage})

module.exports= {uploader}
