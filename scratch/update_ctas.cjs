const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

let ctasUpdated = 0;

walkDir('./', (filePath) => {
  if (filePath.includes('node_modules') || filePath.includes('.next') || filePath.includes('.git') || !filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) {
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace link hrefs
  content = content.replace(/href="\/calculator"/g, 'href="/compare"');

  // Replace text in buttons / links
  const labelsToReplace = [
    'Use Calculator',
    'Use the Calculator',
    'View Calculator',
    'Investment Calculator',
    'Calculator',
    'Calculate an Estimate',
    'Compare Options'
  ];

  for (const label of labelsToReplace) {
    // Look for exact match between tags, e.g. >Calculator< or > Calculator <
    const regex = new RegExp(`>\\s*${label}\\s*<`, 'g');
    content = content.replace(regex, '>Compare Investments<');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    ctasUpdated++;
    console.log(`Updated CTAs in ${filePath}`);
  }
});

console.log(`Total files updated with CTAs: ${ctasUpdated}`);

// Fix metadata in app/compare/page.tsx
const comparePagePath = path.join('app', 'compare', 'page.tsx');
if (fs.existsSync(comparePagePath)) {
  let content = fs.readFileSync(comparePagePath, 'utf8');
  
  content = content.replace(/title:\s*['"]Calculator['"]/g, "title: 'Compare Investments | Tiyani Magomani'");
  content = content.replace(/description:\s*['"][^'"]+['"]/g, "description: 'Compare estimated growth and income across available investment options using displayed product assumptions.'");
  
  fs.writeFileSync(comparePagePath, content, 'utf8');
  console.log(`Updated metadata in ${comparePagePath}`);
}

// Remove How it works link in Footer.tsx
const footerPath = path.join('components', 'Footer.tsx');
if (fs.existsSync(footerPath)) {
  let content = fs.readFileSync(footerPath, 'utf8');
  content = content.replace(/\s*<li><Link href="\/how-it-works".*?<\/Link><\/li>/g, '');
  fs.writeFileSync(footerPath, content, 'utf8');
  console.log(`Removed How It Works link in ${footerPath}`);
}

// Also check components/Header.tsx for "Calculator" or "How it works"
const headerPath = path.join('components', 'Header.tsx');
if (fs.existsSync(headerPath)) {
  let content = fs.readFileSync(headerPath, 'utf8');
  // Just in case it's in a list
  content = content.replace(/\s*<Link href="\/how-it-works".*?<\/Link>/g, '');
  fs.writeFileSync(headerPath, content, 'utf8');
  console.log(`Removed How It Works link in ${headerPath}`);
}
