import { useQuery } from '@tanstack/react-query';

import QUERIES_KEY from '@/constants/queries';
import APIS from '@/apis';

const useGetPosts = () => useQuery([QUERIES_KEY.POSTS.getPosts], APIS.POSTS.getPosts);
const useGetPostById = ({ id }: { id: number }) =>
  useQuery([QUERIES_KEY.POSTS.getPostById, id], () => APIS.POSTS.getPostById);

export const POSTS = {
  useGetPosts,
  useGetPostById,
};
