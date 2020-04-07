import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDensity, selectDensity } from "../features/slices/mainReducer";

type DensitySelectorType = {};

export default function DensitySelector(props: DensitySelectorType) {
  const density = useSelector(selectDensity);
  const dispatch = useDispatch();

  const onChange = (e: any) => {
    dispatch(setDensity(Number(e.target.value)));
  };

  return (
    <div className="m-2 p-3">
      <select defaultValue={density} onChange={(e) => onChange(e)}>
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
    </div>
  );
}
