import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import calculateReducer from "../features/slices/calculateReducer";
import shapeReducer from "../features/slices/shapeReducer";

export const store = configureStore({
  reducer: {
    calculate: calculateReducer,
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
