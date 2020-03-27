import { ReactNode } from "react";

export type ProviderProp = {
  children: ReactNode
}

export interface Post {
  title: string,
  author: string,
  url: string,
  thumbnail: string,
  num_comments: number,
  created_utc: number
}

export interface PostsStore {
  posts: Post[],
  addPosts: Function
}
