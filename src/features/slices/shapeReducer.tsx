import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

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
  name: 'plate',
  description: 'Levha',
  dimensions: [
    {
      label: 'width',
      placeholder: 'Genişlik',
      value: 0,
      factor: 10,
    },
    {
      label: 'length',
      placeholder: 'Uzunluk',
      value: 0,
      factor: 10,
    },
    {
      label: 'thickness',
      placeholder: 'Kalınlık',
      value: 0,
      factor: 10,
    },
  ],
  volume: 0,
};

const squareShape: Shape = {
  name: 'square',
  description: 'Kare',
  dimensions: [
    {
      label: 'width',
      placeholder: 'Genişlik',
      value: 0,
      factor: 10,
    },
    {
      label: 'length',
      placeholder: 'Uzunluk',
      value: 0,
      factor: 10,
    },
  ],
  volume: 0,
};

const profileShape: Shape = {
  name: 'profile',
  description: 'Profil',
  dimensions: [
    {
      label: 'width',
      placeholder: 'Genişlik',
      value: 0,
      factor: 10,
    },
    {
      label: 'height',
      placeholder: 'Yükseklik',
      value: 0,
      factor: 10,
    },
    {
      label: 'length',
      placeholder: 'Uzunluk',
      value: 0,
      factor: 10,
    },
    {
      label: 'thickness',
      placeholder: 'Kalınlık',
      value: 0,
      factor: 10,
    },
  ],
  volume: 0,
};

const pipeShape: Shape = {
  name: 'pipe',
  description: 'Boru',
  dimensions: [
    {
      label: 'diameter',
      placeholder: 'Çap',
      value: 0,
      factor: 10,
    },
    {
      label: 'thickness',
      placeholder: 'Kalınlık',
      value: 0,
      factor: 10,
    },
    {
      label: 'length',
      placeholder: 'Uzunluk',
      value: 0,
      factor: 10,
    },
  ],
  volume: 0,
};

type ShapeStates = {
  shapes: { [key: string]: Shape };
  selected: string;
  volume: number;
  density: number;
};

// define State
const initialState: ShapeStates = {
  shapes: {
    plate: plateShape,
    profile: profileShape,
    pipe: pipeShape,
    square: squareShape,
  },
  selected: 'plate',
  volume: 0,
  density: 7.85,
};

// define reducer
export const shapeReducer = createSlice({
  name: 'shape',
  initialState,
  reducers: {
    setDensity: (state: ShapeStates, action: PayloadAction<number>) => {
      state.density = action.payload;
    },
    setShape: (state: ShapeStates, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
    setDimension: (
      state: ShapeStates,
      action: PayloadAction<DimensionType>
    ) => {
      const objIndex = state.shapes[state.selected].dimensions.findIndex(
        (obj) => obj.label === action.payload.label
      );
      state.shapes[state.selected].dimensions[objIndex] = action.payload;
    },
    setVolume: (state: ShapeStates, action: PayloadAction<number>) => {
      state.shapes[state.selected].volume = action.payload;
    },
  },
});

// export actions
export const {
  setDimension,
  setDensity,
  setShape,
  setVolume,
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
