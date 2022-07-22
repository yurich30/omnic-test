import { RootState } from '../../store';

export const deviceSelector = (state: RootState) => state.deviceReducer;
