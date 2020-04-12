import React from 'react';

type UnitProps = {
  onUnitSelect: (factor: number) => void;
  factor: number;
};

export default function Unit(props: UnitProps) {
  const { factor } = props;
  const setUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onUnitSelect(Number(e.target.value));
  };

  return (
    <select
      className="block appearance-none text-sm md:text-base text-gray-700 bg-white mr-1 py-0 pr-3 leading-tight focus:outline-none select-background-icon"
      value={factor}
      onChange={setUnit}
      tabIndex={-1}
    >
      <option value="10">mm</option>
      <option value="1">cm</option>
      <option value="0.01">m</option>
      <option value="0.032808399">ft</option>
      <option value="0.393700787">inch</option>
    </select>
  );
}
