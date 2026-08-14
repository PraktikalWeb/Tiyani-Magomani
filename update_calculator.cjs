const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components/Calculator.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The new handleCalculate block and state
const newLogic = `  const [option, setOption] = useState<string>('Private Equity Growth Option');
  const [amount, setAmount] = useState<string>('');
  const [period, setPeriod] = useState<string>('60'); // 5 years default

  const [hasCalculated, setHasCalculated] = useState(false);
  const [resultData, setResultData] = useState<{
    option: string;
    amount: number;
    months: number;
    isIncome: boolean;
    futureValue?: number;
    growth?: number;
    monthlyIncome?: number;
    totalIncome?: number;
    annualBonus?: number;
  } | null>(null);

  // TODO: Confirm final Offshore Global calculator assumptions before launch. 
  // Reference material contains conflicting offshore figures: product page uses R50,000 / 7% p.a.; calculator reference uses R250,000 / 6.2% p.a.
  // Currently using 7% p.a. to match the product page.
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;

    const numAmount = parseFloat(amount) || 0;
    const numMonths = parseInt(period) || 0;
    const numYears = numMonths / 12;
    
    const isIncome = option.includes('Income') || option.includes('Flexible');

    let futureValue = 0;
    let growth = 0;
    let monthlyIncome = 0;
    let totalIncome = 0;
    let annualBonus = 0;
    
    // Product Logic
    if (option === 'Private Equity Growth Option') {
      const rate = 0.132;
      futureValue = numAmount * Math.pow(1 + rate, numYears);
      growth = futureValue - numAmount;
    } else if (option === 'Private Equity Income Option') {
      const rate = 0.132;
      const annualIncome = numAmount * rate;
      monthlyIncome = annualIncome / 12;
      totalIncome = monthlyIncome * numMonths;
      if (numAmount >= 1000000) {
        annualBonus = numAmount * 0.01;
      }
    } else if (option === 'Private Equity Flexible Access Option') {
      const rate = 0.11;
      const annualIncome = numAmount * rate;
      monthlyIncome = annualIncome / 12;
      totalIncome = monthlyIncome * numMonths;
    } else if (option === 'Fixed Return Growth Option') {
      const rate = 0.126;
      futureValue = numAmount * Math.pow(1 + rate, numYears);
      growth = futureValue - numAmount;
    } else if (option === 'Fixed Return Income Option') {
      const rate = 0.126;
      const annualIncome = numAmount * rate;
      monthlyIncome = annualIncome / 12;
      totalIncome = monthlyIncome * numMonths;
      if (numAmount >= 1000000) {
        annualBonus = numAmount * 0.01;
      }
    } else if (option === 'Offshore Global Option') {
      const rate = 0.07;
      futureValue = numAmount * Math.pow(1 + rate, numYears);
      growth = futureValue - numAmount;
    }

    setResultData({
      option,
      amount: numAmount,
      months: numMonths,
      isIncome,
      futureValue,
      growth,
      monthlyIncome,
      totalIncome,
      annualBonus
    });
    setHasCalculated(true);
  };`;

// Replace the existing block
const regex = /  const \[option, setOption\] = useState[\s\S]*?setHasCalculated\(true\);\n  };/;
if (regex.test(content)) {
  content = content.replace(regex, newLogic);
} else {
  console.log("Could not find handleCalculate to replace!");
}

// Update calculator disclaimer wording near the outputs
// We'll just replace "Results are estimates only..." globally in the file for safety.
content = content.replace(/Results are estimates only and do not represent guaranteed returns./g, "Calculator results are estimates only and are shown for general information purposes. They do not constitute financial advice or guaranteed returns. Final figures may differ and are subject to formal product documentation.");

// Fix wording inside Results block
// e.g. "Estimated Future Value" -> "Estimated future value"
content = content.replace(/Estimated Future Value/g, "Estimated future value");
content = content.replace(/Estimated Total Growth/g, "Estimated growth");
content = content.replace(/Estimated Monthly Income/g, "Estimated gross monthly income");
content = content.replace(/Estimated Total Income/g, "Estimated total income");

// Add annual bonus to output if present
const annualBonusJSX = `                    <div className="flex justify-between items-center py-4 border-b border-border-grey">
                      <span className="text-sm font-sans uppercase tracking-widest text-muted-blue">Estimated annual bonus</span>
                      <span className="text-xl font-serif text-ink">{formatCurrency(resultData.annualBonus)}</span>
                    </div>
                  )}
                  {resultData.isIncome && (`;
content = content.replace(/                  \{resultData.isIncome && \(/, annualBonusJSX.replace(')}', ')\n                  {resultData.annualBonus > 0 && ('));


fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated Calculator.tsx');
