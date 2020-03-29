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
  created_utc: number,
  id: string,
  visited: boolean
}

export interface PostsStore {
  posts: Post[],
  dismissedPosts: string[],
  after: string,
  before: string,
  count: number,
  addPosts: Function,
  setPagination: Function,
  dismissPost: Function
}

export interface ButtonProps {
  title: string,
  direction: string,
  style?: object,
  handleClick: Function
}
