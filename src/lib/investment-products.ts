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

export const investmentProducts: Record<string, InvestmentProduct> = {
  "private-equity-growth": {
    id: "private-equity-growth",
    name: "Private Equity Growth Option",
    figures: [
      { label: "Minimum Investment", value: "R100,000" },
      { label: "Performance Rate", value: "13.2% p.a." },
      { label: "Investment Term", value: "5 years" },
      { label: "Risk Profile", value: "Medium–High" },
      { label: "Fund Inception", value: "2021", subtext: "Zero fees" },
      { label: "Income Focus", value: "Growth on capital" }
    ]
  },
  "private-equity-income": {
    id: "private-equity-income",
    name: "Private Equity Income Option",
    figures: [
      { label: "Minimum Investment", value: "R100,000" },
      { label: "Performance Rate", value: "13.2% p.a." },
      { label: "Investment Term", value: "5 years" },
      { label: "Risk Profile", value: "Medium–High" },
      { label: "Income Frequency", value: "Monthly income", subtext: "Fund inception 2022" },
      { label: "Annual Bonus", value: "1%", subtext: "On investments over R1 million. Zero fees / commission" }
    ]
  },
  "private-equity-flexible-access": {
    id: "private-equity-flexible-access",
    name: "Private Equity Flexible Access Option",
    figures: [
      { label: "Minimum Investment", value: "R100,000" },
      { label: "Performance Rate", value: "11% p.a." },
      { label: "Investment Term", value: "12 months" },
      { label: "Risk Profile", value: "Medium–High" },
      { label: "Income/Growth", value: "Growth or monthly dividend", subtext: "No annual bonus on monthly dividends" },
      { label: "Access Feature", value: "Available accrued interest", subtext: "Fund inception 2023. Subject to formal product terms." }
    ]
  },
  "fixed-return-growth": {
    id: "fixed-return-growth",
    name: "Fixed Return Growth Option",
    figures: [
      { label: "Minimum Investment", value: "R100,000" },
      { label: "Rate of Return", value: "12.6% p.a." },
      { label: "Investment Term", value: "5 years" },
      { label: "Risk Profile", value: "Low–Medium" },
      { label: "Capital Protection", value: "100%", subtext: "At maturity. Subject to formal product terms." },
      { label: "Portfolio Type", value: "Growth portfolio" }
    ]
  },
  "fixed-return-income": {
    id: "fixed-return-income",
    name: "Fixed Return Income Option",
    figures: [
      { label: "Minimum Investment", value: "R100,000" },
      { label: "Rate of Return", value: "12.6% p.a." },
      { label: "Investment Term", value: "5 years" },
      { label: "Risk Profile", value: "Low–Medium" },
      { label: "Capital Protection", value: "100%", subtext: "At maturity. Subject to formal product terms." },
      { label: "Income Frequency", value: "Monthly income" }
    ]
  },
  "offshore-global": {
    id: "offshore-global",
    name: "Offshore Global Option",
    figures: [
      { label: "Minimum Investment", value: "R50,000" },
      { label: "Scenario Assumption", value: "7% p.a.", subtext: "Average return estimate" },
      { label: "Investment Term", value: "5 years" },
      { label: "Participation", value: "200%", subtext: "In positive performance" },
      { label: "Capital Return", value: "100%", subtext: "At maturity. Subject to formal product terms." },
      { label: "Exposure", value: "USD / Offshore" }
    ]
  }
};
