import React from 'react';
import { ImageProps } from '../Constants/interfaces';

const Image = ({ imageUrl, handleImageClick }: ImageProps) => {
  return (
    <img
      className="ui medium bordered fluid image"
      src={imageUrl}
      onClick={() => { handleImageClick(imageUrl) }}
    />
  );
};

export default Image;
