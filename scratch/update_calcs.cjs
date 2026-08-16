const fs = require('fs');

// 1. Update InvestmentComparisonCalculator
let compContent = fs.readFileSync('components/InvestmentComparisonCalculator.tsx', 'utf8');

const compLinkRegex = /<Link\s+href=\{product\.route\}/;
const compLinkReplace = `<Link 
                        href={product.route === '/contact' ? \`/contact?source=compare-investments&amount=\${amount}&term=\${term}&interest=\${interest}&product=\${encodeURIComponent(product.name)}\` : product.route}`;

compContent = compContent.replace(compLinkRegex, compLinkReplace);
fs.writeFileSync('components/InvestmentComparisonCalculator.tsx', compContent, 'utf8');
console.log('InvestmentComparisonCalculator.tsx updated');

// 2. Update CalculatorEngine
let engContent = fs.readFileSync('components/CalculatorEngine.tsx', 'utf8');
// Check if CalculatorEngine has any Link to /contact
// In CalculatorEngine, the CTA is typically a Link to #calculator or /contact
const engLinkRegex = /<Link\s+href="\/contact"/g;
const engLinkReplace = `<Link href={\`/contact?source=product-calculator&amount=\${amount}&product=\${encodeURIComponent(product.name)}\`}`;
engContent = engContent.replace(engLinkRegex, engLinkReplace);
fs.writeFileSync('components/CalculatorEngine.tsx', engContent, 'utf8');
console.log('CalculatorEngine.tsx updated');
