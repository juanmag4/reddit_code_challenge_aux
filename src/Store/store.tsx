import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';
import { ProviderProp, Post, PostsStore } from '../Constants/interfaces';
import { LIMIT } from '../Constants/constants';

export const StoreContext = createContext({});

const StoreProvider = (props: ProviderProp) => {
  const { children } = props;
  const store: PostsStore = useLocalStore(() => ({
    posts: [],
    dismissedPosts: [],
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
    },
    addDismissedPost: (id: string) => {
      store.dismissedPosts.push(id);
      store.posts = store.posts.filter((post: any) => !store.dismissedPosts.find(id => id === post.data.id));
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
