import React, { useContext, useEffect } from 'react';
import { useObserver } from 'mobx-react';
import { toast } from 'react-toastify';
import { StoreContext } from '../../Store/store';
import { fetchData } from '../../Services/service';
import PaginationButtons from './PaginationButtons';
import LeftSideList from './LeftSideList';
import RightSidePost from './RightSidePost';

const Dashboard = () => {
  const store: any = useContext(StoreContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = (data: any) => {
    const { posts, after, before } = data;
    store.addPosts(posts);
    store.setPagination(after, before);
    store.selectPost(posts[0]);
  }

  const handleError = (error: Error) => {
    toast.error(error.message)
  }

  const fetchPosts = () => {
    fetchData(`${process.env.REACT_APP_API_URL}&count=0`, getPosts, handleError);
  };

  return (
    <div>
      <div bp="padding-bottom--lg">
        <PaginationButtons />
      </div>
      <div bp="grid">
        <div bp="4">
          <LeftSideList />
        </div>
        <div bp="8">
          <RightSidePost />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
