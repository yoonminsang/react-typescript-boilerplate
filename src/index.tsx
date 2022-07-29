import { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';

import App from './app';
import { ToastStyle } from './styles/toast.style';
import { Loader } from './components/common';
import { GlobalStyle, theme } from './styles';
import ErrorBoundaryPage from './pages/error/error-boundary';
import { handleError } from './utils/errors';

ReactDOM.createRoot(window.document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: 1,
              suspense: true,
              useErrorBoundary(err) {
                if (!axios.isAxiosError(err)) return true;
                if (err.response?.status && err.response.status >= 500) return true;
                return false;
              },
              onError: handleError,
            },
          },
        })
      }
    >
      <ReactQueryDevtools />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary, error }) => (
              <ErrorBoundaryPage resetErrorBoundary={resetErrorBoundary} error={error} />
            )}
          >
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
    <ToastContainer
      css={ToastStyle}
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />
  </ThemeProvider>,
);
