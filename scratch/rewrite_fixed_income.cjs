const fs = require('fs');
const path = require('path');

// 1. REWRITE CalculatorEngine.tsx
const enginePath = path.join('components', 'CalculatorEngine.tsx');
let engineCode = fs.readFileSync(enginePath, 'utf8');

// Update defaultPeriod logic
engineCode = engineCode.replace(
  /const defaultPeriod = \(lockedProduct && productId === 'private-equity-flexible-access'\) \? '12' : '60';/,
  `const defaultPeriod = (lockedProduct && productId === 'private-equity-flexible-access') ? '12' : (lockedProduct && productId === 'fixed-return-income') ? '24' : '60';`
);

// Add isFixedReturnIncome boolean
engineCode = engineCode.replace(
  /const isFlexibleAccess = \(lockedProduct && productId === 'private-equity-flexible-access'\) \|\| \(!lockedProduct && option === 'Private Equity Flexible Access Option'\);/,
  `const isFlexibleAccess = (lockedProduct && productId === 'private-equity-flexible-access') || (!lockedProduct && option === 'Private Equity Flexible Access Option');\n  const isFixedReturnIncome = (lockedProduct && productId === 'fixed-return-income') || (!lockedProduct && option === 'Fixed Return Income Option');`
);

// Default to 24 months when switching manually
engineCode = engineCode.replace(
  /if \(e.target.value === 'Private Equity Flexible Access Option'\) \{/,
  `if (e.target.value === 'Fixed Return Income Option') { setPeriod('24'); }\n                          if (e.target.value === 'Private Equity Flexible Access Option') {`
);

// Hide generic period dropdown for fixed return income
engineCode = engineCode.replace(
  /<div>\s*<label htmlFor="period" className="block text-xs font-sans uppercase tracking-widest text-muted-blue mb-3 font-semibold">\s*Investment Period\s*<\/label>/,
  `{!isFixedReturnIncome && (\n                <div>\n                  <label htmlFor="period" className="block text-xs font-sans uppercase tracking-widest text-muted-blue mb-3 font-semibold">\n                    Investment Period\n                  </label>`
);

engineCode = engineCode.replace(
  /<\/select>\s*<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-blue">\s*<svg.*?<\/svg>\s*<\/div>\s*<\/div>\s*\)}\s*<\/div>/s,
  `$&` // wait this is tricky to match
);
// Easier: replace the whole div
const oldPeriodDiv = `                <div>
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
                </div>`;
const newPeriodDiv = `                {!isFixedReturnIncome && (
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
                )}`;
engineCode = engineCode.replace(oldPeriodDiv, newPeriodDiv);

// Inject term selector for Fixed Return Income
const termSelector = `                {isFixedReturnIncome && (
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-muted-blue mb-3 font-semibold">
                      What term do you require?
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className={\`flex-1 border p-4 cursor-pointer transition-colors text-sm font-sans font-medium flex items-center gap-3 \${period === '24' ? 'border-navy bg-navy/5 text-navy' : 'border-border-grey text-muted-blue hover:border-navy/50'}\`}>
                        <input 
                          type="radio" 
                          name="fixedTerm" 
                          value="24" 
                          checked={period === '24'} 
                          onChange={() => { setPeriod('24'); setHasCalculated(false); setResultData(null); }} 
                          className="w-4 h-4 text-navy focus:ring-navy border-border-grey accent-navy"
                        />
                        2 Year Term
                      </label>
                      <label className={\`flex-1 border p-4 cursor-pointer transition-colors text-sm font-sans font-medium flex items-center gap-3 \${period === '60' ? 'border-navy bg-navy/5 text-navy' : 'border-border-grey text-muted-blue hover:border-navy/50'}\`}>
                        <input 
                          type="radio" 
                          name="fixedTerm" 
                          value="60" 
                          checked={period === '60'} 
                          onChange={() => { setPeriod('60'); setHasCalculated(false); setResultData(null); }} 
                          className="w-4 h-4 text-navy focus:ring-navy border-border-grey accent-navy"
                        />
                        5 Year Term
                      </label>
                    </div>
                  </div>
                )}`;

engineCode = engineCode.replace(
  /\{isFlexibleAccess && \(/,
  `${termSelector}\n\n                {isFlexibleAccess && (`
);

// Update Fixed Return Income Option Logic
const fixedIncomeLogic = `      const rate = period === '24' ? 0.118 : 0.126;
      const numYears = period === '24' ? 2 : 5;
      const bonusRate = period === '24' ? 0.006 : 0.01;
      
      rateHeading = \`Rate of Return of \${(rate * 100).toFixed(1)}% p.a.\`;
      disclaimer += " Income estimates are shown before tax and may differ from final product outcomes. Capital protection at maturity, subject to formal product terms. Nett figures use an assumed 20% tax deduction and are shown for estimate purposes only. Final tax treatment depends on formal product documentation and the client’s tax position.";
      calcNote = "Below dividend figures are estimates based on the selected product assumptions and shown before tax, unless stated otherwise.";
      
      const annualIncome = numAmount * rate;
      const monthlyIncome = annualIncome / 12;
      
      const grossMonthlyCents = Math.round(monthlyIncome * 100) / 100;
      const nettMonthlyCents = Math.round(grossMonthlyCents * 0.8 * 100) / 100;
      
      const grossAnnual = numAmount * rate;
      const nettAnnual = grossAnnual * 0.8;
      const totalGross = grossAnnual * numYears;
      const totalNett = nettAnnual * numYears;
      
      const grossBonusCents = Math.round((numAmount * bonusRate) * 100) / 100;
      const nettBonusCents = Math.round(grossBonusCents * 0.8 * 100) / 100;
      
      rows.push({ label: "Estimated Gross Monthly Income", value: formatCurrency(grossMonthlyCents) });
      rows.push({ label: "Estimated Nett Monthly Income", value: formatCurrency(nettMonthlyCents) });
      rows.push({ label: "Estimated Gross Annual Income", value: formatCurrency(grossAnnual) });
      rows.push({ label: "Estimated Nett Annual Income", value: formatCurrency(nettAnnual) });
      rows.push({ label: "Estimated Gross Total Income Over Selected Term", value: formatCurrency(totalGross) });
      rows.push({ label: "Estimated Nett Total Income Over Selected Term", value: formatCurrency(totalNett) });
      
      rows.push({ label: \`Gross Annual Bonus @ \${(bonusRate * 100).toFixed(1)}%\`.replace('.0%', '%'), value: formatCurrency(grossBonusCents), isBonus: true });
      rows.push({ label: \`Nett Annual Bonus @ \${(bonusRate * 100).toFixed(1)}%\`.replace('.0%', '%'), value: formatCurrency(nettBonusCents), isBonus: true });
      
      finalBlockLabel = "Gross Projected Monthly Income";
      finalBlockValue = formatCurrency(grossMonthlyCents);
      finalBlockSub = "per month before tax";
      
      nettBlockLabel = "Nett Projected Monthly Income";
      nettBlockValue = formatCurrency(nettMonthlyCents);
      nettBlockSub = "per month after tax";`;

engineCode = engineCode.replace(
  /\} else if \(option === 'Fixed Return Income Option'\) \{[\s\S]*?finalBlockSub = "Based on 12\.6% p\.a\.";\s*\}/,
  `} else if (option === 'Fixed Return Income Option') {\n${fixedIncomeLogic}\n    }`
);

fs.writeFileSync(enginePath, engineCode, 'utf8');


// 2. REWRITE InvestmentComparisonCalculator.tsx
const comparePath = path.join('components', 'InvestmentComparisonCalculator.tsx');
let compareCode = fs.readFileSync(comparePath, 'utf8');

const updatedCompareUI = `                const estimatedValue = calculateResult(product, amount);
                const hasBonus = product.bonusRule && amount >= 1000000;
                
                const isFixedReturnIncome = product.id === 'fixed-income' || product.id === 'fixed-2yr-income';
                const is2Year = product.id === 'fixed-2yr-income';
                const isNettMode = product.id === 'private-equity-income' || product.id === 'private-equity-flexible-access' || isFixedReturnIncome;
                const isFlexibleAccessIncome = product.id === 'private-equity-flexible-access';
                
                let grossMonthlyCents = 0;
                let nettMonthlyCents = 0;
                
                if (isNettMode) {
                  grossMonthlyCents = Math.round(estimatedValue * 100) / 100;
                  nettMonthlyCents = Math.round(grossMonthlyCents * 0.8 * 100) / 100;
                }
                
                return (
                  <div key={product.id} className="bg-soft-grey border border-border-grey p-8 flex flex-col hover:border-navy transition-colors">
                    <div className="mb-6 flex-grow">
                      <h4 className="text-xl font-serif text-ink mb-2">{product.name}</h4>
                      <p className="text-sm font-sans text-muted-blue mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex gap-3 mb-6 flex-wrap">
                        <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{product.termMonths / 12} Years</span>
                        <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{(product.rate * 100).toFixed(1)}% p.a.</span>
                      </div>
                      
                      {isNettMode ? (
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Gross Monthly {isFlexibleAccessIncome ? 'Dividend' : 'Income'}</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(grossMonthlyCents)}</span>
                            <span className="block text-sm font-sans text-muted-blue">before tax</span>
                          </div>
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Nett Monthly {isFlexibleAccessIncome ? 'Dividend' : 'Income'}</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(nettMonthlyCents)}</span>
                            <span className="block text-sm font-sans text-muted-blue">after 20% tax est.</span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white border border-border-grey p-6 text-center">
                          <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">{product.resultLabel}</span>
                          <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(estimatedValue)}</span>
                          <span className="block text-sm font-sans text-muted-blue">{product.supportingLabel}</span>
                        </div>
                      )}
                      
                      {hasBonus && !isFlexibleAccessIncome && !isFixedReturnIncome && (
                        <div className="bg-white border border-t-0 border-border-grey p-4 text-center">
                          <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-1">Estimated Annual Bonus</span>
                          <span className="block text-xl font-serif text-navy">{formatCurrency(amount * 0.01)}</span>
                        </div>
                      )}
                      
                      {isFixedReturnIncome && (
                        <div className="grid grid-cols-1 gap-4 mt-4">
                          <div className="bg-white border border-border-grey p-4 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-1">Gross Annual Bonus @ {is2Year ? '0.6%' : '1%'}</span>
                            <span className="block text-xl font-serif text-navy">{formatCurrency(Math.round((amount * (is2Year ? 0.006 : 0.01)) * 100) / 100)}</span>
                          </div>
                          <div className="bg-white border border-border-grey p-4 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-1">Nett Annual Bonus @ {is2Year ? '0.6%' : '1%'}</span>
                            <span className="block text-xl font-serif text-navy">{formatCurrency(Math.round(Math.round((amount * (is2Year ? 0.006 : 0.01)) * 100) / 100 * 0.8 * 100) / 100)}</span>
                          </div>
                        </div>
                      )}`;

compareCode = compareCode.replace(
  /const estimatedValue = calculateResult\(product, amount\);[\s\S]*?\{\/\* END OF REPLACE \*\//g, 
  '' // wait this won't work, I'll match correctly below
);

const blockToReplace2 = `                const estimatedValue = calculateResult(product, amount);
                const hasBonus = product.bonusRule && amount >= 1000000;
                
                const isNettMode = product.id === 'private-equity-income' || product.id === 'private-equity-flexible-access';
                const isFlexibleAccessIncome = product.id === 'private-equity-flexible-access';
                
                let grossMonthlyCents = 0;
                let nettMonthlyCents = 0;
                
                if (isNettMode) {
                  grossMonthlyCents = Math.round(estimatedValue * 100) / 100;
                  nettMonthlyCents = Math.round(grossMonthlyCents * 0.8 * 100) / 100;
                }
                
                return (
                  <div key={product.id} className="bg-soft-grey border border-border-grey p-8 flex flex-col hover:border-navy transition-colors">
                    <div className="mb-6 flex-grow">
                      <h4 className="text-xl font-serif text-ink mb-2">{product.name}</h4>
                      <p className="text-sm font-sans text-muted-blue mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex gap-3 mb-6 flex-wrap">
                        <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{product.termMonths / 12} Years</span>
                        <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{(product.rate * 100).toFixed(1)}% p.a.</span>
                      </div>
                      
                      {isNettMode ? (
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Gross Monthly {isFlexibleAccessIncome ? 'Dividend' : 'Income'}</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(grossMonthlyCents)}</span>
                            <span className="block text-sm font-sans text-muted-blue">before tax</span>
                          </div>
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Nett Monthly {isFlexibleAccessIncome ? 'Dividend' : 'Income'}</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(nettMonthlyCents)}</span>
                            <span className="block text-sm font-sans text-muted-blue">after 20% tax est.</span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white border border-border-grey p-6 text-center">
                          <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">{product.resultLabel}</span>
                          <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(estimatedValue)}</span>
                          <span className="block text-sm font-sans text-muted-blue">{product.supportingLabel}</span>
                        </div>
                      )}
                      
                      {hasBonus && !isFlexibleAccessIncome && (
                        <div className="bg-white border border-t-0 border-border-grey p-4 text-center">
                          <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-1">Estimated Annual Bonus</span>
                          <span className="block text-xl font-serif text-navy">{formatCurrency(amount * 0.01)}</span>
                        </div>
                      )}`;

compareCode = compareCode.replace(blockToReplace2, updatedCompareUI);

// Fix capital protection text
compareCode = compareCode.replace(
  /Capital protection applies only where expressly stated in the formal product documentation and only if the product is held until maturity\. The relevant security is not guaranteed by any party\./g,
  `Capital protection at maturity, subject to formal product terms.`
);

fs.writeFileSync(comparePath, compareCode, 'utf8');

console.log("Updated Fixed Return Income logic");
