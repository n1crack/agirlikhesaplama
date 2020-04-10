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
  placeholder: string;
  value: number;
  factor: number;
};

const plateShape: Shape = {
  name: "plate",
  description: "Levha",
  dimensions: [
    { label: "width", placeholder: "Genişlik", value: 0, factor: 10 },
    { label: "length", placeholder: "Uzunluk", value: 0, factor: 10 },
    { label: "thickness", placeholder: "Kalınlık", value: 0, factor: 10 },
  ],
  volume: 0,
};

const squareShape: Shape = {
  name: "square",
  description: "Kare",
  dimensions: [
    { label: "width", placeholder: "Genişlik", value: 0, factor: 10 },
    { label: "length", placeholder: "Uzunluk", value: 0, factor: 10 },
  ],
  volume: 0,
};

const profileShape: Shape = {
  name: "profile",
  description: "Profil",
  dimensions: [
    { label: "width", placeholder: "Genişlik", value: 0, factor: 10 },
    { label: "height", placeholder: "Yükseklik", value: 0, factor: 10 },
    { label: "length", placeholder: "Uzunluk", value: 0, factor: 10 },
    { label: "thickness", placeholder: "Kalınlık", value: 0, factor: 10 },
  ],
  volume: 0,
};

const pipeShape: Shape = {
  name: "pipe",
  description: "Boru",
  dimensions: [
    { label: "diameter", placeholder: "Çap", value: 0, factor: 10 },
    { label: "thickness", placeholder: "Kalınlık", value: 0, factor: 10 },
    { label: "length", placeholder: "Uzunluk", value: 0, factor: 10 },
  ],
  volume: 0,
};

interface ShapeStates {
  shapes: { [key: string]: Shape };
  selected: string;
  volume: number;
  density: number;
}

// define State
const initialState: ShapeStates = {
  shapes: {
    plate: plateShape,
    profile: profileShape,
    pipe: pipeShape,
    square: squareShape,
  },
  selected: "plate",
  volume: 0,
  density: 7.85,
};

const getDim = (dimensions: Array<DimensionType>, label: string): number =>
  dimensions
    .filter((dimension) => dimension.label === label)
    .map((dimension) => dimension.value / dimension.factor)[0];

// define reducer
export const shapeReducer = createSlice({
  name: "shape",
  initialState,
  reducers: {
    setDensity: (state: ShapeStates, action: PayloadAction<number>) => {
      state.density = action.payload;
    },
    setShape: (state: ShapeStates, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
    setDimensions: (state: ShapeStates, action: PayloadAction<any>) => {
      state.shapes[state.selected].dimensions = action.payload;
    },
    calculateVolume: (state: ShapeStates) => {
      let dims = state.shapes[state.selected].dimensions;
      switch (state.selected) {
        // Shape:Plate weight calculation :
        // t*w*l
        case "plate":
          state.shapes[state.selected].volume =
            getDim(dims, "thickness") *
            getDim(dims, "width") *
            getDim(dims, "length");

          break;
        // Shape:Square weight calculation :
        // w*w*l
        case "square":
          state.shapes[state.selected].volume =
            getDim(dims, "width") *
            getDim(dims, "width") *
            getDim(dims, "length");
          break;
        // Shape:Profile weight calculation :
        // 2t(w+h-2t)l
        case "profile":
          state.shapes[state.selected].volume =
            2 *
            getDim(dims, "thickness") *
            (getDim(dims, "width") +
              getDim(dims, "height") +
              -2 * getDim(dims, "thickness")) *
            getDim(dims, "length");
          break;
        // Shape:Pipe weight calculation :
        // l * Math.PI * (Math.pow(d, 2 )-Math.pow(d-(d-2t),2))/4
        case "pipe":
          state.shapes[state.selected].volume =
            (getDim(dims, "length") *
              Math.PI *
              (Math.pow(getDim(dims, "diameter"), 2) -
                Math.pow(
                  getDim(dims, "diameter") - 2 * getDim(dims, "thickness"),
                  2
                ))) /
            4;
          break;
        default:
          state.shapes[state.selected].volume = 0;
          break;
      }
    },
  },
});

// export actions
export const {
  setDimensions,
  calculateVolume,
  setDensity,
  setShape,
} = shapeReducer.actions;

// export selectors
// export const selectShapes = (state: RootState) => state.shape;
export const getDimensionList = (state: RootState) =>
  state.shape.shapes[state.shape.selected].dimensions;
export const selectDensity = (state: RootState) => state.shape.density;
export const selectVolume = (state: RootState) =>
  state.shape.shapes[state.shape.selected].volume;
export const selectedShape = (state: RootState) => state.shape.selected;

export default shapeReducer.reducer;
