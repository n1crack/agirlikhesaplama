import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setDimension,
  getDimensionList,
  setVolume,
  selectedShape,
} from '../features/slices/shapeReducer';
import weightCalculation from '../features/calculations/weightCalculation';

import Dimension from './Dimension';

type DimTypes = {
  label: string;
  value: number;
  placeholder: string;
  factor: number;
};

export default function ShapeDimension() {
  const ShapeType = useSelector(selectedShape);
  const dimensionList = useSelector(getDimensionList);
  const dispatch = useDispatch();
  const childCallables: Array<() => void> = [];

  const updateDimensionList = (newDimension: DimTypes) => {
    dispatch(setDimension(newDimension));
  };

  useEffect(() => {
    const updateWeight = (updatedDimensionList: DimTypes[]) => {
      const calculator = weightCalculation[ShapeType];
      dispatch(setVolume(calculator(updatedDimensionList)));
    };

    updateWeight(dimensionList);
  }, [dimensionList, ShapeType, dispatch]);

  const handleReset = () => {
    childCallables.forEach((callback: () => void) => {
      callback();
    });
  };

  const checkValues = () => {
    return (
      dimensionList
        .map((dimension) => dimension.value)
        .reduce((total, value) => total + value) > 0
    );
  };

  const ResetButton = (
    <div className="m-2 text-center">
      <button
        type="button"
        onClick={handleReset}
        className="p-1 px-2 border border-gray-300"
      >
        Sıfırla
      </button>
    </div>
  );

  return (
    <div className="m-2 ">
      {dimensionList.map((dimension) => {
        return (
          <Dimension
            label={dimension.label}
            placeholder={dimension.placeholder}
            factor={dimension.factor}
            value={dimension.value}
            onChange={updateDimensionList}
            event={childCallables}
            key={`${ShapeType}_${dimension.label}`}
          />
        );
      })}
      {checkValues() ? ResetButton : ''}
    </div>
  );
}
