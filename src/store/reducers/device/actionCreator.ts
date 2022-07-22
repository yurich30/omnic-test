import { deviceHttp } from '../../../http/deviceHttp';
import { Device } from '../../../types/device';
import {
  deviceFetching,
  deviceFetchingError,
  deviceFetchingSuccess,
} from './deviceSlice';
import { AppDispatch } from '../../store';

export const fetchDevice =
  (deviceId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(deviceFetching());
      const res = await deviceHttp.get<Device, any>(`device/${deviceId}/`);
      dispatch(deviceFetchingSuccess(res.data.data));
      // @ts-ignore
    } catch (error: string) {
      dispatch(deviceFetchingError(error.message));
    }
  };
