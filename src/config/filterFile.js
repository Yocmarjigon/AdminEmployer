import multer from "multer"

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.split('.')[1]
        cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
    },
    ti
})