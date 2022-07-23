import { css, Theme } from '@emotion/react';

export const ScrollStyle = (theme: Theme) => css`
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 4px;
    background-color: ${theme.colorGray40};
    border: 2px solid white;

    &:hover {
      background-color: ${theme.colorGray30};
    }
    &:active {
      background-color: ${theme.colorGray20};
    }
  }
`;
