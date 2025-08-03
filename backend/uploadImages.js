const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'ddklswqnr',            // Your Cloudinary cloud name
  api_key: '893527342789996',         // Your API key
  api_secret: 'FSDnMZ3GczT3Cqy3fxwcCRoA15k' // Your API secret
});

const folderPath = path.join(__dirname, 'images'); // Folder where your images are stored

// Upload all images in the folder
const uploadImages = async () => {
  try {
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      const filePath = path.join(folderPath, file);

      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'mis-website-menu'  // Optional: organize images in this Cloudinary folder
      });

      console.log(`${file} uploaded: ${result.secure_url}`);
    }
    console.log('✅ All images uploaded!');
  } catch (error) {
    console.error('Upload error:', error);
  }
};

uploadImages();
