import React, { useContext, useEffect, useState } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../Store/store';
import { fetchData } from '../Services/fetchData';
import { postsEndpoint , LIMIT} from '../Constants/constants';
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
    store.setVisited(item);
    setSelectedPost(item);
  };

  const onDismissClick = (event: Event, id: string) => {
    const selectedPostId = selectedPost.data.id;
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

  const clickNextPage = () => {
    fetchData(`${postsEndpoint}count=${store.count}&after=${store.after}`, getPosts);
    store.setCount(LIMIT);
  }

  const clickPreviousPage = () => {
    fetchData(`${postsEndpoint}count=${store.count}&before=${store.before}`, getPosts);
    store.setCount(-LIMIT);
  }

  const renderButtons = () => {
    if (store.before) {
      return (
        <React.Fragment>
          <ArrowButton title="Previous" direction="left" handleClick={clickPreviousPage} />
          <ArrowButton title="Next" direction="right" handleClick={clickNextPage} style={{ width: '130px' }} />
        </React.Fragment>
      );
    } else {
      return <ArrowButton title="Next" direction="right" handleClick={clickNextPage} style={{ width: '130px' }} />;
    }
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
