import { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { ErrorBoundary } from 'react-error-boundary';

import App from './app';
import { Error } from './components/error';
import GlobalStyle from './styles/global-style';
import theme from './styles/theme';
import { Loader } from './components/common';

ReactDOM.createRoot(window.document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ErrorBoundary fallbackRender={({ resetErrorBoundary }) => <Error resetErrorBoundary={resetErrorBoundary} />}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </ThemeProvider>,
);
