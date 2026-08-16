const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const allFiles = walkSync('components').concat(walkSync('app'));

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Protect CalculatorEngine
  // Protect product-page headings like Calculate an Estimate (Oh wait, they might say Calculate an Estimate)
  if (file.includes('CalculatorEngine.tsx') || file.includes('InvestmentComparisonCalculator.tsx')) {
    return;
  }

  // Safe to replace across all other files
  // "Calculate an estimate" in product pages? "Do not replace product-page calculator section headings if they are specifically product calculators. Product page calculators can still say things like: Calculate an Estimate"
  // So don't replace "Calculate an Estimate" blindly. Only where it points to /calculator.
  
  // Actually, I can just do text replacements for specific terms:
  content = content.replace(/Investment Calculator/gi, 'Compare Investments');
  content = content.replace(/Use the Calculator/gi, 'Compare Investments');
  content = content.replace(/Use Calculator/gi, 'Compare Investments');
  content = content.replace(/View Calculator/gi, 'Compare Investments');
  content = content.replace(/Calculator page/gi, 'Compare Investments page');
  content = content.replace(/Calculator Results/g, 'Comparison Results');
  content = content.replace(/calculator results/g, 'calculator and comparison results');

  // "Calculator" to "Compare Investments" for headers and footers and menus
  // Only if it's exact ">Calculator<" or ""Calculator"" in JSON etc.
  content = content.replace(/>Calculator</g, '>Compare Investments<');
  content = content.replace(/"Calculator"/g, '"Compare Investments"');

  // "Calculate an Estimate" to "Compare Investment Options"
  // Let's only replace it in HowItWorks.tsx or Home.tsx where it refers to the main calculator.
  if (file.includes('HowItWorks.tsx') || file.includes('Home.tsx') || file.includes('DigitalInvesting.tsx')) {
    content = content.replace(/Calculate an estimate/gi, 'Compare investment options');
    content = content.replace(/Calculate an Estimate/gi, 'Compare Investment Options');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
