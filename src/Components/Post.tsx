import React from 'react';
import { getTimeAgo, getDate } from '../Utils/timeUtil';
import { PostComponentProps } from '../Constants/interfaces';

const Post = (props: PostComponentProps) => {
  const { title, author, url, thumbnail, num_comments, created_utc } = props.post;
  const { handleAddToGallery } = props;

  const openImage = () => {
    if (url) {
      window.open(url);
    }
  }
  
  return (
    <div className='ui card' style={{ width: 'auto', maxWidth: '550px' }}>
      <div className='content'>
        <div className='right floated meta' title={getDate(created_utc)}>{getTimeAgo(created_utc)}</div>
        {author}
      </div>
      <div className='content'>
        {title}
      </div>
      {thumbnail != 'default' ? <div onClick={openImage} className='image'>
        <img src={thumbnail} />
      </div> : <div></div>}
      <div className='content'>
        <i className='comment icon'></i>
        {num_comments} comments
        <button className="right floated ui button" onClick={() => { handleAddToGallery(url) }}>Add to Gallery</button>
      </div>
    </div>
  );
}

export default Post;
