import * as S from './error.style';

import type { FC } from 'react';

interface Props {
  resetErrorBoundary: (...args: unknown[]) => void;
}

const Error: FC<Props> = ({ resetErrorBoundary }) => {
  return (
    <S.Wrapper>
      <h1>There was an error!</h1>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </S.Wrapper>
  );
};

export default Error;
