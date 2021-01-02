import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDensity, selectDensity } from '../features/slices/shapeReducer';

type DensitySelectorType = {};

export default function DensitySelector(props: DensitySelectorType) {
  const density = useSelector(selectDensity);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDensity(Number(e.target.value)));
  };

  return (
    <div className="inline-block relative w-full ">
      <select
        name="materials"
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        defaultValue={density}
        onChange={handleChange}
      >
        <option value={2.7}>Alüminyum</option>
        <option value={8.9}>Bakır</option>
        <option value={8.8}>Bronz</option>
        <option value={7.2}>Çinko</option>
        <option value={7.85}>Demir</option>
        <option value={1.42}>Delrin</option>
        <option value={1.4}>Fiber</option>
        <option value={10.5}>Gümüş</option>
        <option value={7.3}>Kalay</option>
        <option value={11.3}>Kalsiyum</option>
        <option value={1.2}>Kestamid</option>
        <option value={11.3}>Kurşun</option>
        <option value={8.9}>Nikel</option>
        <option value={8.55}>Pirinç</option>
        <option value={21.4}>Platin</option>
        <option value={1.2}>Polyamid</option>
        <option value={2.3}>Teflon</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
