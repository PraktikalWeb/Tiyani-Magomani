const fs = require('fs');
const path = require('path');

// 1. REWRITE CalculatorEngine.tsx
const enginePath = path.join('components', 'CalculatorEngine.tsx');
let engineCode = fs.readFileSync(enginePath, 'utf8');

// Add nettBlockLabel, nettBlockValue, nettBlockSub to resultData type
engineCode = engineCode.replace(
  /finalBlockLabel: string;\s*finalBlockValue: string;\s*finalBlockSub: string;/g,
  `finalBlockLabel: string;\n    finalBlockValue: string;\n    finalBlockSub: string;\n    nettBlockLabel?: string;\n    nettBlockValue?: string;\n    nettBlockSub?: string;`
);

// Add initialization of nett fields
engineCode = engineCode.replace(
  /let finalBlockSub = "";/g,
  `let finalBlockSub = "";\n    let nettBlockLabel = "";\n    let nettBlockValue = "";\n    let nettBlockSub = "";`
);

// Update Private Equity Income Option
const peIncomeLogic = `      const rate = 0.132;
      rateHeading = "Performance Rate of 13.2% p.a.";
      disclaimer += " Income estimates are shown before tax and may differ from final product outcomes. Nett figures use an assumed 20% tax deduction and are shown for estimate purposes only. Final tax treatment depends on formal product documentation and the client’s tax position.";
      calcNote = "Below dividend figures are estimates based on the selected product assumptions and shown before tax, unless stated otherwise.";
      
      const annualIncome = numAmount * rate;
      const monthlyIncome = annualIncome / 12;
      
      const grossMonthlyCents = Math.round(monthlyIncome * 100) / 100;
      const nettMonthlyCents = Math.round(grossMonthlyCents * 0.8 * 100) / 100;
      
      const grossAnnual = numAmount * rate;
      const nettAnnual = grossAnnual * 0.8;
      const totalGross = grossAnnual * (numMonths / 12);
      
      rows.push({ label: "Estimated Gross Monthly Income", value: formatCurrency(grossMonthlyCents) });
      rows.push({ label: "Estimated Nett Monthly Income", value: formatCurrency(nettMonthlyCents) });
      rows.push({ label: "Estimated Gross Annual Income", value: formatCurrency(grossAnnual) });
      rows.push({ label: "Estimated Nett Annual Income", value: formatCurrency(nettAnnual) });
      rows.push({ label: "Estimated Total Gross Income Over Term", value: formatCurrency(totalGross) });
      
      if (numAmount >= 1000000) {
        rows.push({ label: "Estimated Annual Bonus", value: formatCurrency(numAmount * 0.01), isBonus: true });
      }
      
      finalBlockLabel = "Gross Projected Monthly Income";
      finalBlockValue = formatCurrency(grossMonthlyCents);
      finalBlockSub = "per month before tax";
      
      nettBlockLabel = "Nett Projected Monthly Income";
      nettBlockValue = formatCurrency(nettMonthlyCents);
      nettBlockSub = "per month after tax";`;

engineCode = engineCode.replace(
  /\} else if \(option === 'Private Equity Income Option'\) \{[\s\S]*?finalBlockSub = "Based on 13\.2% p\.a\.";\s*\}/,
  `} else if (option === 'Private Equity Income Option') {\n${peIncomeLogic}\n    }`
);

// Update Private Equity Flexible Access Option
const peFlexLogic = `      if (flexMode === 'dividend') {
        disclaimer += " Flexible access refers to access to available accrued interest, subject to formal product terms. Income and dividend estimates are shown before tax unless marked otherwise. Final tax treatment may differ. Nett figures use an assumed 20% tax deduction and are shown for estimate purposes only. Final tax treatment depends on formal product documentation and the client’s tax position.";
        calcNote = "Below dividend figures are estimates based on the selected product assumptions and shown before tax, unless stated otherwise.";
        
        const annualDividend = numAmount * rate;
        const monthlyDividend = annualDividend / 12;
        
        const grossMonthlyCents = Math.round(monthlyDividend * 100) / 100;
        const nettMonthlyCents = Math.round(grossMonthlyCents * 0.8 * 100) / 100;
        
        const grossAnnual = numAmount * rate;
        const nettAnnual = grossAnnual * 0.8;
        const totalGross = grossAnnual * (numMonths / 12);
        
        rows.push({ label: "Estimated Gross Monthly Dividend", value: formatCurrency(grossMonthlyCents) });
        rows.push({ label: "Estimated Nett Monthly Dividend", value: formatCurrency(nettMonthlyCents) });
        rows.push({ label: "Estimated Gross Annual Dividend", value: formatCurrency(grossAnnual) });
        rows.push({ label: "Estimated Nett Annual Dividend", value: formatCurrency(nettAnnual) });
        rows.push({ label: "Estimated Total Gross Dividend Over 12 Months", value: formatCurrency(totalGross) });
        
        finalBlockLabel = "Gross Projected Monthly Dividend";
        finalBlockValue = formatCurrency(grossMonthlyCents);
        finalBlockSub = "per month before tax";
        
        nettBlockLabel = "Nett Projected Monthly Dividend";
        nettBlockValue = formatCurrency(nettMonthlyCents);
        nettBlockSub = "per month after tax";
      } else {`;

