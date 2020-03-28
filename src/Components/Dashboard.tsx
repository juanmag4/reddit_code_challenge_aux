import React, { useContext, useEffect, useState } from 'react';
import { useObserver } from 'mobx-react';
import ListItem from './ListItem';
import { StoreContext } from '../Store/store';
import { fetchData } from '../Services/fetchData';
import { postsEndpoint } from '../Constants/constants';
import Post from './Post';
import List from './List';

const Dashboard = () => {
  const store: any = useContext(StoreContext);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = (data: any) => {
    const { children, after, before } = data.data;
    store.addPosts(children);
    store.setPagination(after, before);
    setSelectedPost(children[0]);
  }

  const fetchPosts = () => {
    fetchData(`${postsEndpoint}`, getPosts);
  };

  const onItemClick = (id: number) => {
    const item = store.posts.find((post: any) => (post.data.id === id));
    setSelectedPost(item);
  };

  const onDismissClick = (event: Event, id: string) => {
    const selectedPostId = selectedPost.data.id;
    event.stopPropagation();
    store.addDismissedPost(id);
    if (id === selectedPostId) {
      setSelectedPost(store.posts[0])
    }
  }

  const renderList = () => {
    return (
      <List>
        {store.posts.map((post: any) => 
          <ListItem
            key={post.data.id}
            post={post.data}
            handleClick={onItemClick}
            handleDismiss={onDismissClick}
          />
        )}
      </List>
    );
  };

  const renderPost = () => {
    if (selectedPost) {
      return <Post post={selectedPost} />
    } else {
      return <div>Loading!!</div>;
    }

  };

  return useObserver(() => (
    <div bp="grid">
      <div bp="4">{renderList()}</div>
      <div bp="8">{renderPost()}</div>
    </div>
  ));
};

export default Dashboard;
