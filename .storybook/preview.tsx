import GlobalStyle from '@/styles/global-style';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { DecoratorFn } from '@storybook/react';

export const decorators: DecoratorFn[] = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
