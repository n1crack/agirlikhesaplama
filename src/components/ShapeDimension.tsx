import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setDimensions,
    getDimensionList,
    calculateVolume,
    selectedShape,
} from "../features/slices/shapeReducer";

import Dimension from "./Dimension";

export default function ShapeDimension() {
    const ShapeType = useSelector(selectedShape);
    const dimensionList = useSelector(getDimensionList);
    const dispatch = useDispatch();

    const updateDimensionList = (newDimension: any) => {
        let objIndex = dimensionList.findIndex(
            (obj) => obj.label === newDimension.label
        );
        let updatedDimensionList = dimensionList.slice();
        updatedDimensionList[objIndex] = newDimension;
        dispatch(setDimensions(updatedDimensionList));
        dispatch(calculateVolume());
    };

    const childCallables: any[] = [];

    const handleReset = (label: any) => {
        childCallables.forEach((callback: any) => {
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
                        key={ShapeType + "_" + dimension.label}
                    />
                );
            })}
            {checkValues() ? ResetButton : ""}
        </div>
    );
}
