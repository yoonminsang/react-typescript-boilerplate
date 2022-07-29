import styled from '@emotion/styled';
import { FC, Suspense } from 'react';

import RQ from '@/hooks/queries';
import { IPost } from '@/types/apis/posts';

const PostsLoading: FC = () => {
  return <div>로딩중...</div>;
};

type PostProps = IPost;
const PostWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colorGray10};
  border-radius: 10px;
  h3 {
    ${(props) => props.theme.titleM}
  }
  body {
    ${(props) => props.theme.bodyM}
  }
`;
const Post: FC<PostProps> = ({ title, body }) => {
  return (
    <PostWrapper>
      <h3>{title}</h3>
      <div className="body">{body}</div>
    </PostWrapper>
  );
};

const PostsWrapper = styled.div`
  h2 {
    ${(props) => props.theme.titleL}
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
const Posts: FC = () => {
  const { data: posts } = RQ.POSTS.useGetPosts();

  if (!posts || posts.length === 0) return <div>글이 존재하지 않습니다</div>;
  return (
    <PostsWrapper>
      <h2>글 목록</h2>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </PostsWrapper>
  );
};

const ReactQueryPageWrapper = styled.div`
  margin: 10px;
  h1 {
    ${(props) => props.theme.headingM}
  }
`;
const ReactQueryPage: FC = () => {
  const { isLoading, isError, mutate } = RQ.POSTS.usePostPost({ title: 'title', body: 'body', userId: 1 });
  console.log('mutation', isLoading, isError);
  return (
    <ReactQueryPageWrapper>
      <h1>리액트쿼리 페이지</h1>
      <button type="button" onClick={() => mutate()}>
        post 버튼
      </button>
      <Suspense fallback={<PostsLoading />}>
        <Posts />
      </Suspense>
    </ReactQueryPageWrapper>
  );
};

export default ReactQueryPage;
