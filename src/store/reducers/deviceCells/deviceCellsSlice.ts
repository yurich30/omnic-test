import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeviceCell } from '../../../types/device';

interface DeviceCellsState {
  deviceCells: Array<DeviceCell>;
  isLoading: boolean;
  error: string;
}

const initialState: DeviceCellsState = {
  deviceCells: [],
  isLoading: false,
  error: '',
};

const deviceSlice = createSlice({
  name: 'deviceCells',
  initialState,
  reducers: {
    cellFetching: state => {
      state.isLoading = true;
    },
    cellFetchingSuccess: (state, action: PayloadAction<Array<DeviceCell>>) => {
      state.isLoading = false;
      state.deviceCells = action.payload;
    },
    cellFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { cellFetching, cellFetchingSuccess, cellFetchingError } =
  deviceSlice.actions;

export default deviceSlice.reducer;
