"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import FadeIn from './FadeIn';

interface CalculatorEngineProps {
  productId?: string;
  lockedProduct?: boolean;
}

const productIdToOptionMap: Record<string, string> = {
  "private-equity-growth": "Private Equity Growth Option",
  "private-equity-income": "Private Equity Income Option",
  "private-equity-flexible-access": "Private Equity Flexible Access Option",
  "fixed-return-growth": "Fixed Return Growth Option",
  "fixed-return-income": "Fixed Return Income Option",
  "offshore-global": "Offshore Global Option"
};

export default function CalculatorEngine({ productId, lockedProduct = false }: CalculatorEngineProps) {
  const defaultOption = (lockedProduct && productId && productIdToOptionMap[productId]) 
    ? productIdToOptionMap[productId] 
    : 'Private Equity Growth Option';

  const defaultPeriod = (lockedProduct && productId === 'private-equity-flexible-access') ? '12' : '60';

  const [option, setOption] = useState<string>(defaultOption);
  const [amount, setAmount] = useState<string>('');
  const [period, setPeriod] = useState<string>(defaultPeriod);
  
  const [flexMode, setFlexMode] = useState<'dividend' | 'growth'>('dividend');

  const [validationError, setValidationError] = useState<string>('');
  const [hasCalculated, setHasCalculated] = useState(false);

  const isFlexibleAccess = (lockedProduct && productId === 'private-equity-flexible-access') || (!lockedProduct && option === 'Private Equity Flexible Access Option');

  type BreakdownRow = { label: string; value: string; isBold?: boolean; isBonus?: boolean };
  
  const [resultData, setResultData] = useState<{
    option: string;
    rateHeading: string;
    calcNote: string;
    disclaimer: string;
    rows: BreakdownRow[];
    totalLabel?: string;
    totalValue?: string;
    initialLabel: string;
    initialValue: string;
    finalBlockLabel: string;
    finalBlockValue: string;
    finalBlockSub: string;
  } | null>(null);

  const formatCurrency = (val: number) => {
    return "R" + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;

    const numAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    
    // Validation
    let minAmount = 100000;
    if (option === 'Offshore Global Option') {
      minAmount = 50000;
    }
    
    if (numAmount < minAmount) {
      const formattedMin = formatCurrency(minAmount).replace('.00', '');
      setValidationError(`Minimum investment for this option is ${formattedMin}.`);
      return;
    }
    setValidationError("");

    const numMonths = parseInt(period) || 0;
    const numYears = numMonths / 12;
    
    let rateHeading = "";
    let calcNote = "Below figures are estimates based on the selected product assumptions and shown before tax, unless stated otherwise.";
    let disclaimer = "Calculator results are estimates based on the information entered and the selected product assumptions. They are shown for general information and enquiry purposes only and do not constitute financial advice or a guaranteed return. Final figures, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation.";
    let rows: BreakdownRow[] = [];
    let totalLabel = "";
    let totalValue = "";
    let initialLabel = "Initial Investment";
    let initialValue = formatCurrency(numAmount);
    let finalBlockLabel = "";
    let finalBlockValue = "";
    let finalBlockSub = "";

    if (option === 'Private Equity Growth Option') {
      const rate = 0.132;
      rateHeading = "Performance Rate of 13.2% p.a.";
      
      let currentValue = numAmount;
      let totalGrowth = 0;
      
      for (let i = 1; i <= numYears; i++) {
        const yearGrowth = currentValue * rate;
        currentValue += yearGrowth;
        totalGrowth += yearGrowth;
        rows.push({ label: `Year ${i}`, value: formatCurrency(yearGrowth) });
      }
      
      totalLabel = "Total Estimated Growth";
      totalValue = formatCurrency(totalGrowth);
      finalBlockLabel = `Estimated investment value after ${numYears} years`;
      finalBlockValue = formatCurrency(currentValue);
      finalBlockSub = "Based on 13.2% p.a.";
      
    } else if (option === 'Private Equity Income Option') {
      const rate = 0.132;
      rateHeading = "Performance Rate of 13.2% p.a.";
      disclaimer += " Income estimates are shown before tax and may differ from final product outcomes.";
      calcNote = "Below dividend figures are estimates based on the selected product assumptions and shown before tax, unless stated otherwise.";
      
      const annualIncome = numAmount * rate;
      const monthlyIncome = annualIncome / 12;
      const totalIncome = monthlyIncome * numMonths;
      
      rows.push({ label: "Estimated Monthly Income", value: formatCurrency(monthlyIncome) });
      rows.push({ label: "Estimated Annual Income", value: formatCurrency(annualIncome) });
      rows.push({ label: `Estimated Total Income Over ${numMonths} Months`, value: formatCurrency(totalIncome) });
      
      if (numAmount >= 1000000) {
        rows.push({ label: "Estimated Annual Bonus", value: formatCurrency(numAmount * 0.01), isBonus: true });
      }
      
      finalBlockLabel = "Estimated gross monthly income";
      finalBlockValue = formatCurrency(monthlyIncome);
      finalBlockSub = "Based on 13.2% p.a.";
      
    } else if (option === 'Private Equity Flexible Access Option') {
      const rate = 0.11;
      rateHeading = "Performance Rate of 11% p.a.";
      
      if (flexMode === 'dividend') {
        disclaimer += " Flexible access refers to access to available accrued interest, subject to formal product terms. Income and dividend estimates are shown before tax unless marked otherwise. Final tax treatment may differ.";
        calcNote = "Below dividend figures are estimates based on the selected product assumptions and shown before tax, unless stated otherwise.";
        
        const annualDividend = numAmount * rate;
        const monthlyDividend = annualDividend / 12;
        const totalDividend = monthlyDividend * numMonths; 
        
        rows.push({ label: "Estimated Gross Monthly Dividend", value: formatCurrency(monthlyDividend) });
        rows.push({ label: "Estimated Gross Annual Dividend", value: formatCurrency(annualDividend) });
        rows.push({ label: `Estimated Total Dividend Over ${numMonths} Months`, value: formatCurrency(totalDividend) });
        
        finalBlockLabel = "Estimated gross monthly dividend";
        finalBlockValue = formatCurrency(monthlyDividend);
        finalBlockSub = "Based on 11% p.a.";
      } else {
        disclaimer += " Flexible access refers to access to available accrued interest, subject to formal product terms.";
        calcNote = "Below figures are estimates based on the selected product assumptions and shown before tax, unless stated otherwise.";
        
        const growth = numAmount * rate * (numMonths / 12);
        const valueAfter = numAmount + growth;
        
        rows.push({ label: `Estimated ${numMonths}-Month Growth`, value: formatCurrency(growth) });
        
        finalBlockLabel = `Estimated value after ${numMonths} months`;
        finalBlockValue = formatCurrency(valueAfter);
        finalBlockSub = "Based on 11% p.a.";
      }
      
    } else if (option === 'Fixed Return Growth Option') {
      const rate = 0.126;
      rateHeading = "Rate of Return of 12.6% p.a.";
      disclaimer += " Capital protection applies only where expressly stated in the formal product documentation and only if the product is held until maturity. The relevant security is not guaranteed by any party.";
      
      let currentValue = numAmount;
      let totalGrowth = 0;
      
      for (let i = 1; i <= numYears; i++) {
        const yearGrowth = currentValue * rate;
        currentValue += yearGrowth;
        totalGrowth += yearGrowth;
        rows.push({ label: `Year ${i}`, value: formatCurrency(yearGrowth) });
      }
      
      totalLabel = "Total Estimated Growth";
      totalValue = formatCurrency(totalGrowth);
      finalBlockLabel = `Estimated investment value after ${numYears} years`;
      finalBlockValue = formatCurrency(currentValue);
      finalBlockSub = "Based on 12.6% p.a.";
      
    } else if (option === 'Fixed Return Income Option') {
      const rate = 0.126;
      rateHeading = "Rate of Return of 12.6% p.a.";
      disclaimer += " Income estimates are shown before tax and may differ from final product outcomes. Capital protection applies only where expressly stated in the formal product documentation and only if the product is held until maturity. The relevant security is not guaranteed by any party.";
      calcNote = "Below dividend figures are estimates based on the selected product assumptions and shown before tax, unless stated otherwise.";
      
      const annualIncome = numAmount * rate;
      const monthlyIncome = annualIncome / 12;
      const totalIncome = monthlyIncome * numMonths;
      
      rows.push({ label: "Estimated Monthly Income", value: formatCurrency(monthlyIncome) });
      rows.push({ label: "Estimated Annual Income", value: formatCurrency(annualIncome) });
      rows.push({ label: `Estimated Total Income Over ${numMonths} Months`, value: formatCurrency(totalIncome) });
      
      if (numAmount >= 1000000) {
        rows.push({ label: "Estimated Annual Bonus", value: formatCurrency(numAmount * 0.01), isBonus: true });
      }
      
      finalBlockLabel = "Estimated gross monthly income";
      finalBlockValue = formatCurrency(monthlyIncome);
      finalBlockSub = "Based on 12.6% p.a.";
      
    } else if (option === 'Offshore Global Option') {
      const rate = 0.07;
      rateHeading = "Scenario Assumption of 7% p.a.";
      calcNote = "Below figures are scenario estimates based on the selected offshore assumption and shown before tax, unless stated otherwise. This estimate is based on the selected 7% p.a. scenario assumption. Participation terms are subject to formal product documentation.";
      disclaimer += " Offshore investment outcomes may be affected by currency movement, market performance, product structure and formal product terms.";
      
      let currentValue = numAmount;
      let totalGrowth = 0;
      
      for (let i = 1; i <= numYears; i++) {
        const yearGrowth = currentValue * rate;
        currentValue += yearGrowth;
        totalGrowth += yearGrowth;
        rows.push({ label: `Year ${i}`, value: formatCurrency(yearGrowth) });
      }
      
      totalLabel = "Total Estimated Growth";
      totalValue = formatCurrency(totalGrowth);
      finalBlockLabel = `Estimated offshore scenario value after ${numYears} years`;
      finalBlockValue = formatCurrency(currentValue);
      finalBlockSub = "Based on a 7% p.a. average return assumption";
    }

    setResultData({
      option,
      rateHeading,
      calcNote,
      disclaimer,
      rows,
      totalLabel,
      totalValue,
      initialLabel,
      initialValue,
      finalBlockLabel,
      finalBlockValue,
      finalBlockSub
    });
    setHasCalculated(true);
  };

  return (
    <section id="calculator" className="py-20 lg:py-32 bg-off-white border-y border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="bg-white border border-border-grey max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: Form & CTA */}
            <div className="p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-border-grey">
              <form onSubmit={handleCalculate} className="space-y-6">
                {!lockedProduct && (
                  <div>
                    <label htmlFor="option" className="block text-xs font-sans uppercase tracking-widest text-muted-blue mb-3 font-semibold">
                      Investment Category
                    </label>
                    <div className="relative">
                      <select
                        id="option"
                        value={option}
                        onChange={(e) => {
                          setOption(e.target.value);
                          setHasCalculated(false);
                          setResultData(null);
                          setValidationError('');
                          if (e.target.value === 'Private Equity Flexible Access Option') {
                            setFlexMode('dividend');
                            setPeriod('12');
                          }
                        }}
                        className="w-full p-4 border border-border-grey font-sans text-ink appearance-none bg-white rounded-none focus:outline-none focus:border-navy"
                      >
                        <option value="Private Equity Growth Option">Private Equity Growth Option</option>
                        <option value="Private Equity Income Option">Private Equity Income Option</option>
                        <option value="Private Equity Flexible Access Option">Private Equity Flexible Access Option</option>
                        <option value="Fixed Return Growth Option">Fixed Return Growth Option</option>
                        <option value="Fixed Return Income Option">Fixed Return Income Option</option>
                        <option value="Offshore Global Option">Offshore Global Option</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-blue">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="amount" className="block text-xs font-sans uppercase tracking-widest text-muted-blue mb-3 font-semibold">
                    Estimated Amount (ZAR)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setValidationError('');
                    }}
                    placeholder="e.g. 500000"
                    className="w-full p-4 border border-border-grey font-sans text-ink placeholder:text-muted-blue/50 rounded-none focus:outline-none focus:border-navy"
                  />
                  {validationError && (
                    <p className="text-red-500 text-sm mt-2 font-sans">{validationError}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="period" className="block text-xs font-sans uppercase tracking-widest text-muted-blue mb-3 font-semibold">
                    Investment Period
                  </label>
                  {lockedProduct ? (
                    <div className="w-full p-4 border border-border-grey font-sans text-muted-blue bg-soft-grey cursor-not-allowed">
                      {period === '12' ? '12 months' : period === '24' ? '24 months' : period === '36' ? '36 months' : '60 months'}
                    </div>
                  ) : (
                    <div className="relative">
                      <select
                        id="period"
                        value={period}
                        onChange={(e) => {
                          setPeriod(e.target.value);
                          setHasCalculated(false);
                          setResultData(null);
                        }}
                        className="w-full p-4 border border-border-grey font-sans text-ink appearance-none bg-white rounded-none focus:outline-none focus:border-navy"
                      >
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                        <option value="36">36 months</option>
                        <option value="60">60 months</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-blue">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  )}
                </div>

                {isFlexibleAccess && (
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-muted-blue mb-3 font-semibold">
                      What are you interested in?
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className={`flex-1 border p-4 cursor-pointer transition-colors text-sm font-sans font-medium flex items-center gap-3 ${flexMode === 'growth' ? 'border-navy bg-navy/5 text-navy' : 'border-border-grey text-muted-blue hover:border-navy/50'}`}>
                        <input 
                          type="radio" 
                          name="flexMode" 
                          value="growth" 
                          checked={flexMode === 'growth'} 
                          onChange={() => { setFlexMode('growth'); setHasCalculated(false); setResultData(null); }} 
                          className="w-4 h-4 text-navy focus:ring-navy border-border-grey accent-navy"
                        />
                        Growth on Capital
                      </label>
                      <label className={`flex-1 border p-4 cursor-pointer transition-colors text-sm font-sans font-medium flex items-center gap-3 ${flexMode === 'dividend' ? 'border-navy bg-navy/5 text-navy' : 'border-border-grey text-muted-blue hover:border-navy/50'}`}>
                        <input 
                          type="radio" 
                          name="flexMode" 
                          value="dividend" 
                          checked={flexMode === 'dividend'} 
                          onChange={() => { setFlexMode('dividend'); setHasCalculated(false); setResultData(null); }} 
                          className="w-4 h-4 text-navy focus:ring-navy border-border-grey accent-navy"
                        />
                        Monthly Dividend on Capital
                      </label>
                    </div>
                  </div>
                )}

                <button 
                  type="submit"
                  className="w-full bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors flex items-center justify-center cursor-pointer uppercase tracking-wider mt-4"
                >
                  Calculate an Estimate
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-border-grey">
                <p className="text-sm font-sans text-ink leading-relaxed mb-6 font-medium">
                  For a detailed discussion, submit an enquiry and the team will contact you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-navy text-white px-6 py-3 text-[13px] font-bold hover:bg-ink transition-colors flex items-center justify-center text-center uppercase tracking-wider flex-1">
                    Start an Enquiry
                  </Link>
                  <Link href="/investments" className="border border-border-grey text-navy px-6 py-3 text-[13px] font-bold hover:bg-soft-grey transition-colors flex items-center justify-center text-center uppercase tracking-wider flex-1">
                    Compare Options
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Results Panel */}
            <div className="bg-navy text-white p-6 md:p-10 lg:p-12 flex flex-col min-h-[500px]">
              {hasCalculated && resultData ? (
                <div className="flex-1 flex flex-col">
                  <div className="mb-8">
                    <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-2">{resultData.option}</span>
                    <h3 className="text-2xl font-serif text-white">{resultData.rateHeading}</h3>
                    <p className="text-xs font-sans text-soft-grey/80 mt-3 leading-relaxed italic border-l-2 border-white/20 pl-3">
                      {resultData.calcNote}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-1">
                    {resultData.rows.map((row, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-3">
                        <span className={`text-sm font-sans text-soft-grey/90 ${row.isBonus ? 'text-green-400' : ''}`}>{row.label}</span>
                        <span className={`text-sm font-sans font-medium text-white ${row.isBonus ? 'text-green-400' : ''}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-6 space-y-4 mb-8">
                    {resultData.totalLabel && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-sans text-soft-grey/90">{resultData.totalLabel}</span>
                        <span className="text-sm font-sans font-bold text-white">{resultData.totalValue}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-sans text-soft-grey/90">{resultData.initialLabel}</span>
                      <span className="text-sm font-sans font-bold text-white">{resultData.initialValue}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-6 border border-white/20 mt-auto">
                    <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/80 mb-2">{resultData.finalBlockLabel}</span>
                    <span className="block text-3xl md:text-4xl font-serif text-white mb-2 break-all">{resultData.finalBlockValue}</span>
                    <span className="block text-xs font-sans text-soft-grey/70">{resultData.finalBlockSub}</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center h-full opacity-70 m-auto py-12">
                  <p className="text-sm font-sans uppercase tracking-widest mb-4">Awaiting Calculation</p>
                  <p className="font-sans text-sm max-w-[240px] leading-relaxed">Enter your details and calculate to view a detailed estimate breakdown.</p>
                </div>
              )}
            </div>

          </div>
        </FadeIn>
        
        {hasCalculated && resultData && resultData.disclaimer && (
          <FadeIn className="max-w-6xl mx-auto mt-6 px-4 md:px-0">
            <p className="text-xs font-sans text-muted-blue leading-relaxed font-normal m-0 italic">
              {resultData.disclaimer}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
