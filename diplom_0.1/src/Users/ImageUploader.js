import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [base64String, setBase64String] = useState(null);

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setBase64String(base64);
    const image = await convertToImage(base64);
    setImage(image);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const convertToImage = (base64String) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = base64String;
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
    });
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <input type="file" accept="image/jpeg" onChange={handleFileInputChange} />
      {image && (
        <div>
          <img src={image.src} alt="Uploaded image" />
          <p>Base64 string: {base64String}</p>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
