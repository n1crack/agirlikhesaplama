import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ResultUnits from './ResultUnits';
import { selectVolume, selectDensity } from '../features/slices/shapeReducer';

export default function Result() {
  const Volume = useSelector(selectVolume);
  const Density = useSelector(selectDensity);

  const [factor, setFactor] = useState(0.001);

  const calculate = (value: number) => {
    return value.toLocaleString(undefined, {
      useGrouping: false,
      maximumFractionDigits: 5,
    });
  };

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold text-sm md:text-xl md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="total"
        >
          Toplam:
        </label>
      </div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          className="block w-full pl-2 pr-12 bg-green-100 sm:leading-5 text-xl md:text-3xl border border-gray-700 focus:border-blue-500 rounded p-1 select-all leading-tight focus:outline-none"
          type="text"
          id="total"
          value={calculate(Volume * Density * factor)}
          readOnly
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <ResultUnits onUnitSelect={(value: number) => setFactor(value)} />
        </div>
      </div>
    </div>
  );
}
