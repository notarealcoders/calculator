export function formatNumber(num: number): string {
  if (!isFinite(num)) return 'Error';
  
  // Handle special cases
  if (Math.abs(num) < 0.000001 && num !== 0) {
    return num.toExponential(4);
  }
  
  if (Math.abs(num) > 999999999) {
    return num.toExponential(4);
  }
  
  // Format regular numbers
  const formatted = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 8,
    minimumFractionDigits: 0,
    useGrouping: true,
  }).format(num);
  
  return formatted;
}