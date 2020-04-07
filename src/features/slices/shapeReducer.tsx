import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Shape {
  name: string;
  description: string;
  dimensions: Array<DimensionType>;
  calculate: any;
}

type DimensionType = {
  label: string;
  value: number;
  factor: number;
};

const pipeShape: Shape = {
  name: "pipe",
  description: "Boru",
  dimensions: [
    { label: "thickness", value: 0, factor: 1 },
    { label: "width", value: 0, factor: 1 },
    { label: "length", value: 0, factor: 1 },
  ],
  calculate: 5,
};

const squareShape: Shape = {
  name: "square",
  description: "Kare",
  dimensions: [
    { label: "thickness", value: 0, factor: 1 },
    { label: "width", value: 0, factor: 1 },
    { label: "length", value: 0, factor: 1 },
  ],
  calculate: 5,
};

const profileShape: Shape = {
  name: "profile",
  description: "Profil",
  dimensions: [
    { label: "thickness", value: 0, factor: 1 },
    { label: "width", value: 0, factor: 1 },
    { label: "length", value: 0, factor: 1 },
  ],
  calculate: 5,
};

const plateShape: Shape = {
  name: "plate",
  description: "Levha",
  dimensions: [
    { label: "thickness", value: 0, factor: 1 },
    { label: "width", value: 0, factor: 1 },
    { label: "length", value: 0, factor: 1 },
  ],
  calculate: 5,
};

// const plateCalculate = (dimensions: Array<DimensionType>) => {
//   return dimensions
//     .map((dimension) => dimension.value / dimension.factor)
//     .reduce((total, val) => total * val);
// };

interface ShapeStates {
  [key: string]: Shape;
}

const initialState: ShapeStates = {
  plate: plateShape,
  profile: profileShape,
  pipe: pipeShape,
  square: squareShape,
};

export const shapeReducer = createSlice({
  name: "shape",
  initialState,
  reducers: {
    setDimensions: (state, action: PayloadAction<any>) => {
      state[action.payload.type].dimensions = action.payload.value;
    },
  },
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
//  export const incrementAsync = (amount: number): AppThunk => dispatch => {
//    setTimeout(() => {
//      dispatch(incrementByAmount(amount));
//    }, 1000);
//  };
//

export const { setDimensions } = shapeReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectShapes = (state: RootState) => state.shape;

export default shapeReducer.reducer;
