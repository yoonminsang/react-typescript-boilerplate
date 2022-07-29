import * as S from './index.style';

import type { FC } from 'react';

interface Props {
  resetErrorBoundary: (...args: unknown[]) => void;
  error: Error;
}

const ErrorBoundaryPage: FC<Props> = ({ resetErrorBoundary, error }) => {
  // TODO: 에러 관리(슬렉, amplitude 등등)
  console.log('ErrorBoundaryPage error', error);
  return (
    <S.Wrapper>
      <h1>There was an error!</h1>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </S.Wrapper>
  );
};

export default ErrorBoundaryPage;
