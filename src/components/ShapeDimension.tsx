import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShapes,
  setDimensions,
  calculateVolume,
} from "../features/slices/shapeReducer";
import { selectDensity } from "../features/slices/mainReducer";

import DensitySelector from "./DensitySelector";
import Dimension from "./Dimension";

export default function ShapeDimension() {
  const Shapes = useSelector(selectShapes);
  const Density = useSelector(selectDensity);
  const dispatch = useDispatch();
  const dimensionList = Shapes["plate"].dimensions;

  const updateDimensionList = (newDimension: any) => {
    let objIndex = dimensionList.findIndex(
      (obj) => obj.label === newDimension.label
    );
    let updatedDimensionList = dimensionList.slice();
    updatedDimensionList[objIndex] = newDimension;
    dispatch(setDimensions({ type: "plate", value: updatedDimensionList }));
    dispatch(calculateVolume({ type: "plate" }));
  };

  const Volume = Shapes["plate"].volume;

  return (
    <div className="m-2 p-3">
      <DensitySelector />

      {dimensionList.map((dimension) => {
        return (
          <Dimension
            label={dimension.label}
            factor={dimension.factor}
            value={dimension.value}
            key={dimension.label}
            onChange={(dim: any) => updateDimensionList(dim)}
          />
        );
      })}

      <h1>Toplam: {Volume * Density}</h1>
    </div>
  );
}
