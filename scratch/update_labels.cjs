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

const componentsFiles = walkSync('components');
const appFiles = walkSync('app');
const allFiles = [...componentsFiles, ...appFiles];

// Rules for replacement
const regexRules = [
  { pattern: />\s*Use Calculator\s*</gi, replacement: '>Compare Investments<' },
  { pattern: />\s*View Calculator\s*</gi, replacement: '>Compare Investments<' },
  { pattern: />\s*Calculate an Estimate\s*</gi, replacement: '>Compare Investment Options<' },
  { pattern: />\s*Investment Calculator\s*</gi, replacement: '>Compare Investments<' },
  { pattern: />\s*Calculator\s*</gi, replacement: '>Compare Investments<' },
  { pattern: /title:\s*'Investment Calculator/gi, replacement: 'title: \'Compare Investments' },
  { pattern: />\s*Calculator page\s*</gi, replacement: '>Compare Investments page<' },
  { pattern: /calculator results/gi, replacement: 'calculator and comparison results' },
];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Protect product-specific calculators from being changed incorrectly
  // The user said: "Do not replace product-page calculator section headings if they are specifically product calculators."
  // And "Component names like CalculatorEngine can remain"

  // We only replace text inside JSX boundaries mostly, and only for specific terms.
  
  // Specific file fixes for components/Header.tsx, components/Footer.tsx, etc.
  if (content.includes('/calculator') || file.includes('app\\calculator\\page.tsx') || file.includes('app/calculator/page.tsx')) {
    
    // Manual selective replacements to avoid breaking code
    const original = content;

    // Apply specific replacements safely
    content = content.replace(/>\s*Use Calculator\s*</g, '>Compare Investments<');
    content = content.replace(/>\s*View Calculator\s*</g, '>Compare Investments<');
    content = content.replace(/>\s*Investment Calculator\s*</g, '>Compare Investments<');
    
    // For standalone "Calculator" that's used as a label
    content = content.replace(/>\s*Calculator\s*</g, '>Compare Investments<');
    
    // Calculate an estimate
    content = content.replace(/>\s*Calculate an Estimate\s*</g, '>Compare Investment Options<');

    // Calculator page
    content = content.replace(/>\s*Calculator page\s*</g, '>Compare Investments page<');
    
    if (content !== original) {
      changed = true;
    }
  }

  // Legal/compliance pages
  if (file.includes('Important Information') || content.includes('calculator results') && !file.includes('CalculatorEngine.tsx') && !file.includes('InvestmentComparisonCalculator.tsx')) {
    // Only if it doesn't already say comparison results
    if (content.includes('calculator results') && !content.includes('calculator and comparison results')) {
       // but wait, user said "calculator results" -> "calculator and comparison results"
       // Let's replace it in Legal files or wherever it appears
       // Careful with exact wording replacements
       const original = content;
       content = content.replace(/calculator results/g, 'calculator and comparison results');
       // But wait, the user said: "Replace: calculator results With: calculator and comparison results or: comparison calculator results"
       // I'll use "calculator and comparison results"
       if (content !== original) {
         changed = true;
       }
    }
  }

  // Metadata in app/calculator/page.tsx
  if (file.includes('app\\calculator\\page.tsx') || file.includes('app/calculator/page.tsx')) {
    content = content.replace(/title:\s*'Investment Calculator \| Tiyani Magomani'/, "title: 'Compare Investments | Tiyani Magomani'");
    content = content.replace(/description:\s*'Explore structured investment pathways built around growth, income and flexibility.'/, "description: 'Compare estimated growth and income across available investment options using displayed product assumptions.'");
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
