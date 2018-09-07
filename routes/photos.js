const Photo = require('../models/PhotosModel');
const uploadCloud = require('../config/cloudinary');

module.exports = app => {
  app.post('/photo/add',
    uploadCloud.single('photo'),
    (req,res,next) => {

    const imgPath = req.file.url;
    const newPhoto = new Photo({imgPath});

    newPhoto.save()
      .then(e =>{
        res.json({
          sucess: true,
          pictureUrl: req.file.url
        })
      })
      .catch(error =>{
        console.log(error);
      })
  })
}
