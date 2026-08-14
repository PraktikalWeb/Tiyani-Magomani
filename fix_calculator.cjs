const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components/Calculator.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const missingBlock = `      )}
    </div>
  );
}

export default function Calculator() {
  const [option, setOption] = useState<string>('Private Equity Growth Option');
  const [amount, setAmount] = useState<string>('');
  const [period, setPeriod] = useState<string>('60');

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
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(val);
  };

  return (`;

const regex = /      \)\} \n    <\/div>\n\n  return \(/;
// Wait, the file currently looks like:
// 22:         </div>
// 23: 
// 24:   return (

content = content.replace(/      \)\} \n    <\/div>\n\n  return \(/g, missingBlock);
// Actually it's probably easier to just replace string literals:
content = content.replace("        </div>\n\n  return (", missingBlock.replace("      )}\n    </div>\n  );\n}\n\nexport default function Calculator() {", "        </div>\n      )}\n    </div>\n  );\n}\n\nexport default function Calculator() {"));

// Let me just split and join to be very safe
const parts = content.split('  return (\n    <div className="pt-20">');
if (parts.length === 2) {
  // It split successfully!
  // BUT the first part is missing `      )}` and `    </div>` and `  );` and `}` for the FAQItem
  
  let newFirstPart = parts[0].trim();
  // Ensure it ends correctly
  if (newFirstPart.endsWith('</div>')) {
    newFirstPart += `\n      )}\n    </div>\n  );\n}`;
  }

  // Now append the missingBlock (excluding the `  return (` at the end)
  const fullContent = newFirstPart + '\n\n' + missingBlock.replace('      )}\n    </div>\n  );\n}\n\n', '') + '\n    <div className="pt-20">' + parts[1];
  fs.writeFileSync(filePath, fullContent, 'utf8');
  console.log("Successfully fixed Calculator.tsx!");
} else {
  console.log("Failed to split Calculator.tsx");
}
