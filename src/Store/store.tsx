import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';
import { ProviderProp, Post, PostsStore } from '../Constants/interfaces';

export const StoreContext = createContext({});

const StoreProvider = (props: ProviderProp) => {
  const { children } = props;
  const store: PostsStore = useLocalStore(() => ({
    posts: [],
    addPosts: (posts: Post[]) => {
      store.posts = store.posts.concat(posts)
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
