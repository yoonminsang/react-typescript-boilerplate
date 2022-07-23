import { css, Theme } from '@emotion/react';
import { useState } from 'react';

import type { FC } from 'react';

const SApp = (theme: Theme) => css`
  color: ${theme.colorBlue50};
  ${theme.xxlarge} {
    font-size: 60px;
  }
  ${theme.xlarge} {
    font-size: 50px;
  }
  ${theme.large} {
    font-size: 40px;
  }
  ${theme.medium} {
    font-size: 30px;
  }
  ${theme.small} {
    font-size: 20px;
  }
  ${theme.xsmall} {
    font-size: 10px;
  }
`;

const ErrorBoundaryPage: FC = () => {
  const [error, setError] = useState(false);
  if (error) throw new Error('err');
  return (
    <div css={SApp}>
      <h1>앱</h1>
      <button type="button" onClick={() => setError(true)}>
        에러내기
      </button>
    </div>
  );
};

export default ErrorBoundaryPage;
