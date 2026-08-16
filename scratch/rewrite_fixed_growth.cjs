const fs = require('fs');
const path = require('path');

const enginePath = path.join('components', 'CalculatorEngine.tsx');
let engineCode = fs.readFileSync(enginePath, 'utf8');

// 1. Add isFixedReturnGrowth
engineCode = engineCode.replace(
  /const isFixedReturnIncome = \(lockedProduct && productId === 'fixed-return-income'\) \|\| \(!lockedProduct && option === 'Fixed Return Income Option'\);/,
  `$&
  const isFixedReturnGrowth = (lockedProduct && productId === 'fixed-return-growth') || (!lockedProduct && option === 'Fixed Return Growth Option');`
);

// 2. Update defaultPeriod
engineCode = engineCode.replace(
  /const defaultPeriod = \(lockedProduct && productId === 'private-equity-flexible-access'\) \? '12' : \(lockedProduct && productId === 'fixed-return-income'\) \? '24' : '60';/,
  `const defaultPeriod = (lockedProduct && productId === 'private-equity-flexible-access') ? '12' : (lockedProduct && (productId === 'fixed-return-income' || productId === 'fixed-return-growth')) ? '24' : '60';`
);

// 3. Update onChange default for period
engineCode = engineCode.replace(
  /if \(e\.target\.value === 'Fixed Return Income Option'\) \{ setPeriod\('24'\); \}/,
  `if (e.target.value === 'Fixed Return Income Option' || e.target.value === 'Fixed Return Growth Option') { setPeriod('24'); }`
);

// 4. Update the hidden logic for generic dropdown
engineCode = engineCode.replace(
  /\{!isFixedReturnIncome && \(/,
  `{!isFixedReturnIncome && !isFixedReturnGrowth && (`
);

// 5. Share the term selector for Fixed Return Growth
engineCode = engineCode.replace(
  /\{isFixedReturnIncome && \(/,
  `{(isFixedReturnIncome || isFixedReturnGrowth) && (`
);

// 6. Update the Fixed Return Growth calc block
const fixedGrowthLogic = `      const rate = period === '24' ? 0.118 : 0.126;
      const numYears = period === '24' ? 2 : 5;
      
      rateHeading = \`Rate of Return of \${(rate * 100).toFixed(1)}% p.a.\`;
      disclaimer += " Capital protection applies only where expressly stated in the formal product documentation and only if the product is held until maturity. The relevant security is not guaranteed by any party.";
      calcNote = "Below figures are calculation estimates based on the selected product assumptions and shown before tax, unless stated otherwise.";
      
      let currentValue = numAmount;
      let totalGrowth = 0;
      
      for (let i = 1; i <= numYears; i++) {
        const yearGrowth = currentValue * rate;
        currentValue += yearGrowth;
        totalGrowth += yearGrowth;
        rows.push({ label: \`Year \${i} Estimated Growth\`, value: formatCurrency(yearGrowth) });
      }
      
      totalLabel = "Total Estimated Growth";
      totalValue = formatCurrency(totalGrowth);
      finalBlockLabel = \`Estimated investment value after \${numYears} years\`;
      finalBlockValue = formatCurrency(currentValue);
      finalBlockSub = "Capital protection at maturity, subject to formal product terms.";`;

engineCode = engineCode.replace(
  /\} else if \(option === 'Fixed Return Growth Option'\) \{[\s\S]*?finalBlockSub = "Based on 12\.6% p\.a\.";\s*\}/,
  `} else if (option === 'Fixed Return Growth Option') {\n${fixedGrowthLogic}\n    }`
);

fs.writeFileSync(enginePath, engineCode, 'utf8');
console.log("Updated Fixed Return Growth");
