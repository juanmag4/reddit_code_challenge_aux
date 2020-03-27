import React from 'react';

const Post = (props: any) => {
  const openImage = () => {
    if (url) {
      window.open(url);
    }
  }
  
  const { title, author, url, thumbnail, num_comments } = props.post.data;
  return (
    <div className="ui card">
      <div className="content">
        <div className="right floated meta">14h</div>
        {author}
      </div>
      <div className="content">
        {title}
      </div>
      {thumbnail ? <div onClick={openImage} className="image">
        <img src={thumbnail} />
      </div> : <div></div>}
      <div className="content">
        <i className="comment icon"></i>
        {num_comments} comments
      </div>
    </div>
  );
}

export default Post;
