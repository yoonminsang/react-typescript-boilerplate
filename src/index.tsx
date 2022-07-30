import { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';

import App from './app';
import { Loader } from './components/common';
import { GlobalStyle, theme } from './styles';
import ErrorBoundaryPage from './pages/error/error-boundary';
import { rootReducer } from './store';
import { UTILS } from './utils';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDOM.createRoot(window.document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
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
                onError: UTILS.ERROS.handleError,
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
    </ThemeProvider>
  </Provider>,
);
