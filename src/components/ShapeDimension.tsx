import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShapes, setDimensions } from "../features/slices/shapeReducer";

import DensitySelector from "./DensitySelector";
import Dimension from "./Dimension";

export default function ShapeDimension() {
  const shapeDimension = useSelector(selectShapes);
  // const density = useSelector(selectDensity);
  const dispatch = useDispatch();

  // burada yapılacak işlemler.
  // şekil seçilecek.- selected
  const dimensionList = shapeDimension["plate"].dimensions;
  // const calc = shapeDimension["plate"].calculate;
  // şekle ait dimensionlar listelenecek. ++
  // kayıt girildikçe dimension listesi ve density calculate olacak. +

  // formül seçili şekilden gelecek.
  // sonuç toplamdan alınacak.

  const updateDimensionList = (newDimension: any) => {
    let objIndex = dimensionList.findIndex(
      (obj) => obj.label === newDimension.label
    );
    let updatedDimensionList = dimensionList.slice();
    updatedDimensionList[objIndex] = newDimension;
    dispatch(setDimensions({ type: "plate", value: updatedDimensionList }));
    //return updatedDimensionList;
  };

  // const calculate = (dim: any) => {
  // let newDimentionList = updateDimensionList(dim);
  //  let total = calc(newDimentionList, density);
  //  dispatch(updateTotal(total));
  // };

  // const calculateOnlyDensity = (value: number) => {
  //   let total = calc(dimensionList, value);
  //   dispatch(updateTotal(total));
  // };

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

      <h1>Toplam: {0}</h1>
    </div>
  );
}
