import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ShowErrorBoundaryPage from './pages-ex/show-error-boundary.page';
import Home from './pages';
import Ex from './components/ex';
import Custom404 from './pages/error/404';
import HookFormPage from './pages-ex/hook-form.page';
import ReactQueryPage from './pages-ex/react-query.page';
import { UTILS } from './utils';

import type { FC } from 'react';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${UTILS.COMMON.url}`} element={<Home />} />
        <Route path={`${UTILS.COMMON.url.ex['error-boundary']}`} element={<ShowErrorBoundaryPage />} />
        <Route path={`${UTILS.COMMON.url.ex['hook-form']}`} element={<HookFormPage />} />
        <Route path={`${UTILS.COMMON.url.ex['react-query']}`} element={<ReactQueryPage />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
      <Ex />
    </BrowserRouter>
  );
};

export default App;
