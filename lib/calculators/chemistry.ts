// Chemistry calculation utilities
export const calculateMoles = (mass: number, molarMass: number): number => {
  return mass / molarMass;
};

export const calculateMolarity = (moles: number, volume: number): number => {
  return moles / volume;
};

export const calculatePH = (hydrogenConcentration: number): number => {
  return -Math.log10(hydrogenConcentration);
};

export const calculatepOH = (hydroxideConcentration: number): number => {
  return -Math.log10(hydroxideConcentration);
};

export const balanceRedoxEquation = (
  oxidationNumber1: number,
  oxidationNumber2: number
): number => {
  return Math.abs(oxidationNumber1 - oxidationNumber2);
};