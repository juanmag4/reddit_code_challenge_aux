import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { toast } from 'react-toastify';
import { StoreContext } from '../../Store/store';
import { saveImage } from '../../Services/service';
import Post from '../Post';

const RightSidePost = () => {
  const store: any = useContext(StoreContext);

  const onAddToGallery = (imageUrl: string) => {
    saveImage(process.env.REACT_APP_API_URL_IMAGES, imageUrl, handleSaveImage, handleError)
  }

  const handleError = (error: Error) => {
    toast.error(error.message)
  }

  const handleSaveImage = (data: any) => {
    if (data.code === 200) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  }

  return useObserver(() => {
    if (store.selectedPost) {
      return <Post post={store.selectedPost} handleAddToGallery={onAddToGallery} />
    } else {
      return <div>Loading!!</div>;
    }
  });
};

export default RightSidePost;
