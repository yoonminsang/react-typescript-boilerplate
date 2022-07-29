import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import QUERIES_KEY from '@/constants/queries';
import APIS from '@/apis';
import { IPost } from '@/types/apis/posts';

const useGetPosts = () =>
  useQuery([QUERIES_KEY.POSTS.getPosts], APIS.POSTS.getPosts, {
    staleTime: 60000,
    // cacheTime: 4000,
    // onError: () => {
    //   console.log('에러처리');
    // },
    // onSuccess: () => {
    //   console.log('성공처리');
    // },
  });
const useGetPostById = ({ id }: { id: number }) =>
  useQuery([QUERIES_KEY.POSTS.getPostById, id], () => APIS.POSTS.getPostById(id));
const usePostPost = (post: Omit<IPost, 'id'>) => {
  const queryClient = useQueryClient();
  return useMutation(() => APIS.POSTS.postPost(post), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERIES_KEY.POSTS.getPosts]);
      toast.success('글 저장 성공');
    },
    onError: () => {
      toast.error('글 저장 실패');
    },
  });
};

export const POSTS = {
  useGetPosts,
  useGetPostById,
  usePostPost,
};
