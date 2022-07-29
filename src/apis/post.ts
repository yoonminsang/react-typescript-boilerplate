import { IPost } from '@/types/apis/posts';

import request from './core/request';

const getPosts = () => request<IPost[]>({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts' });
const getPostById = (id: number) =>
  request<IPost>({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts/:id', param: { id } });
const postPost = (post: Omit<IPost, 'id'>) =>
  request<void, Omit<IPost, 'id'>>({ method: 'POST', url: 'https://jsonplaceholder.typicode.com/posts', body: post });

export const POSTS = {
  getPosts,
  getPostById,
  postPost,
};
