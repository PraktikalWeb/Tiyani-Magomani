export interface ProductFigure {
  label: string;
  value: string;
  subtext?: string;
}

export interface InvestmentProduct {
  id: string;
  name: string;
  figures: ProductFigure[];
}

const whereWeInvest = 'Mature businesses scaling operations, including select companies further along in their development, backed by a track record of solid results and future earnings potential.';
const fixedCapitalProtection = 'Capital protection applies to the original investment amount at maturity, subject to the terms of the product.';

export const investmentProducts: Record<string, InvestmentProduct> = {
  'private-equity-growth': {
    id: 'private-equity-growth',
    name: 'Private Equity: Growth',
    figures: [
      { label: 'Fund Entry', value: 'Minimum R100,000' },
      { label: 'Target Return', value: '13.2%' },
      { label: 'Term', value: '5 years' },
      { label: 'Risk Level', value: 'Medium–High' },
      { label: 'Where We Invest', value: whereWeInvest },
    ],
  },
  'private-equity-income': {
    id: 'private-equity-income',
    name: 'Private Equity: Income',
    figures: [
      { label: 'Fund Entry', value: 'Minimum R100,000' },
      { label: 'Target Return', value: '13.2%' },
      { label: 'Term', value: '5 years' },
      { label: 'Risk Level', value: 'Moderate–High' },
      { label: 'Where We Invest', value: whereWeInvest },
    ],
  },
  'private-equity-flexible-access': {
    id: 'private-equity-flexible-access',
    name: 'Private Equity: Flexi Access',
    figures: [
      { label: 'Fund Entry', value: 'Minimum R100,000' },
      { label: 'Target Return', value: '11%' },
      { label: 'Term', value: '12 months' },
      { label: 'Risk Level', value: 'Medium–High' },
      { label: 'Where We Invest', value: whereWeInvest },
    ],
  },
  'fixed-return-growth': {
    id: 'fixed-return-growth',
    name: 'Fixed Return Growth Portfolio',
    figures: [
      { label: 'Fund Entry', value: 'Minimum R100,000' },
      { label: 'Target Return', value: '12.6%' },
      { label: 'Term', value: '5 years' },
      { label: 'Risk Level', value: 'Low–Medium' },
      { label: 'Capital Protection', value: fixedCapitalProtection },
      { label: 'Where We Invest', value: whereWeInvest },
    ],
  },
  'fixed-return-income': {
    id: 'fixed-return-income',
    name: 'Fixed Return Income Portfolio',
    figures: [
      { label: 'Fund Entry', value: 'Minimum R100,000' },
      { label: 'Target Return', value: '12.6%' },
      { label: 'Term', value: '5 years' },
      { label: 'Risk Level', value: 'Low–Medium' },
      { label: 'Capital Protection', value: fixedCapitalProtection },
      { label: 'Where We Invest', value: whereWeInvest },
    ],
  },
  'offshore-global': {
    id: 'offshore-global',
    name: 'Offshore Global Option',
    figures: [
      { label: 'Minimum Investment', value: 'R50,000' },
      { label: 'Scenario Assumption', value: '7% p.a.', subtext: 'Average return estimate' },
      { label: 'Investment Term', value: '5 years' },
      { label: 'Participation', value: '200%', subtext: 'In positive performance' },
      { label: 'Capital Return', value: '100%', subtext: 'At maturity. Subject to formal product terms.' },
      { label: 'Exposure', value: 'USD / Offshore' },
    ],
  },
};
