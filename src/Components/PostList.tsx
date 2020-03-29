import React, { useEffect, useContext } from 'react';
import { useObserver } from 'mobx-react';
import Post from './Post';
import { fetchData } from '../Services/fetchData';
import { LIMIT } from '../Constants/constants';
import { StoreContext } from '../Store/store';

const PostList = () => {
  const store: any = useContext(StoreContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = (data: any) => {
    const { children, after, before } = data.data;
    store.addPosts(children);
    store.setPagination(after, before);
  }

  const fetchPosts = () => {
    fetchData(`${process.env.REACT_APP_API_URL}`, getPosts);
  };

  const clickNextPage = () => {
    fetchData(`${process.env.REACT_APP_API_URL}count=${store.count}&after=${store.after}`, getPosts);
    store.setCount(LIMIT);
  }

  const clickPreviousPage = () => {
    fetchData(`${process.env.REACT_APP_API_URL}count=${store.count}&before=${store.before}`, getPosts);
    store.setCount(-LIMIT);
  }

  const renderPosts = () => {
    return store.posts.map((post: any) => (<Post key={post.id} post={post} />));
  }

  const renderButtons = () => {
    if (store.before) {
      return (
        <React.Fragment>
          <button className="ui button" onClick={clickPreviousPage}>Previous Page</button>
          <button className="ui button" onClick={clickNextPage}>Next Page</button>
        </React.Fragment>
      );
    } else {
      return <button className="ui button" onClick={clickNextPage}>Next Page</button>;
    }
  }

  return useObserver(() => (
    <div>
      {renderPosts()}
      <div>
        {renderButtons()}
      </div>
    </div >
  ));
};

export default PostList;
