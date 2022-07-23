import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorBoundaryPage from './pages-ex/error-boundary.page';
import Home from './pages';
import Ex from './components/ex';
import { URL } from './utils/common';

import type { FC } from 'react';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${URL}`} element={<Home />} />
        <Route path={`${URL.ex['error-boundary']}`} element={<ErrorBoundaryPage />} />
      </Routes>
      <Ex />
    </BrowserRouter>
  );
};

export default App;
