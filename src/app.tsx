import { css, Theme } from '@emotion/react';
import { useState } from 'react';

import media from './styles/media';

import type { FC } from 'react';

const SApp = (theme: Theme) => css`
  color: ${theme.colorBlue50};
  ${media.xxlarge} {
    font-size: 50px;
  }
  ${media.xlarge} {
    font-size: 50px;
  }
  ${media.large} {
    font-size: 40px;
  }
  ${media.medium} {
    font-size: 30px;
  }
  ${media.small} {
    font-size: 20px;
  }
  ${media.xsmall} {
    font-size: 10px;
  }
`;

const App: FC = () => {
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

export default App;
