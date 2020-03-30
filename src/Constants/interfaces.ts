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

export interface PostComponentProps {
  post: Post,
  handleAddToGallery?: Function
}

export interface PostsStore {
  posts: Post[],
  selectedPost: Post,
  dismissedPosts: string[],
  after: string,
  before: string,
  count: number,
  savedImages: string[],
  selectPost: Function,
  addPosts: Function,
  setPagination: Function,
  dismissPost: Function,
  setImages: Function
}

export interface ButtonProps {
  title: string,
  direction: string,
  style?: object,
  handleClick: Function
}

export interface ImageProps {
  imageUrl: string,
  handleImageClick?: Function
}
