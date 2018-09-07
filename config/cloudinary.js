require('dotenv').config({path: '../'});

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: '/ironhack',
  allowed_formats: ['jpg', 'png'],
  filename: function(req,file,cb){
    cb(null,file.originalname);
  }
});

const uploadCloud = multer({storage : storage});

module.exports = uploadCloud;
