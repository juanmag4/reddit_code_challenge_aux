import React from 'react';
import moment, { Moment } from 'moment';
import { calculateTime } from '../Helpers/postHelper';

const Post = (props: any) => {
  const { title, author, url, thumbnail, num_comments, created_utc } = props.post;

  const openImage = () => {
    if (url) {
      window.open(url);
    }
  }

  const getTimeAgo = () => {
    const postDate: Moment = moment.utc(created_utc * 1000);
    const currentDate: Moment = moment();
    const timeAgo: number = currentDate.diff(postDate, 'minute');

    return calculateTime(timeAgo);
  }

  const getDate = () => {
    return moment.utc(created_utc * 1000).toLocaleString();
  }
  
  return (
    <div className='ui card' style={{ width: 'auto', maxWidth: '550px' }}>
      <div className='content'>
        <div className='right floated meta' title={getDate()}>{getTimeAgo()}</div>
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
