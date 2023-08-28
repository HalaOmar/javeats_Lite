const multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
           destination: function(req, file, callback) {
               callback(null, 'uploads');
           },

           filename: function(req, file, callback) {
               var fname = file.fieldname + '-' + Date.now() + path.extname(file.originalname);

               callback(null, fname);

           }
       });

const uploader = multer({"storage" :storage})
module.exports = uploader.single('image')