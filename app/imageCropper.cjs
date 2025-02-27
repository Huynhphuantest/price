const fs = require('fs');
const sharp = require('sharp');

// Get command-line arguments
const inputImage = process.argv[2]; // The first argument is the input file
const outputImage = process.argv[3]; // The second argument is the output file (optional)
const replace = process.argv.includes('--replace'); // Check if '--replace' is passed

if (!inputImage) {
  console.log("Please provide the input image file name.");
  process.exit(1);
}

let finalOutput = replace ? inputImage : outputImage;
if(inputImage && !outputImage) {
  const arr = inputImage.split(".");
  finalOutput = `${arr[0]}-crop.${arr[arr.length - 1]}`
}

sharp(inputImage)
  .resize(500, 500, { fit: sharp.fit.contain, position: sharp.gravity.center }) // Crop from the center
  .toFile(finalOutput, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Image processed:', info);
      if (replace) {
        // Delete the original input image if replacing
        fs.unlink(inputImage, (err) => {
          if (err) {
            console.error('Error deleting original image:', err);
          } else {
            console.log('Original image deleted and replaced.');
          }
        });
      }
    }
  });