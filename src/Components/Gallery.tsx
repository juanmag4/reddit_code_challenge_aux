import React, { useContext, useEffect } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../Store/store';
import { fetchData } from '../Services/service';
import Image from './Image';

const Gallery = () => {
  const store: any = useContext(StoreContext);
  useEffect(() => {
    fetchData(process.env.REACT_APP_API_URL_IMAGES, getImages);
  }, []);

  const getImages = (images: string[]) => {
    store.setImages(images);
  };

  const onImageClick = (imageUrl: string) => {
    window.open(imageUrl);
  };

  const renderImages = () => {
    if (store.savedImages.length) {
      return (
        <div bp="grid">
          {store.savedImages.map((imageUrl: string) => (
            <div bp="3">
              <Image imageUrl={imageUrl} handleImageClick={onImageClick} />
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No Saved Images.</div>;
    }
  }

  return useObserver(() => (
    renderImages()
  ));
};

export default Gallery;
