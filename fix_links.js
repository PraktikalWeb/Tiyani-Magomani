import fs from 'fs';
import path from 'path';

const componentsDir = 'components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<Link\s+to=/g, "<Link href=");
  fs.writeFileSync(filePath, content);
}
console.log('Fixed links.');
