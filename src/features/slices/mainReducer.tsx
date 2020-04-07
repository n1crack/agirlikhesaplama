import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface CalculateState {
  density: number;
  shapeType: string;
}

// define State
const initialState: CalculateState = {
  density: 7.85,
  shapeType: "plate",
};

// define reducer
export const calculateReducer = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    setDensity: (state, action: PayloadAction<number>) => {
      state.density = action.payload;
    },
    setShape: (state, action: PayloadAction<number>) => {
      state.density = action.payload;
    },
  },
});

// export actions
export const { setDensity } = calculateReducer.actions;

// export selectors
export const selectDensity = (state: RootState) => state.calculate.density;

export default calculateReducer.reducer;
