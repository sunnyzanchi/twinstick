type Vector = [number, number];

//        p2
//       /|
//      / |
//  p3./  |
//    /|  |
//   / |  |
//  /__|__|
// p1
//
// Given two points, p1 and p2 and a length to clamp to, this returns the point p3
//
export default function clampedPoint(length: number, p1: Vector, p2: Vector): Vector{
  const {atan2, sin, PI} = Math;
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  const x = x2 - x1;
  const y = y2 - y1;

  const bottomAngle = atan2(x, y) + PI/2;
  const topAngle = 2*PI - (bottomAngle + PI/2);

  const a = length * sin(topAngle);
  const b = length * sin(bottomAngle)

  return [a, b];
}
