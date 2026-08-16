const fs = require('fs');
const path = require('path');

const components = [
  'PrivateEquityGrowth.tsx',
  'PrivateEquityIncome.tsx',
  'PrivateEquityFlexibleAccess.tsx',
  'FixedReturnGrowth.tsx',
  'FixedReturnIncome.tsx',
  'OffshoreGlobal.tsx'
];

let updatedCount = 0;

for (const comp of components) {
  const filePath = path.join('components', comp);
  if (!fs.existsSync(filePath)) {
    console.error(`Component not found: ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  content = content.replace(
    /<Link href="\/(?:compare|calculator)"( className="text-navy[^"]+")>Compare Investments<\/Link>/g,
    '<Link href="#calculator"$1>Calculate</Link>'
  );
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Updated ${comp}`);
  } else {
    console.log(`No changes made to ${comp}`);
  }
}

console.log(`Total components updated: ${updatedCount}`);

// Update CalculatorEngine.tsx to add scroll-mt-24
const enginePath = path.join('components', 'CalculatorEngine.tsx');
let engineContent = fs.readFileSync(enginePath, 'utf8');
const engineOriginal = engineContent;
engineContent = engineContent.replace(
  /<section id="calculator" className="py-20 lg:py-32 bg-off-white border-y border-border-grey">/g,
  '<section id="calculator" className="scroll-mt-24 py-20 lg:py-32 bg-off-white border-y border-border-grey">'
);
if (engineContent !== engineOriginal) {
  fs.writeFileSync(enginePath, engineContent, 'utf8');
  console.log(`Updated CalculatorEngine.tsx with scroll-mt-24`);
}
