import React from 'react'
import { GoDownload } from "react-icons/go";
const Img = ({ generatedImages }) => {
  return (
    <div id="img_area">
      {Array.isArray(generatedImages) &&
        generatedImages.map((image, index) => (
          <div key={index} className="img">
            <img src={image} alt={`Generated Image ${index}`} /> 
            <a className="icon" href = {image} download="image"target="_blank"><GoDownload /></a>
          </div>
        ))}
    </div>
  );
};


export default Img