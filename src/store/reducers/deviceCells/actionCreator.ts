import { AppDispatch } from '../../store';
import {
  cellFetching,
  cellFetchingError,
  cellFetchingSuccess,
} from './deviceCellsSlice';
import { deviceHttp } from '../../../http/deviceHttp';
import { DeviceCell } from '../../../types/device';

export const fetchCells =
  (deviceId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(cellFetching());
      const res = await deviceHttp.get<Array<DeviceCell>, any>(
        `orders/device/${deviceId}/cells/statuses/?type=5`,
      );
      dispatch(cellFetchingSuccess(res.data.data.cell_types));
      // @ts-ignore
    } catch (error: string) {
      dispatch(cellFetchingError(error.message));
    }
  };
