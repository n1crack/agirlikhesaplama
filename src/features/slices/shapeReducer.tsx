import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Shape = {
  name: string;
  description: string;
  dimensions: Array<DimensionType>;
  volume: number;
};

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
  volume: 0,
};

const squareShape: Shape = {
  name: "square",
  description: "Kare",
  dimensions: [
    { label: "thickness", value: 0, factor: 1 },
    { label: "width", value: 0, factor: 1 },
    { label: "length", value: 0, factor: 1 },
  ],
  volume: 0,
};

const profileShape: Shape = {
  name: "profile",
  description: "Profil",
  dimensions: [
    { label: "thickness", value: 0, factor: 1 },
    { label: "width", value: 0, factor: 1 },
    { label: "length", value: 0, factor: 1 },
  ],
  volume: 0,
};

const plateShape: Shape = {
  name: "plate",
  description: "Levha",
  dimensions: [
    { label: "thickness", value: 0, factor: 1 },
    { label: "width", value: 0, factor: 1 },
    { label: "length", value: 0, factor: 1 },
  ],
  volume: 0,
};

interface ShapeStates {
  [key: string]: Shape;
}

// define State
const initialState: ShapeStates = {
  plate: plateShape,
  profile: profileShape,
  pipe: pipeShape,
  square: squareShape,
};

// define reducer
export const shapeReducer = createSlice({
  name: "shape",
  initialState,
  reducers: {
    setDimensions: (state: ShapeStates, action: PayloadAction<any>) => {
      state[action.payload.type].dimensions = action.payload.value;
    },
    calculateVolume: (state: ShapeStates, action: PayloadAction<any>) => {
      switch (action.payload.type) {
        // Shape:Plate weight calculation :
        //
        case "plate":
          let dimensions = state[action.payload.type].dimensions;
          state[action.payload.type].volume = dimensions
            .map((dimension) => dimension.value / dimension.factor)
            .reduce((total, val) => total * val);
          break;
        // Shape:Profile weight calculation :
        //
        case "profile":
          break;
        // Shape:Pipe weight calculation :
        //
        case "pipe":
          break;
        // Shape:Square weight calculation :
        //
        case "square":
          break;
        default:
          break;
      }
    },
  },
});

// export actions
export const { setDimensions, calculateVolume } = shapeReducer.actions;

// export selectors
export const selectShapes = (state: RootState) => state.shape;

export default shapeReducer.reducer;
