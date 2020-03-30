import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';
import { ProviderProp, Post, PostsStore } from '../Constants/interfaces';
import { LIMIT } from '../Constants/constants';

export const StoreContext = createContext({});

const StoreProvider = ({ children }: ProviderProp) => {
  const store: PostsStore = useLocalStore(() => ({
    posts: [],
    selectedPost: null,
    dismissedPosts: [],
    after: '',
    before: '',
    count: LIMIT,
    savedImages: [],
    addPosts: (posts: Post[]) => {
      store.posts = posts
    },
    selectPost: (selectedPost: Post) => {
      store.posts.find((post: Post) => post.id === selectedPost.id).visited = true;
      store.selectedPost = selectedPost;
      store.posts = [...store.posts];
    },
    setPagination: (after: string, before: string) => {
      store.after = after;
      store.before = before;
    },
    setCount: (count: number) => {
      store.count+= count;
    },
    dismissPost: (id: string) => {
      store.dismissedPosts.push(id);
      store.posts = store.posts.filter((post: Post) => !(id === post.id));
    },
    setImages: (images: string[]) => {
      store.savedImages = images;
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
