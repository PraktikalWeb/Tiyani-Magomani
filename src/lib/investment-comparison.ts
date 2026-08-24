export type TermCategory = 'short' | 'long';
export type InterestType = 'growth' | 'income';
export type CalculationType = 'simple-growth' | 'compound-growth' | 'monthly-income' | 'monthly-dividend' | 'offshore-scenario';

export interface ComparisonProduct {
  id: string;
  name: string;
  termCategory: TermCategory;
  interestType: InterestType;
  rate: number;
  termMonths: number;
  calculationType: CalculationType;
  minimumInvestment: number;
  route: string;
  description: string;
  resultLabel: string;
  supportingLabel: string;
  capitalProtection?: string;
  bonusRule?: boolean;
  scenarioNotes?: string;
}

export const comparisonProducts: ComparisonProduct[] = [
  // A. Short Term + Growth
  {
    id: "pe-flex-growth",
    name: "Private Equity: Flexi Access",
    termCategory: "short",
    interestType: "growth",
    rate: 0.11, // 11%
    termMonths: 12, // 1 year
    calculationType: "simple-growth",
    minimumInvestment: 100000,
    route: "/investments/private-equity-flexible-access",
    description: "For clients considering a 12-month private equity investment route.",
    resultLabel: "Estimated value after 12 months",
    supportingLabel: "Based on 11% target return"
  },
  {
    id: "fixed-2yr-growth",
    name: "Fixed Return Growth Portfolio",
    termCategory: "short",
    interestType: "growth",
    rate: 0.118,
    termMonths: 24,
    calculationType: "compound-growth",
    minimumInvestment: 100000,
    route: "/investments/fixed-return-growth",
    description: "Structured two-year growth with a defined term.",
    resultLabel: "Estimated value after 2 years",
    supportingLabel: "Based on 11.8% p.a.",
    capitalProtection: "Capital protection applies to the original investment amount at maturity, subject to the terms of the product."
  },
  {
    id: "fixed-2yr-income",
    name: "Fixed Return Income Portfolio",
    termCategory: "short",
    interestType: "income",
    rate: 0.118,
    termMonths: 24,
    calculationType: "monthly-income",
    minimumInvestment: 100000,
    route: "/investments/fixed-return-income",
    description: "Structured two-year income with a defined term.",
    resultLabel: "Gross Monthly Income",
    supportingLabel: "Estimated from the 11.8% target return",
    capitalProtection: "Capital protection applies to the original investment amount at maturity, subject to the terms of the product."
  },
  {
    id: "pe-flex-income",
    name: "Private Equity: Flexi Access",
    termCategory: "short",
    interestType: "income",
    rate: 0.11,
    termMonths: 12,
    calculationType: "monthly-dividend",
    minimumInvestment: 100000,
    route: "/investments/private-equity-flexible-access",
    description: "For clients seeking a monthly dividend estimate over a 12-month term.",
    resultLabel: "Gross Monthly Dividend",
    supportingLabel: "Based on 11% target return"
  },
  // B. Long Term + Growth
  {
    id: "pe-growth",
    name: "Private Equity: Growth",
    termCategory: "long",
    interestType: "growth",
    rate: 0.132, // 13.2%
    termMonths: 60, // 5 years
    calculationType: "compound-growth",
    minimumInvestment: 100000,
    route: "/investments/private-equity-growth",
    description: "For clients focused on long-term capital growth.",
    resultLabel: "Estimated value after 5 years",
    supportingLabel: "Based on 13.2% p.a."
  },
  {
    id: "fixed-growth",
    name: "Fixed Return Growth Portfolio",
    termCategory: "long",
    interestType: "growth",
    rate: 0.126, // 12.6%
    termMonths: 60,
    calculationType: "compound-growth",
    minimumInvestment: 100000,
    route: "/investments/fixed-return-growth",
    description: "For clients considering structured growth with defined terms.",
    resultLabel: "Estimated value after 5 years",
    supportingLabel: "Based on 12.6% p.a.",
    capitalProtection: "subject to formal product terms"
  },
  {
    id: "offshore-global",
    name: "Offshore Global Option",
    termCategory: "long",
    interestType: "growth",
    rate: 0.07, // 7% average assumption
    termMonths: 60,
    calculationType: "offshore-scenario",
    minimumInvestment: 100000, 
    route: "/investments/offshore-global",
    description: "For clients exploring offshore and international exposure.",
    resultLabel: "Estimated offshore scenario value",
    supportingLabel: "Based on 7% p.a. average return assumption and 200% participation, subject to terms",
    scenarioNotes: "Based on 7% p.a. average return assumption and 200% participation, subject to terms",
    capitalProtection: "subject to formal product terms"
  },

  // C. Long Term + Income
  {
    id: "pe-income",
    name: "Private Equity: Income",
    termCategory: "long",
    interestType: "income",
    rate: 0.132, // 13.2%
    termMonths: 60,
    calculationType: "monthly-income",
    minimumInvestment: 100000,
    route: "/investments/private-equity-income",
    description: "For clients interested in income-focused investment positioning.",
    resultLabel: "Estimated gross monthly income",
    supportingLabel: "Estimated gross monthly income based on the target return"
  },
  {
    id: "fixed-income",
    name: "Fixed Return Income Portfolio",
    termCategory: "long",
    interestType: "income",
    rate: 0.126, // 12.6%
    termMonths: 60,
    calculationType: "monthly-income",
    minimumInvestment: 100000,
    route: "/investments/fixed-return-income",
    description: "For clients considering income-focused positioning with defined terms.",
    resultLabel: "Estimated gross monthly income",
    supportingLabel: "Estimated gross monthly income based on the target return",
    capitalProtection: "Capital protection applies to the original investment amount at maturity, subject to the terms of the product."
  }
];
