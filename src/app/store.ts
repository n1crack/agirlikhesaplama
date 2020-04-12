import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import shapeReducer from '../features/slices/shapeReducer';

export const store = configureStore({
  reducer: {
    shape: shapeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
