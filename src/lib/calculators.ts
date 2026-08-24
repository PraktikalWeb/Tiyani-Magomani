export type CompoundGrowthCalculation = {
  yearlyGrowth: number[];
  totalGrowth: number;
  estimatedFutureValue: number;
};

export type MonthlyIncomeCalculation = {
  grossMonthly: number;
  netMonthly: number;
  grossAnnual: number;
  netAnnual: number;
  grossTotalIncome: number;
  netTotalIncome: number;
};

export type FixedReturnIncomeCalculation = MonthlyIncomeCalculation & {
  grossAnnualBonus: number;
  netAnnualBonus: number;
};

export const roundTo2 = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100;

export const formatCurrency = (value: number) => `R${roundTo2(value).toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})}`;

export function calculateCompoundGrowth(initialInvestment: number, annualRate: number, years: number): CompoundGrowthCalculation {
  let currentValue = initialInvestment;
  const yearlyGrowth: number[] = [];

  for (let year = 0; year < years; year += 1) {
    const yearGrowth = roundTo2(currentValue * annualRate);
    yearlyGrowth.push(yearGrowth);
    currentValue = roundTo2(currentValue + yearGrowth);
  }

  const totalGrowth = roundTo2(yearlyGrowth.reduce((total, growth) => total + growth, 0));
  return { yearlyGrowth, totalGrowth, estimatedFutureValue: roundTo2(initialInvestment + totalGrowth) };
}

export function calculateMonthlyIncome(amount: number, annualRate: number, termYears: number): MonthlyIncomeCalculation {
  const grossMonthly = roundTo2((amount * annualRate) / 12);
  const netMonthly = roundTo2(grossMonthly * 0.8);
  const grossAnnual = roundTo2(amount * annualRate);
  const netAnnual = roundTo2(grossAnnual * 0.8);

  return {
    grossMonthly,
    netMonthly,
    grossAnnual,
    netAnnual,
    grossTotalIncome: roundTo2(grossAnnual * termYears),
    netTotalIncome: roundTo2(netAnnual * termYears),
  };
}

export function calculateFixedReturnIncome(amount: number, annualRate: number, termYears: number): FixedReturnIncomeCalculation {
  const income = calculateMonthlyIncome(amount, annualRate, termYears);
  const grossAnnualBonus = roundTo2(amount * (termYears === 2 ? 0.006 : 0.01));

  return {
    ...income,
    grossAnnualBonus,
    netAnnualBonus: roundTo2(grossAnnualBonus * 0.8),
  };
}

export function calculateOffshoreScenarios(amount: number) {
  const baseReturn = 0.07 * 5 * 2;
  const scenario2Return = baseReturn * (21 / 18);

  return {
    scenario1Value: roundTo2(amount * (1 + baseReturn)),
    scenario2Value: roundTo2(amount * (1 + scenario2Return)),
  };
}
