import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import List from '../List';
import ListItem from '../ListItem';
import { StoreContext } from '../../Store/store';
import { Post as PostInterface } from '../../Constants/interfaces';

const LeftSideList = () => {
  const store: any = useContext(StoreContext);

  const onItemClick = (post: PostInterface) => {
    store.selectPost(post);
  };

  const onDismissClick = (event: Event, id: string) => {
    const selectedPostId = store.selectedPost.id;
    event.stopPropagation();
    store.dismissPost(id);

    if (id === selectedPostId) {
      store.selectPost(store.posts[0])
    }
  }
  
  return useObserver(() => (
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
  ));
};

export default LeftSideList;
