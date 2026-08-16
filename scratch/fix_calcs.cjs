const fs = require('fs');

let engContent = fs.readFileSync('components/CalculatorEngine.tsx', 'utf8');
const regex = /product=\$\{encodeURIComponent\(product\.name\)\}/g;
engContent = engContent.replace(regex, 'product=${encodeURIComponent(option)}');

fs.writeFileSync('components/CalculatorEngine.tsx', engContent, 'utf8');
console.log('Fixed CalculatorEngine.tsx');
