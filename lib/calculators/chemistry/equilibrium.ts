export const calculateEquilibriumConstant = (
  productConcentrations: number[],
  reactantConcentrations: number[],
  productCoefficients: number[],
  reactantCoefficients: number[]
): number => {
  const products = productConcentrations.reduce(
    (acc, conc, i) => acc * Math.pow(conc, productCoefficients[i]),
    1
  );
  const reactants = reactantConcentrations.reduce(
    (acc, conc, i) => acc * Math.pow(conc, reactantCoefficients[i]),
    1
  );
  return products / reactants;
};

export const calculateDissociationConstant = (
  acidConcentration: number,
  hPlusConcentration: number
): number => {
  return Math.pow(hPlusConcentration, 2) / acidConcentration;
};

export const calculateBufferPH = (
  acidConcentration: number,
  saltConcentration: number,
  ka: number
): number => {
  return -Math.log10(ka) + Math.log10(saltConcentration / acidConcentration);
};