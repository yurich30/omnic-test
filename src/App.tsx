import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import CellSizePage from './pages/CellSize/CellSizePage';
import PackedPage from './pages/Packed/PackedPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  const location = useLocation();

  console.log(location.pathname.split('').slice(1, 37).join(''));

  return (
    <Routes>
      <Route path='/:device_uid' element={<HomePage />} />
      <Route path='/:device_uid/packed' element={<PackedPage />} />
      <Route path='/:device_uid/packed/cellsize' element={<CellSizePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
