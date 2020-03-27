import React, { useEffect, useState } from 'react';
import Post from './Post';
import { fetchData } from '../Services/fetchData';
import { postsEndpoint } from '../Constants/constants';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = (data: any) => {
    const { children } = data.data;
    setPosts(children);
  }

  const fetchPosts = () => {
    fetchData(postsEndpoint, getPosts);
  };

  useEffect(() => {
    fetchPosts()
  }, []);

  const renderPosts = () => {
    return posts.map((post: any) => (<Post key={post.data.id} post={post} />));
  }

  return (
    <div>
      {renderPosts()}
    </div>
  );
};

export default PostList;
