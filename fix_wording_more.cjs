const fs = require('fs');
const path = require('path');

const filesToFix = [
  'components/Home.tsx',
  'components/Investments.tsx'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Case-sensitive replacements
    content = content.replace(/Illustration Calculator/g, 'Investment Calculator');
    content = content.replace(/Calculator illustrations/g, 'Calculator estimates');
    content = content.replace(/calculator illustrations/g, 'calculator estimates');
    content = content.replace(/estimated illustration/g, 'estimate');
    content = content.replace(/estimated illustrations/g, 'estimates');
    content = content.replace(/illustrations/g, 'estimates');
    content = content.replace(/Illustrations/g, 'Estimates');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed wording in ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
