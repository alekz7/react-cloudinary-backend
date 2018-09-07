const mongoose = require('mongoose');
const {Schema} = mongoose;

const photoSchema = new Schema({
  imgPath: String
},{
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

let Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;
