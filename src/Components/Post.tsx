import React from 'react';
import moment, { Moment } from 'moment';

const calculateTime = (minutes: number) => {
  let timeAgo: string = '';
  if (minutes < 60) {
    timeAgo = `${Math.trunc(minutes)} Minutes`;
  } else if (minutes > 60 && minutes < 1440) {
    timeAgo = `${Math.trunc(minutes / 60)} Hours`;
  } else {
    timeAgo = `${Math.trunc(minutes / 60 / 24)} Days`;
  }

  return `${timeAgo} ago`;
};

const Post = (props: any) => {
  const { title, author, url, thumbnail, num_comments, created_utc } = props.post.data;

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
  
  return (
    <div className='ui card'>
      <div className='content'>
        <div className='right floated meta'>{getTimeAgo()}</div>
        {author}
      </div>
      <div className='content'>
        {title}
      </div>
      {thumbnail ? <div onClick={openImage} className='image'>
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
