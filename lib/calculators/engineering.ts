// Engineering calculation utilities
export const calculateWork = (force: number, distance: number): number => {
  return force * distance;
};

export const calculatePower = (voltage: number, current: number): number => {
  return voltage * current;
};

export const calculateStress = (force: number, area: number): number => {
  return force / area;
};

export const calculateStrain = (
  deformation: number,
  originalLength: number
): number => {
  return deformation / originalLength;
};

export const calculateYoungsModulus = (stress: number, strain: number): number => {
  return stress / strain;
};

// Ohm's Law calculations
export const calculateVoltage = (current: number, resistance: number): number => {
  return current * resistance;
};

export const calculateCurrent = (voltage: number, resistance: number): number => {
  return voltage / resistance;
};

export const calculateResistance = (voltage: number, current: number): number => {
  return voltage / current;
};