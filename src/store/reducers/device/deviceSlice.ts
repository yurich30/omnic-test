import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Device, DeviceCell } from '../../../types/device';

interface DeviceState {
  device: Device;
  device_cells: Array<DeviceCell>;
  isLoading: boolean;
  error: string;
}

const initialState: DeviceState = {
  device: {
    device: '',
    name: '',
    type: null,
    partner_type: null,
    location: {
      country: null,
      country_name: '',
      region: '',
      name: '',
      address: '',
      postal: '',
      latitude: '',
      longitude: '',
      working_hours: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
      },
      uid: '',
    },
    description: '',
    point_code: null,
    is_online: false,
    uid: '',
  },
  device_cells: [],
  isLoading: false,
  error: '',
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    deviceFetching: state => {
      state.isLoading = true;
    },
    deviceFetchingSuccess: (state, action: PayloadAction<Device>) => {
      state.isLoading = false;
      state.device = action.payload;
    },
    deviceFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addDeviceUidFromUrl: (state, action: PayloadAction<string>) => {
      state.device.uid = action.payload;
    },
  },
});

export const {
  deviceFetching,
  deviceFetchingSuccess,
  deviceFetchingError,
  addDeviceUidFromUrl,
} = deviceSlice.actions;

export default deviceSlice.reducer;
