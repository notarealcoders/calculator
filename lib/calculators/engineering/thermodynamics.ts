export const calculateHeatTransfer = (
  mass: number,
  specificHeat: number,
  tempChange: number
): number => {
  return mass * specificHeat * tempChange;
};

export const calculateThermalEfficiency = (
  workOutput: number,
  heatInput: number
): number => {
  return (workOutput / heatInput) * 100;
};

export const calculateEnthalpyChange = (
  mass: number,
  latentHeat: number
): number => {
  return mass * latentHeat;
};

export const calculatePressureFromIdealGas = (
  moles: number,
  volume: number,
  temperature: number,
  gasConstant: number = 0.08206 // L⋅atm/(mol⋅K)
): number => {
  return (moles * gasConstant * temperature) / volume;
};