export const calculateSin = (angle: number, isDegrees: boolean = true): number => {
  const rad = isDegrees ? (angle * Math.PI) / 180 : angle;
  return Math.sin(rad);
};

export const calculateCos = (angle: number, isDegrees: boolean = true): number => {
  const rad = isDegrees ? (angle * Math.PI) / 180 : angle;
  return Math.cos(rad);
};

export const calculateTan = (angle: number, isDegrees: boolean = true): number => {
  const rad = isDegrees ? (angle * Math.PI) / 180 : angle;
  return Math.tan(rad);
};

export const calculateArcSin = (value: number, returnDegrees: boolean = true): number => {
  const rad = Math.asin(value);
  return returnDegrees ? (rad * 180) / Math.PI : rad;
};

export const calculateArcCos = (value: number, returnDegrees: boolean = true): number => {
  const rad = Math.acos(value);
  return returnDegrees ? (rad * 180) / Math.PI : rad;
};

export const calculateArcTan = (value: number, returnDegrees: boolean = true): number => {
  const rad = Math.atan(value);
  return returnDegrees ? (rad * 180) / Math.PI : rad;
};