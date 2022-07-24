import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import CellSizePage from './pages/CellSize/CellSizePage';
import PackedPage from './pages/Packed/PackedPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchDevice } from './store/reducers/device/actionCreator';
import './styles/reset.css';
import './styles/fonts.css';
import GlobalStyles from './styles/globalStyles';
import { deviceSelector } from './store/reducers/device/deviceSelector';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import SuccessPage from './pages/Success/SuccessPage';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { device, isLoading, error } = useAppSelector(deviceSelector);

  const deviceId = location.pathname.split('').slice(1, 37).join('');

  useEffect(() => {
    dispatch(fetchDevice(deviceId));
  }, [device.uid]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Перевірте коректність введеного вами device_uid в адресі</h1>;
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/:device_uid' element={<HomePage />} />
        <Route path='/:device_uid/packed' element={<PackedPage />} />
        <Route path='/:device_uid/packed/cells' element={<CellSizePage />} />
        <Route
          path='/:device_uid/packed/cells/success'
          element={<SuccessPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
