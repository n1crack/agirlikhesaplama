import React, { useState } from "react";

type ResultUnitsProps = {
  onUnitSelect: any;
};

export default function ResultUnits(props: ResultUnitsProps) {
  const [metric, setMetric] = useState(0.001);

  const setUnit = (e: any) => {
    setMetric(e.target.value);
    props.onUnitSelect(e.target.value);
  };

  return (
    <select
      className="block appearance-none w-full text-gray-700 bg-white mr-1 py-0 pr-3 leading-tight focus:outline-none select-background-icon"
      value={metric}
      onChange={setUnit}
      tabIndex={-1}
    >
      <option value="1">gr</option>
      <option value="0.001">kg</option>
      <option value="0.000001">ton</option>
      <option value="0.0022046226218">pound</option>
      <option value="0.03527396195">ounce</option>
    </select>
  );
}
