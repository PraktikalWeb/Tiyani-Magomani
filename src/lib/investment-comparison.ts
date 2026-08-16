export type TermCategory = 'short' | 'long';
export type InterestType = 'growth' | 'income';
export type CalculationType = 'simple-growth' | 'compound-growth' | 'monthly-income' | 'offshore-scenario';

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
    name: "Private Equity Flexible Access Option",
    termCategory: "short",
    interestType: "growth",
    rate: 0.11, // 11%
    termMonths: 12, // 1 year
    calculationType: "simple-growth",
    minimumInvestment: 100000,
    route: "/investments/private-equity-flexible-access",
    description: "For clients who may need a more adaptable investment route.",
    resultLabel: "Estimated value after 12 months",
    supportingLabel: "Based on 11% p.a."
  },
  {
    id: "fixed-2yr-growth",
    name: "2-Year Fixed Return Growth Option",
    termCategory: "short",
    interestType: "growth",
    rate: 0.118, // 11.8%
    termMonths: 24, // 2 years
    calculationType: "compound-growth",
    minimumInvestment: 100000,
    route: "/contact", 
    description: "Structured short-term growth with defined terms.",
    resultLabel: "Estimated value after 2 years",
    supportingLabel: "Based on 11.8% p.a.",
    capitalProtection: "subject to formal product terms"
  },

  // B. Short Term + Income
  {
    id: "pe-flex-income",
    name: "Private Equity Flexible Access Option",
    termCategory: "short",
    interestType: "income",
    rate: 0.11, // 11%
    termMonths: 12,
    calculationType: "monthly-income",
    minimumInvestment: 100000,
    route: "/investments/private-equity-flexible-access",
    description: "For clients who may need a more adaptable investment route.",
    resultLabel: "Estimated gross monthly dividend",
    supportingLabel: "Per month, before tax"
  },
  {
    id: "fixed-2yr-income",
    name: "2-Year Fixed Return Income Option",
    termCategory: "short",
    interestType: "income",
    rate: 0.118, // 11.8%
    termMonths: 24,
    calculationType: "monthly-income",
    minimumInvestment: 100000,
    route: "/contact", 
    description: "Structured short-term income with defined terms.",
    resultLabel: "Estimated gross monthly income",
    supportingLabel: "Per month, before tax",
    capitalProtection: "subject to formal product terms"
  },

  // C. Long Term + Growth
  {
    id: "pe-growth",
    name: "Private Equity Growth Option",
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
    name: "Fixed Return Growth Option",
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

  // D. Long Term + Income
  {
    id: "pe-income",
    name: "Private Equity Income Option",
    termCategory: "long",
    interestType: "income",
    rate: 0.132, // 13.2%
    termMonths: 60,
    calculationType: "monthly-income",
    minimumInvestment: 100000,
    route: "/investments/private-equity-income",
    description: "For clients interested in income-focused investment positioning.",
    resultLabel: "Estimated gross monthly income",
    supportingLabel: "Per month, before tax",
    bonusRule: true // 1% bonus if >= 1,000,000
  },
  {
    id: "fixed-income",
    name: "Fixed Return Income Option",
    termCategory: "long",
    interestType: "income",
    rate: 0.126, // 12.6%
    termMonths: 60,
    calculationType: "monthly-income",
    minimumInvestment: 100000,
    route: "/investments/fixed-return-income",
    description: "For clients considering income-focused positioning with defined terms.",
    resultLabel: "Estimated gross monthly income",
    supportingLabel: "Per month, before tax",
    capitalProtection: "subject to formal product terms",
    bonusRule: true
  }
];
