const fs = require('fs');
const path = require('path');

const filesToFix = [
  'components/PrivateEquityGrowth.tsx',
  'components/PrivateEquityFlexibleAccess.tsx'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Case-sensitive replacements
    content = content.replace(/Calculator illustration/g, 'Calculator estimate');
    content = content.replace(/Investment Illustration/g, 'Investment Calculator');
    content = content.replace(/an illustration/g, 'an estimate');
    content = content.replace(/illustrations/g, 'estimates');
    content = content.replace(/Illustrations/g, 'Estimates');
    content = content.replace(/a basic illustration/g, 'a basic estimate');
    content = content.replace(/growth-focused illustration/g, 'growth-focused estimate');
    content = content.replace(/estimated illustration/g, 'estimate');
    content = content.replace(/for illustration only/g, 'for estimation only');
    content = content.replace(/for illustration/g, 'for estimation');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed wording in ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
