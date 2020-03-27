import React, { useEffect, useContext } from 'react';
import { useObserver } from 'mobx-react';
import Post from './Post';
import { fetchData } from '../Services/fetchData';
import { postsEndpoint } from '../Constants/constants';
import { StoreContext } from '../Store/store';

const PostList = () => {
  const store: any = useContext(StoreContext);

  const getPosts = (data: any) => {
    const { children } = data.data;
    store.addPosts(children);
  }

  const fetchPosts = () => {
    fetchData(postsEndpoint, getPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = () => {
    return store.posts.map((post: any) => (<Post key={post.data.id} post={post} />));
  }

  return useObserver(() => (
    <div>
      {renderPosts()}
    </div>
  ));
};

export default PostList;
