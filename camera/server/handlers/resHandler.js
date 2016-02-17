const cv = require('opencv')
const base64 = require('node-base64-image')

function faceDetection(req, res, next) {
  var imageData = req.body.imageData.image.replace(/^data:image\/jpeg;base64,/, "");
  var image = new Buffer(imageData, 'base64');
  var options = {
    filename: 'img/image'
  };

  base64.base64decoder(image, options, function(err, saved) {
    if (err) {
      res.status(500).send(err);
      return next();
    } else {
      cv.readImage(image, function(err, im) {
        if (im) {
          im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
            if (faces) {
              console.log(faces)
              res.status(200).send(faces)
              return next();
            }
          });
        }
      })
    }
  });
}

module.exports.faceDetection = faceDetection;
