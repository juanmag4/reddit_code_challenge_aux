import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';
import { ProviderProp, Post, PostsStore } from '../Constants/interfaces';
import { LIMIT } from '../Constants/constants';

export const StoreContext = createContext({});

const StoreProvider = (props: ProviderProp) => {
  const { children } = props;
  const store: PostsStore = useLocalStore(() => ({
    posts: [],
    after: '',
    before: '',
    count: LIMIT,
    addPosts: (posts: Post[]) => {
      store.posts = posts
    },
    setPagination: (after: string, before: string) => {
      store.after = after;
      store.before = before;
    },
    setCount: (count: number) => {
      store.count+= count;
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
