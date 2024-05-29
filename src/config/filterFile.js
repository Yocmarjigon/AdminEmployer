import multer from "multer"




let storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split('.')[1]
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
  }
})




const fileFilter = (req, file, cb) => {
  console.log(file)
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter }).single('file');
const uploadMiddleware = (req, res, next) => {
  upload(req, res, function (err) {

    if (!req.file) {
      return res.status(400).send({ error: "Only PDF format allowed" });
    }


    next();
  })

};

export {
  storage
  , fileFilter,
  uploadMiddleware
}
