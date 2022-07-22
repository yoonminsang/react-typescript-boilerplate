import styled from '@emotion/styled';

import { TypoStyle } from '@/styles/common';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  h1 {
    ${TypoStyle.displayS}
  }
  button {
    ${TypoStyle.bodyL}
  }
`;
