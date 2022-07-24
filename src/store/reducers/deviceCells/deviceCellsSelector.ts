import { RootState } from '../../store';

export const deviceCellsSelector = (state: RootState) =>
  state.deviceCellsReducer;
