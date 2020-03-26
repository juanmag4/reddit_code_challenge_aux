import React from 'react';

const Post = (props: any) => {
  const { title } = props.post.data;
  return (
    <div>{title}</div>
  );
}

export default Post;
