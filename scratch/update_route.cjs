const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
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

const allFiles = [...walkSync('components'), ...walkSync('app'), ...walkSync('src')];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace /calculator with /compare
  // Cases to handle:
  // href="/calculator"
  // link: "/calculator"
  // path: '/calculator'
  // router.push('/calculator')

  content = content.replace(/"\/calculator"/g, '"/compare"');
  content = content.replace(/'\/calculator'/g, "'/compare'");
  content = content.replace(/href="\/calculator"/g, 'href="/compare"');
  content = content.replace(/link:\s*"\/calculator"/g, 'link: "/compare"');
  content = content.replace(/path:\s*'\/calculator'/g, "path: '/compare'");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated routing in ${file}`);
  }
});
