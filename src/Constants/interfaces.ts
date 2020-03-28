import { ReactNode } from "react";

export type ProviderProp = {
  children: ReactNode
}

export interface Post {
  data: {
    title: string,
    author: string,
    url: string,
    thumbnail: string,
    num_comments: number,
    created_utc: number
  }
}

export interface PostsStore {
  posts: Post[],
  dismissedPosts: string[],
  after: string,
  before: string,
  count: number,
  addPosts: Function,
  setPagination: Function,
  addDismissedPost: Function
}
