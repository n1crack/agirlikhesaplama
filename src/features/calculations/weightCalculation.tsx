/* eslint-disable dot-notation */
type DimensionType = {
  label: string;
  placeholder: string;
  value: number;
  factor: number;
};

const d = (dimensions: Array<DimensionType>, label: string): number =>
  dimensions
    .filter((dimension) => dimension.label === label)
    .map((dimension) => dimension.value / dimension.factor)[0];

export function plate(dim: Array<DimensionType>): number {
  // t*w*l
  return d(dim, 'thickness') * d(dim, 'width') * d(dim, 'length');
}

export function profile(dim: Array<DimensionType>): number {
  // 2t*(w+h-2t)*l
  return (
    2 *
    d(dim, 'thickness') *
    (d(dim, 'width') + d(dim, 'height') - 2 * d(dim, 'thickness')) *
    d(dim, 'length')
  );
}

export function square(dim: Array<DimensionType>): number {
  // l * w^2
  return d(dim, 'length') * d(dim, 'width') ** 2;
}

export function pipe(dim: Array<DimensionType>): number {
  // (d^2-0.25(d-(d-2t)^2)) * l * Math.PI *
  return (
    (d(dim, 'diameter') ** 2 -
      0.25 * (d(dim, 'diameter') - 2 * d(dim, 'thickness')) ** 2) *
    dim['length'] *
    Math.PI
  );
}

type calculationType = {
  [key: string]: (dim: Array<DimensionType>) => number;
};

const weightCalculation: calculationType = { plate, square, pipe, profile };
export default weightCalculation;
