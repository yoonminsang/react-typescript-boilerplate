import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState } from 'react';

import { UTILS } from '@/utils';

import type { FC } from 'react';

const ExWrapper = styled.nav`
  position: fixed;
  top: 10px;
  right: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  height: 100vh;

  overflow: scroll;

  ${(props) => props.theme.scroll}

  button {
    color: ${(props) => props.theme.colorGreen70};
  }

  a {
    color: ${(props) => props.theme.colorGreen60};
    background-color: ${(props) => props.theme.colorGreen10};
    border-radius: 10px;
    padding: 10px;
  }
`;

const Ex: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <ExWrapper>
      <button type="button" onClick={() => setIsShow((isShow) => !isShow)}>
        {isShow ? '가리기' : '보여주기'}
      </button>
      {isShow && (
        <>
          <Link to={`${UTILS.COMMON.url}`}>홈</Link>
          <Link to={`${UTILS.COMMON.url.ex['error-boundary']}`}>에러 바운더리</Link>
          <Link to={`${UTILS.COMMON.url.ex['hook-form']}`}>훅 폼</Link>
          <Link to={`${UTILS.COMMON.url.ex['react-query']}`}>리액트 쿼리</Link>
        </>
      )}
    </ExWrapper>
  );
};

export default Ex;
