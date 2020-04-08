import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShapes,
  setDimensions,
  calculateVolume,
} from "../features/slices/shapeReducer";
import { selectShapeType } from "../features/slices/mainReducer";

import Dimension from "./Dimension";

export default function ShapeDimension() {
  const Shapes = useSelector(selectShapes);
  const ShapeType = useSelector(selectShapeType);
  const dispatch = useDispatch();
  const dimensionList = Shapes[ShapeType].dimensions;

  const updateDimensionList = (newDimension: any) => {
    let objIndex = dimensionList.findIndex(
      (obj) => obj.label === newDimension.label
    );
    let updatedDimensionList = dimensionList.slice();
    updatedDimensionList[objIndex] = newDimension;
    dispatch(setDimensions({ type: ShapeType, value: updatedDimensionList }));
    dispatch(calculateVolume({ type: ShapeType }));
  };

  return (
    <div className="m-2 p-3">
      {dimensionList.map((dimension) => {
        return (
          <Dimension
            label={dimension.label}
            placeholder={dimension.placeholder}
            factor={dimension.factor}
            value={dimension.value}
            key={dimension.label}
            onChange={(dim: any) => updateDimensionList(dim)}
          />
        );
      })}
    </div>
  );
}
