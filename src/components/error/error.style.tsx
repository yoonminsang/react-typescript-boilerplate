import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  h1 {
    ${(props) => props.theme.displayS}
  }
  button {
    ${(props) => props.theme.bodyL}
  }
`;
