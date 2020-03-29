import React from 'react';
import { getTimeAgo, getDate } from '../Utils/timeUtil';

const Post = (props: any) => {
  const { title, author, url, thumbnail, num_comments, created_utc } = props.post;

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
      </div>
    </div>
  );
}

export default Post;
