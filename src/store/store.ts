import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from './reducers/device/deviceSlice';
import deviceCellsReducer from './reducers/deviceCells/deviceCellsSlice';

export const store = configureStore({
  reducer: {
    deviceReducer,
    deviceCellsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
