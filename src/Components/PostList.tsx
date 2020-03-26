import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    let result = await axios.get('https://www.reddit.com/top.json?limit=50&count=0');
    setPosts(result.data.data.children);
  };

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <div>
      {posts.map((post: any) => (<Post key={post.data.id} post={post} />))}
    </div>
  );
};

export default PostList;
