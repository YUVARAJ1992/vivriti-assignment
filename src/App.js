import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LayoutPage from './pages/layout';
import PageNotFoundPage from './pages/page-not-found';

import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LayoutPage></LayoutPage>}></Route>

        <Route path='*' element={<PageNotFoundPage></PageNotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;