import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ShowErrorBoundaryPage from './pages-ex/show-error-boundary.page';
import Home from './pages';
import Ex from './components/ex';
import { URL } from './utils/common';
import Custom404 from './pages/error/404';
import HookFormPage from './pages-ex/hook-form.page';

import type { FC } from 'react';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${URL}`} element={<Home />} />
        <Route path={`${URL.ex['error-boundary']}`} element={<ShowErrorBoundaryPage />} />
        <Route path={`${URL.ex['hook-form']}`} element={<HookFormPage />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
      <Ex />
    </BrowserRouter>
  );
};

export default App;
