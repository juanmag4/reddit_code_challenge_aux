import React, { useContext, useEffect, useState } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../Store/store';
import { fetchData } from '../Services/fetchData';
import { LIMIT } from '../Constants/constants';
import { ArrowButton } from './ArrowButton';
import ListItem from './ListItem';
import Post from './Post';
import List from './List';

const Dashboard = () => {
  const store: any = useContext(StoreContext);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = (data: any) => {
    const { posts, after, before } = data;
    store.addPosts(posts);
    store.setPagination(after, before);
    setSelectedPost(posts[0]);
  }

  const fetchPosts = () => {
    fetchData(`${process.env.REACT_APP_API_URL}&count=0`, getPosts);
  };

  const onItemClick = (id: number) => {
    const item = store.posts.find((post: any) => (post.id === id));
    store.setVisited(item);
    setSelectedPost(item);
  };

  const onDismissClick = (event: Event, id: string) => {
    const selectedPostId = selectedPost.id;
    event.stopPropagation();
    store.dismissPost(id);

    if (id === selectedPostId) {
      setSelectedPost(store.posts[0])
    }
  }

  const renderList = () => {
    return (
      <List>
        {store.posts.map((post: any) =>
          <ListItem
            key={post.id}
            post={post}
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

  const clickNextPage = () => {
    fetchData(`${process.env.REACT_APP_API_URL}count=${store.count}&after=${store.after}`, getPosts);
    store.setCount(LIMIT);
  }

  const clickPreviousPage = () => {
    fetchData(`${process.env.REACT_APP_API_URL}count=${store.count}&before=${store.before}`, getPosts);
    store.setCount(-LIMIT);
  }

  const renderButtons = () => {
    return (
      <React.Fragment>
        {store.before &&
          <ArrowButton title="Previous" direction="left" handleClick={clickPreviousPage} />
        }
        <ArrowButton title="Next" direction="right" handleClick={clickNextPage} style={{ width: '130px' }} />
      </React.Fragment>
    )
  }

  return useObserver(() => (
    <div>
      <div bp="padding-bottom--lg">
        {renderButtons()}
      </div>
      <div bp="grid">
        <div bp="4">
          {renderList()}
        </div>
        <div bp="8">{renderPost()}</div>
      </div>
    </div>
  ));
};

export default Dashboard;
