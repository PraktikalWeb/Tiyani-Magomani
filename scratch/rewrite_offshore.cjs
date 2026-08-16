const fs = require('fs');
const path = require('path');

// ====================================================
// 1. REWRITE CalculatorEngine.tsx
// ====================================================
const enginePath = path.join('components', 'CalculatorEngine.tsx');
let engineCode = fs.readFileSync(enginePath, 'utf8');

// Update state type to include offshore fields
engineCode = engineCode.replace(
  /nettBlockSub\?: string;/,
  `nettBlockSub?: string;\n    isOffshore?: boolean;\n    scenario1Value?: string;\n    scenario2Value?: string;\n    scenario1Return?: string;\n    scenario2Return?: string;`
);

// Add these to setResultData initialiser in Offshore block
const offshoreEngineLogic = `    } else if (option === 'Offshore Global Option') {
      const baseReturn = 0.07 * 5 * 2; // 70%
      const currencyFactor = 21 / 18; // 1.1666667
      const scenario2Return = baseReturn * currencyFactor;
      
      const scenario1Value = numAmount * (1 + baseReturn);
      const scenario2Value = numAmount * (1 + scenario2Return);
      
      rateHeading = "Scenario Assumption of 7% p.a.";
      calcNote = "";
      disclaimer += " Offshore investment outcomes may be affected by currency movement, market performance, product structure and formal product terms.";
      
      setResultData({
        option,
        rateHeading,
        calcNote,
        disclaimer,
        rows: [],
        initialLabel: "Initial Investment",
        initialValue: formatCurrency(numAmount),
        finalBlockLabel: "",
        finalBlockValue: "",
        finalBlockSub: "",
        isOffshore: true,
        scenario1Value: formatCurrency(scenario1Value),
        scenario2Value: formatCurrency(scenario2Value),
        scenario1Return: "70%",
        scenario2Return: (scenario2Return * 100).toFixed(2) + "%"
      });
      return;
    }`;

engineCode = engineCode.replace(
  /\} else if \(option === 'Offshore Global Option'\) \{[\s\S]*?finalBlockSub = "Based on a 7% p\.a\. average return assumption";\s*\}/,
  offshoreEngineLogic
);

// Update UI in CalculatorEngine.tsx
const offshoreUIRender = `              {resultData.isOffshore ? (
                <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-[600px] mx-auto md:max-w-none px-4 md:px-0">
                  <div className="border-b border-white/20 pb-6 mb-8 text-center md:text-left">
                    <span className="text-soft-grey text-sm font-sans uppercase tracking-widest block mb-2">Offshore Scenario Estimate</span>
                    <h4 className="text-3xl md:text-4xl font-serif text-white">{resultData.rateHeading}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto mb-8">
                    <div className="bg-white/10 p-6 border border-white/20">
                      <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/80 mb-2">Scenario 1: Rand Stays Flat</span>
                      <span className="block text-sm font-sans text-soft-grey/90 mb-4 border-b border-white/10 pb-4">
                        Based on average return of 7% p.a.<br/>
                        USD/ZAR = R18.00 at Investment<br/>
                        USD/ZAR = R18.00 at Maturity
                      </span>
                      <span className="block text-sm font-sans text-soft-grey/80 mb-1">Estimated {resultData.scenario1Return} Return at Maturity</span>
                      <span className="block text-3xl font-serif text-white mb-2 break-all">{resultData.scenario1Value}</span>
                      <span className="block text-xs font-sans text-soft-grey/70">As ZAR Value</span>
                    </div>
                    
                    <div className="bg-white/10 p-6 border border-white/20">
                      <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/80 mb-2">Scenario 2: Rand Depreciates</span>
                      <span className="block text-sm font-sans text-soft-grey/90 mb-4 border-b border-white/10 pb-4">
                        Based on average return of 7% p.a.<br/>
                        USD/ZAR = R18.00 at Investment<br/>
                        USD/ZAR = R21.00 at Maturity
                      </span>
                      <span className="block text-sm font-sans text-soft-grey/80 mb-1">Estimated {resultData.scenario2Return} Return at Maturity</span>
                      <span className="block text-3xl font-serif text-white mb-2 break-all">{resultData.scenario2Value}</span>
                      <span className="block text-xs font-sans text-soft-grey/70">As ZAR Value</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 border border-white/20 text-center">
                    <span className="block text-xs font-sans text-soft-grey/80">Capital return at maturity is subject to formal product terms.</span>
                  </div>
                </div>
              ) : resultData.rows.length > 0 ? (`;

engineCode = engineCode.replace(
  /\{resultData\.rows\.length > 0 \? \(/,
  offshoreUIRender
);

fs.writeFileSync(enginePath, engineCode, 'utf8');


// ====================================================
// 2. REWRITE InvestmentComparisonCalculator.tsx
// ====================================================
const comparePath = path.join('components', 'InvestmentComparisonCalculator.tsx');
let compareCode = fs.readFileSync(comparePath, 'utf8');

const compareCalcOffshore = `      case 'offshore-scenario':
        const baseRet = 0.07 * 5 * 2;
        return principal * (1 + baseRet); // Defaulting to Scenario 1 value for sorting/general needs`;

compareCode = compareCode.replace(
  /case 'offshore-scenario':[\s\S]*?return principal \+ \(principal \* 0\.07 \* \(product\.termMonths \/ 12\) \* 2\);/,
  compareCalcOffshore
);

const compareOffshoreBlock = `                const isOffshore = product.calculationType === 'offshore-scenario';
                
                let offshoreScenario1 = 0;
                let offshoreScenario2 = 0;
                
                if (isOffshore) {
                  const baseRet = 0.07 * 5 * 2;
                  const curFactor = 21 / 18;
                  const ret2 = baseRet * curFactor;
                  offshoreScenario1 = amount * (1 + baseRet);
                  offshoreScenario2 = amount * (1 + ret2);
                }`;

compareCode = compareCode.replace(
  /const isFlexibleAccessIncome = product\.id === 'private-equity-flexible-access';/,
  `$&
${compareOffshoreBlock}`
);

const compareOffshoreUIRender = `                      {isOffshore ? (
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Scenario 1: Rand Stays Flat</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(offshoreScenario1)}</span>
                            <span className="block text-sm font-sans text-muted-blue">As ZAR Value</span>
                          </div>
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Scenario 2: Rand Depreciates</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(offshoreScenario2)}</span>
                            <span className="block text-sm font-sans text-muted-blue">As ZAR Value</span>
                          </div>
                        </div>
                      ) : isNettMode ? (`

compareCode = compareCode.replace(
  /\{isNettMode \? \(/,
  compareOffshoreUIRender
);

fs.writeFileSync(comparePath, compareCode, 'utf8');

console.log("Updated Offshore Global calculations and UI in both components.");
