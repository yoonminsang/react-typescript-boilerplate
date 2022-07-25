import { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';

import App from './app';
import { ToastStyle } from './styles/toast.style';
import { Loader } from './components/common';
import { GlobalStyle, theme } from './styles';
import ErrorBoundaryPage from './pages/error/error-boundary';

ReactDOM.createRoot(window.document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary }) => <ErrorBoundaryPage resetErrorBoundary={resetErrorBoundary} />}
    >
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ErrorBoundary>
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
