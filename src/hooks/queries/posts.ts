import { useQuery } from '@tanstack/react-query';

import QUERIES_KEY from '@/constants/queries';
import APIS from '@/apis';

const useGetPosts = () =>
  useQuery([QUERIES_KEY.POSTS.getPosts], APIS.POSTS.getPosts, {
    staleTime: 6000,
    // cacheTime: 4000,
    // onError: () => {
    //   console.log('에러처리');
    // },
    // onSuccess: () => {
    //   console.log('성공처리');
    // },
  });
const useGetPostById = ({ id }: { id: number }) =>
  useQuery([QUERIES_KEY.POSTS.getPostById, id], () => APIS.POSTS.getPostById);

export const POSTS = {
  useGetPosts,
  useGetPostById,
};