engineCode = engineCode.replace(
  /if \(flexMode === 'dividend'\) \{[\s\S]*?finalBlockSub = "Based on 11% p\.a\.";\s*\} else \{/,
  `${peFlexLogic}`
);

// Add the nett fields to setResultData
engineCode = engineCode.replace(
  /finalBlockValue,\n\s*finalBlockSub\n\s*\}\);/,
  `finalBlockValue,\n      finalBlockSub,\n      nettBlockLabel,\n      nettBlockValue,\n      nettBlockSub\n    });`
);

// Render the nett blocks in the UI
const renderBlocks = `                  {resultData.nettBlockLabel ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto pt-4 md:pt-0">
                      <div className="bg-white/10 p-5 md:p-6 border border-white/20">
                        <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/80 mb-2">{resultData.finalBlockLabel}</span>
                        <span className="block text-3xl font-serif text-white mb-2 break-all">{resultData.finalBlockValue}</span>
                        <span className="block text-xs font-sans text-soft-grey/70">{resultData.finalBlockSub}</span>
                      </div>
                      <div className="bg-white/10 p-5 md:p-6 border border-white/20">
                        <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/80 mb-2">{resultData.nettBlockLabel}</span>
                        <span className="block text-3xl font-serif text-white mb-2 break-all">{resultData.nettBlockValue}</span>
                        <span className="block text-xs font-sans text-soft-grey/70">{resultData.nettBlockSub}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white/10 p-6 border border-white/20 mt-auto">
                      <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/80 mb-2">{resultData.finalBlockLabel}</span>
                      <span className="block text-3xl md:text-4xl font-serif text-white mb-2 break-all">{resultData.finalBlockValue}</span>
                      <span className="block text-xs font-sans text-soft-grey/70">{resultData.finalBlockSub}</span>
                    </div>
                  )}`;

engineCode = engineCode.replace(
  /<div className="bg-white\/10 p-6 border border-white\/20 mt-auto">[\s\S]*?<\/div>/,
  renderBlocks
);

fs.writeFileSync(enginePath, engineCode, 'utf8');


// 2. REWRITE InvestmentComparisonCalculator.tsx
const comparePath = path.join('components', 'InvestmentComparisonCalculator.tsx');
let compareCode = fs.readFileSync(comparePath, 'utf8');

const updatedCompareUI = `                const estimatedValue = calculateResult(product, amount);
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

compareCode = compareCode.replace(
  /const estimatedValue = calculateResult\(product, amount\);[\s\S]*?\{\/\* END OF REPLACE \*\//g, // wait I need a safe regex for this block
  updatedCompareUI // I will use a different matching strategy.
);

// Actually string replacement for Compare is safer line-by-line or using multi_replace_file_content.
// Let me write the script to just output a file and then I will use multi_replace for compare component.
// Wait, I can just write it via script cleanly if I match the exact block.
const blockToReplace = `                const estimatedValue = calculateResult(product, amount);
                const hasBonus = product.bonusRule && amount >= 1000000;
                
                return (
                  <div key={product.id} className="bg-soft-grey border border-border-grey p-8 flex flex-col hover:border-navy transition-colors">
                    <div className="mb-6 flex-grow">
                      <h4 className="text-xl font-serif text-ink mb-2">{product.name}</h4>
                      <p className="text-sm font-sans text-muted-blue mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex gap-3 mb-6 flex-wrap">
                        <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{product.termMonths / 12} Years</span>
                        <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{(product.rate * 100).toFixed(1)}% p.a.</span>
                      </div>
                      
                      <div className="bg-white border border-border-grey p-6 text-center">
                        <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">{product.resultLabel}</span>
                        <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(estimatedValue)}</span>
                        <span className="block text-sm font-sans text-muted-blue">{product.supportingLabel}</span>
                        
                        {hasBonus && (
                          <div className="mt-4 pt-4 border-t border-border-grey">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-1">Estimated Annual Bonus</span>
                            <span className="block text-xl font-serif text-navy">{formatCurrency(amount * 0.01)}</span>
                          </div>
                        )}
                      </div>`;

compareCode = compareCode.replace(blockToReplace, updatedCompareUI);

// Add the tax disclaimer to compare results page
compareCode = compareCode.replace(
  /Income and dividend estimates are shown before tax unless marked otherwise\. Final tax treatment may differ\./g,
  `Income and dividend estimates are shown before tax unless marked otherwise. Final tax treatment may differ. Nett figures use an assumed 20% tax deduction and are shown for estimate purposes only. Final tax treatment depends on formal product documentation and the client’s tax position.`
);

fs.writeFileSync(comparePath, compareCode, 'utf8');

console.log("Rewrote calculator files");
