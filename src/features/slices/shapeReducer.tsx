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
    { label: "thickness", placeholder: "Kalınlık", value: 0, factor: 1 },
    { label: "width", placeholder: "Genişlik", value: 0, factor: 1 },
    { label: "length", placeholder: "Uzunluk", value: 0, factor: 1 },
  ],
  volume: 0,
};

const squareShape: Shape = {
  name: "square",
  description: "Kare",
  dimensions: [
    { label: "width", placeholder: "Genişlik", value: 0, factor: 1 },
    { label: "length", placeholder: "Uzunluk", value: 0, factor: 1 },
  ],
  volume: 0,
};

const profileShape: Shape = {
  name: "profile",
  description: "Profil",
  dimensions: [
    { label: "width", placeholder: "Genişlik", value: 0, factor: 1 },
    { label: "height", placeholder: "Yükseklik", value: 0, factor: 1 },
    { label: "thickness", placeholder: "Kalınlık", value: 0, factor: 1 },
    { label: "length", placeholder: "Uzunluk", value: 0, factor: 1 },
  ],
  volume: 0,
};

const pipeShape: Shape = {
  name: "pipe",
  description: "Boru",
  dimensions: [
    { label: "diameter", placeholder: "Çap", value: 0, factor: 1 },
    { label: "thickness", placeholder: "Kalınlık", value: 0, factor: 1 },
    { label: "length", placeholder: "Uzunluk", value: 0, factor: 1 },
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

const getDim = (dimensions: Array<DimensionType>, label: string): number =>
  dimensions
    .filter((dimension) => dimension.label === label)
    .map((dimension) => dimension.value / dimension.factor)[0];

// define reducer
export const shapeReducer = createSlice({
  name: "shape",
  initialState,
  reducers: {
    setDimensions: (state: ShapeStates, action: PayloadAction<any>) => {
      state[action.payload.type].dimensions = action.payload.value;
    },
    calculateVolume: (state: ShapeStates, action: PayloadAction<any>) => {
      let type = action.payload.type;
      let dims = state[type].dimensions;
      switch (type) {
        // Shape:Plate weight calculation :
        // t*w*l
        case "plate":
          state[type].volume =
            getDim(dims, "thickness") *
            getDim(dims, "width") *
            getDim(dims, "length");

          break;
        // Shape:Square weight calculation :
        // w*w*l
        case "square":
          state[type].volume =
            getDim(dims, "width") *
            getDim(dims, "width") *
            getDim(dims, "length");
          break;
        // Shape:Profile weight calculation :
        // 2t(w+h+2t)l
        case "profile":
          state[type].volume =
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
          state[type].volume =
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
          state[type].volume = 0;
          break;
      }
    },
  },
});

// export actions
export const { setDimensions, calculateVolume } = shapeReducer.actions;

// export selectors
export const selectShapes = (state: RootState) => state.shape;
export const selectVolume = (state: RootState) => state.calculate.volume;

export default shapeReducer.reducer;
