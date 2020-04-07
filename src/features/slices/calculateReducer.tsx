import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface CalculateState {
  density: number;
}

const initialState: CalculateState = {
  density: 7.85,
};

export const calculateReducer = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setDensity: (state, action: PayloadAction<number>) => {
      state.density = action.payload;
    },
  },
});

export const { setDensity } = calculateReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDensity = (state: RootState) => state.calculate.density;

export default calculateReducer.reducer;
